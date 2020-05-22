	
	const menuOpener = document.querySelector(".js--menuOpener");
	const pages = document.getElementsByClassName('page');
	const menuContainer = document.querySelector('.menu-container');
	const menuNames = document.querySelectorAll('.menu-container span');

			for (let i = 0; i < menuNames.length; i++) {
				menuNames[i].addEventListener("click", function(event){
				
				let thisElement = document.getElementById(this.innerHTML);
			
			for (var z = 0; z < pages.length; z++) {
					pages[z].classList.remove(['menu-checked'], ['shadow-lg']);
					pages[z].style.transform="none";
					pages[z].style.display="none";

				}

				thisElement.style.display="block";			
				menuContainer.classList.remove("menu-opened");
				thisElement.classList.add("animation-divs");
			

		});
	}
	

	menuOpener.addEventListener("click", function(){



			let transformPercents = 30;	
				

			menuContainer.classList.add("menu-opened");

			for (let i = 0; i < pages.length; i++) {
			if(pages[i].style.display="inline-block"){ 
				
			}
				
			pages[i].style.display="inline-block";						
			pages[i].classList.add(['menu-checked'], ['shadow-lg']);
			pages[i].style.transform=" translate3d(0px,"+ transformPercents+"%, -200px)";
			transformPercents-=(i+1)*30+(20*i);	
			

			pages[i].addEventListener("click", function(){
				for (var z = 0; z < pages.length; z++) {
					pages[z].classList.remove(['menu-checked'], ['shadow-lg']);
					pages[z].style.transform="none";
					pages[z].style.display="none";

				}

				this.style.display="block";			
				menuContainer.classList.remove("menu-opened");
				this.classList.add("animation-divs");
			
			});


		}
	});	

	function hideModal(element) { 

		element.parentElement.parentElement.parentElement.parentElement.style.display="none";

	}

	function openModal() {
		document.getElementsByClassName('modal')[0].style.display="block";

		document.getElementsByClassName('modal')[0].classList.add('fade-up');


	}


	