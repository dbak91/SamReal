/* Functions as an appender to the htmls to append functionJ main script but with a unique name each fetch to hack no caching (else caching causing eleemnts to dispay wrong widths if first come from a different page 
	
	*/

	

	function applyAdjustments(){
		
		document.addEventListener('DOMContentLoaded',function() { //define here 
		
			
			const script1 = document.createElement('script');
			script1.src = `js/functionJ.js?v=${new Date().getTime()}`;
			document.body.appendChild(script1);
			});

	}
	
	window.addEventListener('load', 
		    applyAdjustments  // Re-run the JavaScript adjustments when the page loads
		);
		
	applyAdjustments();
		