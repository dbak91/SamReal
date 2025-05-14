
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
	    const img = document.querySelector('#samFirstContainer img');
	        const imgRect = img.getBoundingClientRect();
			// get scroll position past sams image and expand samFull to full width
						const samImg = document.querySelector('#samFirstContainer img');
						const samImgPos = samImg.getBoundingClientRect();
						const samFull = document.querySelector("#samFull");	
						const mobile_special = document.querySelector("#mobile-special");
						if(samFull.getBoundingClientRect().top > samImg.getBoundingClientRect().bottom){
										samFull.classList.add('expanded-width')
									}
									
									if(mobile_special.getBoundingClientRect().top > samImg.getBoundingClientRect().bottom)
									{
										mobile_special.classList.add('expanded-width');
									}
									else{
										mobile_special.classList.remove('expanded-width');
									}	
		function adjustToImageSize(){
			
					
					if(window.innerWidth < 856 && window.scrollY > mobile_special.getBoundingClientRect().top){
						samImg.classList.add("stop-sticky");
					}
					else
					{
						samImg.classList.remove("stop-sticky");
					}
			
		};
			
			
			
		window.addEventListener('scroll', adjustToImageSize);
		adjustToImageSize();
		
		
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
						
					});
				};
