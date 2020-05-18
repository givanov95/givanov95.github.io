	var pages = document.getElementsByClassName('page');
	function menuOpener() {				
		let transformPercents = 30;
		

			for (var i = 0; i < pages.length; i++) {		
			pages[i].style.display="inline-block";						
			pages[i].classList.add(['menu-checked'], ['shadow-lg']);
			pages[i].style.transform=" translate3d(0px,"+ transformPercents+"%, -200px)";
			transformPercents-=(i+1)*30;		
			pages[i].addEventListener("click", function(){

				for (var z = 0; z < pages.length; z++) {
					pages[z].classList.remove(['menu-checked'], ['shadow-lg']);
					pages[z].style.transform="none";
					pages[z].style.display="none";

				}

				this.style.display="block";
				this.classList.add("animation-divs")
			
			});

		}
	}

	function hideModal(element) { 

		element.parentElement.parentElement.parentElement.parentElement.style.display="none";

	}

	function openModal() {
		document.getElementsByClassName('modal')[0].style.display="block";

		document.getElementsByClassName('modal')[0].classList.add('fade-up');


	}


	