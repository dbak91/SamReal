
	fetch("TopMenuBar.html")
		    .then(response => response.text())
		    .then(data => {
		       	//console.log("TopMenuBar fetched:", data);
				// insert very top
				//document.body.insertAdjacentHTML('afterbegin', '<div class="pageContentContainer"></div>');
		         document.body.insertAdjacentHTML('afterbegin', data); 
				 addMoreFunction();
				
		    })
		    .catch(error => console.error("Error loading the TopMenuBar.html:", error));
		
		function addMoreFunction(){
					
					const moreText = document.getElementById("moreLink");
					
					moreText.addEventListener("click", function(event){
						
						event.preventDefault();
						
						
						const extraMenu = document.getElementById("extraMenuBar");
						
						if(extraMenu.style.display == null ||extraMenu.style.display =="none"){
							extraMenu.style.display = "flex";
						}
						else //reset
						{
							extraMenu.style.display = "none";
						}
						
					});//add event
				};// addMoreFunction
