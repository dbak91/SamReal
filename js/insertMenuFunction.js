
fetch("TopMenuBar.html")
	    .then(response => response.text())
	    .then(data => 
		{
	       	//console.log("TopMenuBar fetched:", data);
			// insert very top
			//document.body.insertAdjacentHTML('afterbegin', '<div class="pageContentContainer"></div>');
	         document.body.insertAdjacentHTML('afterbegin', data); 
			 addMoreFunction();
			 setExtraTop();

			
	    })
	    .catch(error => console.error("Error loading the TopMenuBar.html:", error) );
		
function addMoreFunction()
{
					
	const moreText = document.getElementById("moreLink");
					
	moreText.addEventListener("click", function(event)
	{
						
		event.preventDefault();
						
						
		const extraMenu = document.getElementById("extraMenuBar");
						
		if(extraMenu.style.display == null ||extraMenu.style.display =="none")
		{
			extraMenu.style.display = "flex";
		}
		else //reset on reclick
		{
			extraMenu.style.display = "none";
		}
						
	});//add event
};// addMoreFunction
				
// was using hardcoded top for extra menu bar @59px but menu bar is a bigger size on pcs, need
// to get dynamic size of menu
function setExtraTop()
{
	const mainBar = document.querySelector('.menuBar');
	const extraBar = document.getElementById('extraMenuBar');

	if (mainBar && extraBar) 
	{
		const height = mainBar.offsetHeight; // get dynamic height in pixels
						
		extraBar.style.top = height + 'px' ;
	}
					
	// diags
	const height = mainBar.offsetHeight; 
	console.log("height of mainBar:", height, "px");
    console.log("(vw):", window.innerWidth, "px");
	
}//setExtraTop
			
window.addEventListener('resize', setExtraTop);

				// temp diags
				//window.addEventListener('load', function () 
				// {
				//      const vw = window.innerWidth;
				//      alert('vw: ' + vw + 'px');
				// });