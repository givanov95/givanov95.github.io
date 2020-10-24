	
	const menuOpener = document.querySelector(".js--menuOpener");
	const pages = document.getElementsByClassName('page');
	const menuContainer = document.querySelector('.menu-container');
	const pagesContainer = document.querySelector(".pages-container");
	const menuNames = document.querySelectorAll('.menu-container span');
	let underlinedElement = document.querySelector(".menu-container span.underline");
	let lastScrollPoint = 0;


	for (let i = 0; i < menuNames.length; i++) {
		menuNames[i].addEventListener("click", openCurrentPageFromMenu);
		pages[i].addEventListener("click", pageClickOpen);
		pages[i].addEventListener("scroll", pageScrollOpen);		
	}
		menuOpener.addEventListener("click", expandAllPages);

	function openCurrentPageFromMenu(e){
		let trigger = e.currentTarget;
		let triggerParentIndex = [].slice.call(menuContainer.children).indexOf(trigger.parentElement);
		pagesClose();
		removeUndelinedItems();	
		trigger.classList.add("underlined");	
		pages[triggerParentIndex].classList.remove("hidden");
		pages[triggerParentIndex].classList.add("animation-divs");
		menuContainer.classList.remove("menu-opened");
	}

	function expandAllPages() {
		let transformX=0;		
		let transformPercents = (screen.width > 900) ? 30:10;
		menuContainer.classList.add("menu-opened");
		for(page of pages) {			
			page.classList.add(['menu-checked'], ['the-shadow'])
			page.classList.remove("hidden");
			page.scrollTop = 0;
			page.style.transform=" translate3d("+transformX+"px,"+transformPercents+"%, -200px) skewY(-1deg)";		
			if(page.classList.contains("hidden")) {
				page.classList.remove("hidden"); 
			}
			transformPercents-= 80;
			transformX+=20;
			
		}
	}



	function pagesClose() {
		for(page of pages) {
			page.classList.remove(['menu-checked'], ['the-shadow'])
			page.classList.add("hidden")
			page.style.transform = "none";
		}		
	}

	function pageClickOpen(e) {
		trigger = e.currentTarget;
		let triggerIndex = [].slice.call(pagesContainer.children).indexOf(trigger);
		pagesClose();
		removeUndelinedItems();	
		menuNames[triggerIndex].classList.add("underlined");

		trigger.classList.remove("hidden");		
		menuContainer.classList.remove("menu-opened");
		trigger.classList.add("animation-divs");
			
	}

	function pageScrollOpen(e) { 	
		let trigger = e.currentTarget;
		let triggerIndex = [].slice.call(pagesContainer.children).indexOf(trigger);		
		let pageOffset = trigger.scrollTop;

		if(pageOffset > 300 && lastScrollPoint < pageOffset ) {	
			pagesClose();	
			trigger.classList.remove("hidden");		
			menuContainer.classList.remove("menu-opened");
			trigger.classList.add("animation-divs");
		}		
		removeUndelinedItems();	
		menuNames[triggerIndex].classList.add("underlined");
		lastScrollPoint = pageOffset;
	}

	function removeUndelinedItems() {
		for( menuName of menuNames) {
			if(menuName.classList.contains("underlined")){
				menuName.classList.remove("underlined");
			}
		}
	}

	function hideModal(element) { 
		element.parentElement.parentElement.parentElement.parentElement.style.display="none";
	}

	function openModal() {
		let modal = document.getElementById("choiceVersion");
		modal.style.display="block";
		modal.classList.add('fade-up');

	}