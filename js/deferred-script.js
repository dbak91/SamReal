/* Functions as an appender to the htmls to append insert-menu-function script that will ad a menu at th top but 
*  the script will have a unique name each fetch to hack no caching (else caching causes elemrnts to display wrong 
*  if user first comes from a different page)
*
*/

function applyAdjustments(){
	
	document.addEventListener('DOMContentLoaded',function()
	{  
		//create a script to insert to body
		const script1 = document.createElement('script');
		
		script1.src = `js/insert-menu-function.js?v=${new Date().getTime()}`; //generate unique timestamp name as v stop caching so sharted widths readjust
		
		//put insert menu fucntion function in body for browser to execute
		document.body.appendChild(script1);
	});

}

window.addEventListener('load', applyAdjustments);
	
applyAdjustments();
		