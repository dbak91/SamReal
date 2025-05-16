/**
 * https://salesforce.stackexchange.com/questions/230009/regex-for-email-validation
 *  ^[^@]+@[^@]+\.[^@]+$
 * 
 * email validation regex
 * 
 * 
 */

document.addEventListener("DOMContentLoaded", function() 
{
	/**
	 * get html elements
	 */
  	const nameInput = document.getElementById("username");
  	const emailInput = document.getElementById("email");
	const submitBtn = document.querySelector(".submitBtn");
	const errorOutput = document.querySelector(".errorPanel div");
  
	/**
	 * ADD SUBMIT AACTION LISTENER
	* checkname not empty
	* check email valid
	* send reques to mudfoot
	* handle oputput
	* 
	*/
   	submitBtn.addEventListener("click", function(){
	

		if (nameInput.value.trim() === "") 
	    {
		    errorOutput.textContent = "No name supplied";
		    return;
		}
		
		const emailPattern = /^[^@]+@[^@]+\.[^@]+$/; // sourceforge.net		
		if (!emailPattern.test(emailInput.value)) 
		{
			
			errorOutput.textContent = "Email address invalid format";
		    
			return;
			
		}
		
		const mudfootJsonData = {
		      name: nameInput.value.trim(),
		      email: emailInput.value.trim()
		    };
			/**
			 * no response or message checking makes a lot of assumptions, saving for hall fo fame extension
			 */
		fetch("https://mudfoot.doc.stu.mmu.ac.uk/ash/api/mailinglist", {
		      method: "POST",
		     
			  headers: {
		        "Content-Type": "application/json"
		      },
		     
			   body: JSON.stringify(mudfootJsonData)
		    })
		    .then(response => response.json()) 
			
		    .then(result => {
				// basic none null check
		      if (result.message) {
		        
		        errorOutput.style.color = "white";
		        errorOutput.textContent = "Success, signed up.  || Server Message(may be empty):" +  (result.messsage ||  "");
		        
		        // reset
		        nameInput.value = "";
		        emailInput.value = "";
		      } else {
				
		        
		        errorOutput.style.color = "red";
		        errorOutput.textContent = result.error || "An unkown error was returned(result.error null)"; /* could be null */
		      }
		    })
		    .catch(error => {
		      errorOutput.textContent = "Error connecting to server:" + error.message;
		    });/* fetch mudfoot*/		

   	});/* submit action list */

   
});/* on load */