/**
 * could be updated to use async function but not enough time to learn. using basic fetch
 */

document.addEventListener("DOMContentLoaded", function() 
{
 	const form = document.querySelector(".formGrid");
  	const yearInput = document.getElementById("year");
  	const submitBtn = document.querySelector(".submitBtn");
	const displayOutput = document.querySelector(".errorPanel div");
	const imgOutput = document.querySelector(".errorPanel img");
	

	
	/**
	 * initial 2021 sever query */	
	const url = `https://mudfoot.doc.stu.mmu.ac.uk/ash/api/halloffame?year=2021`;
		
			fetch(url)
			           .then(response => {
			               if (!response.ok) {
			                   throw new Error(`HTTP error ${response.status}`);
			               }
			               return response.json();
			           })
			           .then(data => {
						
						
							const imgUrl= data.data[0].image.source;
							
							displayOutput.textContent = "Year: " + data.year +  " Band: " +data.data[0].band.name;//+ JSON.stringify(data, null, 2); //dev testing line, to see output
			               	displayOutput.style.color = "white";
							
							imgOutput.src = imgUrl;
							
			           })
			           .catch(error => {
			               displayOutput.textContent = "Error: " + error.message;
			               displayOutput.style.color = "red";
			           });
	
	/**
	 * ADD SUBMIT AACTION LISTENER
	* checkname not empty
	* check email valid
	* send reques to mudfoot
	* handle oputput
	* 
	*/
   	submitBtn.addEventListener("click", function(){
	

		if (yearInput.value.trim() === "") 
	    {
			displayOutput.style.color = "red";
		    displayOutput.textContent = "No year supplied";
		    return;
		}
		
		if (yearInput.value > 2025) 
			    {
					displayOutput.style.color = "red";
				    displayOutput.textContent = "Year not happened yet";
				    return;
				}
		
				if (yearInput.value < 1900) 
							    {
									displayOutput.style.color = "red";
								    displayOutput.textContent = "Too far back (1900 min)";
								    return;
								}
								
		displayOutput.style.color = "white";
		
		
		const url = `https://mudfoot.doc.stu.mmu.ac.uk/ash/api/halloffame?year=${encodeURIComponent(yearInput.value.trim())}`;
	
		fetch(url)
		           .then(response => {
		               if (!response.ok) {
		                   throw new Error(`HTTP error ${response.status}`);
		               }
		               return response.json();
		           })
		           .then(data => {
					
					
						const imgUrl= data.data[0].image.source;
						//const br = document.createElement("br");
						
						displayOutput.innerHTML= "Year: " + data.year + " Band: " +data.data[0].band.name;//+ JSON.stringify(data, null, 2); //dev testing line, to see output
		               	displayOutput.style.color = "white";
						
						imgOutput.src = imgUrl;
						
		           })
		           .catch(error => {
		               displayOutput.textContent = "Error: " + error.message;
		               displayOutput.style.color = "red";
		           });

   	});/* submit action list */

   
});/* on load */