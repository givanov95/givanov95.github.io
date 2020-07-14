	
	const menuOpener = document.querySelector(".js--menuOpener");
	const pages = document.getElementsByClassName('page');
	const menuContainer = document.querySelector('.menu-container');
	const menuNames = document.querySelectorAll('.menu-container span');
	let underlined=menuNames[0];

			for (let i = 0; i < menuNames.length; i++) {
				menuNames[i].addEventListener("click", function(event){

				underlined=this;
				let thisElement = document.getElementById(this.innerHTML);
			
			for (var z = 0; z < pages.length; z++) {
					pages[z].classList.remove(['menu-checked'], ['the-shadow']);
					pages[z].style.transform="none";
					pages[z].style.display="none";

				}

				thisElement.style.display="block";			
				menuContainer.classList.remove("menu-opened");
				thisElement.classList.add("animation-divs");
			

		});
	}
	

	menuOpener.addEventListener("click", function(){



			let transformPercents;
			let transformX=0;
			if(screen.width>900) {transformPercents = 30;}
			else { 
			transformPercents = 10;
				}	

			menuContainer.classList.add("menu-opened");

			for (let i = 0; i < pages.length; i++) {
			
				if(menuNames[i].classList.contains('underline')) {
				menuNames[i].classList.remove("underline");
				}

				underlined.classList.add("underline");

				
			pages[i].style.display="inline-block";						
			pages[i].classList.add(['menu-checked'], ['the-shadow']);
			pages[i].style.transform=" translate3d("+transformX+"px,"+transformPercents+"%, -200px) rotateY(60deg)";
			transformPercents-= 80;
			transformX+=20;

			pages[i].addEventListener("click", function(){
				for (var z = 0; z < pages.length; z++) {
					pages[z].classList.remove(['menu-checked'], ['the-shadow']);
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


	
