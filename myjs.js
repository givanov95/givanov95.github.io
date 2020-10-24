	
	const menuOpener = document.querySelector(".js--menuOpener");
	const pages = document.getElementsByClassName('page');
	const menuContainer = document.querySelector('.menu-container');
	const pagesContainer = document.querySelector(".pages-container");
	const menuNames = document.querySelectorAll('.menu-container span');
	let underlinedElement = document.querySelector(".menu-container span.underline");
	let lastScrollPoint = 0;

	// attach the Events 
	for (let i = 0; i < menuNames.length; i++) {
		menuNames[i].addEventListener("click", openCurrentPageWithMenuClick);
		pages[i].addEventListener("click", pageClickOpen);
		pages[i].addEventListener("scroll", pageScrollOpen);		
	}
		menuOpener.addEventListener("click", expandAllPages);
	// Functions
	function openCurrentPageWithMenuClick(e){
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
		// underline the item with index as expandig page 
		menuNames[triggerIndex].classList.add("underlined");
		// epand the clicked page 
		expandCurrentPage(trigger);
	}

	function pageScrollOpen(e) {
		let trigger = e.currentTarget;	
		let triggerIndex = [].slice.call(pagesContainer.children).indexOf(trigger);		
		let pageOffset = trigger.scrollTop;

		if(pageOffset > 300 && lastScrollPoint < pageOffset ) {				
			pagesClose();	
			// expand the scrolled page if scroll > 300 		
			expandCurrentPage(trigger);
		}		
		removeUndelinedItems();	
		// underline the menu item with index as the opened page
		menuNames[triggerIndex].classList.add("underlined");
		// setting the last point of scroll 
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

	function expandCurrentPage(triggerelement) {
		let trigger = triggerelement;
		// the trigger must be set in the main function 
		trigger.classList.remove("hidden");		
		trigger.classList.add("animation-divs");
		menuContainer.classList.remove("menu-opened");
	}