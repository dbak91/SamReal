/**
 * could be updated to use async function but not enough time to learn. using basic fetch
 * 
 * some repitition, same boieler plate for intiial load and action listener, could be function
 */

document.addEventListener("DOMContentLoaded", function() 
{
 	const form = document.querySelector(".formGrid");
  	const yearInput = document.getElementById("year");
  	const submitBtn = document.querySelector(".submitBtn");
	const displayOutput = document.querySelector(".errorPanel div");
	const imgOutput = document.querySelector(".errorPanel img");
	

	function getBandByYear(year) {
	        const url = `https://mudfoot.doc.stu.mmu.ac.uk/ash/api/halloffame?year=${encodeURIComponent(year)}`;

	        fetch(url)
	            .then(response => 
				{
	             
					if (!response.ok)
					{
	                    throw new Error(`HTTP error ${response.status}`);
	                }
	                return response.json();
	            })
	            .then(data =>
				{
					// empty repsonse
	                if (!data.data || data.data.length === 0) 
					{
	                    throw new Error("No band found for the year: " + year);
	                }

					//console.log("func: url"+url+" data"+data.year+" "+data[0].band.name);
	                const band = data.data[0].band.name;
	                const imgUrl = data.data[0].image.source;

	                displayOutput.innerHTML = `Year: ${data.year} <br> Band: ${band}`;
	               
					displayOutput.style.color = "white";
					
	                imgOutput.src = imgUrl;
					
	            })
	            .catch(error => 
				{
	                displayOutput.textContent = "Error: " + error.message;
	                displayOutput.style.color = "red";
	            });
	    }
	
	/**
	 * initial 2021 sever query */	
	//const url = `https://mudfoot.doc.stu.mmu.ac.uk/ash/api/halloffame?year=2021`;
	
	getBandByYear(2021); //initial search
		
	
	/**
	 * ADD SUBMIT ACTION LISTENER
	* checkname not empty
	* check email valid
	* send request to mudfoot
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
		
		// REMOVED year validation due to now beuing a select, was input. 
						
		displayOutput.style.color = "white";
		
		console.log("click y="+yearInput.value)
		getBandByYear(yearInput.value);
   	});/* submit action listener */

   
});/* on load */