document.addEventListener('DOMContentLoaded', function () {
	

	//
	//
	//	Since our website loads content with Ajax, we will use the methods below to control when pages are changed.
	//	All our page specific functions will then run in the conditionals in the "onPageChange" function.
	//
	//
	//

	let lastPageId = null;

	function getPageIdFromBodyClass() {
		const body = document.body;
		const match = [...body.classList].find(cls => cls.startsWith('page-id-'));
		return match ? match.replace('page-id-', '') : null;
	}

	const observer = new MutationObserver(mutations => {
		for (let mutation of mutations) {
			if (mutation.attributeName === 'class') {
				const pageId = getPageIdFromBodyClass();
				onPageChange(pageId);
			}
		}
	});

	function changeActivePageClass() {
		var currentURL = window.location.href;
		console.log(currentURL);
		var pageLinks = document.querySelectorAll('.menu-item a');
		pageLinks.forEach(function(link) {
			if (link.href === currentURL) {
				link.parentElement.classList.add('active-page');
				console.log('setting active page for', link.parentElement);
			} else {
				link.parentElement.classList.remove('active-page');
				console.log('removing active page for', link.parentElement);
			}
		});
	}

	observer.observe(document.body, {
		attributes: true,
		attributeFilter: ['class']
	});

	// Run initially
	onPageChange(getPageIdFromBodyClass());
	changeActivePageClass();

	var pageTimer = null;
	function onPageChange(pageId) {
		// If both are null, do nothing
		if (pageId === null && lastPageId === null) return;

		// If we transitioned to a page WITH an ID or from null → same ID, allow it
		if (pageId === lastPageId && pageId !== null) return;

		lastPageId = pageId;

		console.log('Page ID changed to:', pageId);

		// Place one-time logic for pages
		if (pageId === '193') {
			workPage();
		} else if (pageId === '184') {
			servicesPage();
		} else if (pageId === '159') {
			homePage();
		}

		// Re-initialize carousels on page change
		if (typeof window.initializeCarousels === 'function') {
			console.log('Re-initializing carousels for page ID:', pageId);
			// Clear any existing timer to avoid multiple initializations
			if (pageTimer) {
				clearTimeout(pageTimer);
			}
			pageTimer = setTimeout(function(){
				window.initializeCarousels();
			}, 2000)
		}

		changeActivePageClass();

		resetCursor();
	}

	//--Function to reset cursor
	function resetCursor() {
		const mouseCursor = document.getElementById('mouseCursor');
		if (!mouseCursor) return;

		// Remove all classes except 'dot'
		mouseCursor.className = 'dot';

		// Find <span class="cursor-icon"> inside it
		const cursorIcon = mouseCursor.querySelector('span.cursor-icon');
		if (cursorIcon) {
			cursorIcon.innerHTML = ''; // Remove all child elements
		}
	}

	//-- Function to hide logo when menu opens
	const toggle = document.querySelector('.menu--toggle');
	const branding = document.querySelector('.site-branding');

	if (toggle && branding) {
		const observer = new MutationObserver(() => {
			if (toggle.classList.contains('active')) {
				branding.classList.add('menu-open');
			} else {
				branding.classList.remove('menu-open');
			}
		});

		observer.observe(toggle, { attributes: true, attributeFilter: ['class'] });
	}


	//
	// -- START Conditional Page functionalities below
	//
	
	
	
	/*------------------------------------	Home Page	------------------------------------*/
	function homePage() {
		console.log("Home");
		
		// -- Prevent client squares on Home Page being clicked
		// Target all anchor tags within .our-clients-section .pe-client
		const clientLinks = document.querySelectorAll('.our-clients-section .pe-client a');

		clientLinks.forEach(function(link) {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				return false;
			});
		});
	}

	/*------------------------------------	Work Page	------------------------------------*/
	function workPage() {
		console.log("Work");

		// Add coming-soon Class to Work Page > Featured Projects Showcasewall
		const projects = document.querySelectorAll('.showcase-project');
		projects.forEach(project => {
			const categoryDiv = project.querySelector('.project-category');
			if (
				categoryDiv &&
				categoryDiv.textContent.trim().toLowerCase() === 'coming soon'
			) {
				project.classList.add('coming-soon');
			}
		});
	}

	/*------------------------------------	Services Page	------------------------------------*/
	function servicesPage() {
		console.log("Services");

		// Custom anchors to header titles
		const anchorMap = [
			'#strategise',
			'#design',
			'#build',
			'#scale',
			'#market'
		];

		const parent = document.getElementById('services-links');
		if (!parent) return;

		const children = parent.querySelectorAll('.showcase-project');

		children.forEach((child, index) => {
			child.addEventListener('click', (e) => {
				e.preventDefault(); // ✅ prevent native anchor jump if <a>

				const targetSelector = anchorMap[index];
				const target = document.querySelector(targetSelector);
				if (!target) return;

				// Update the URL hash manualy
				history.pushState(null, null, targetSelector);

				// Cancel previous scroll
				if (typeof gsap !== 'undefined'){
					console.log('killing existing gsap tweens');
					gsap.killTweensOf(window);
				}

				// Smooth scroll to the target
				console.log(`GSAP scrolling to ${targetSelector}`);
				gsap.to(window, {
					duration: 0,
					scrollTo: { y: target, offsetY: 80 },
					ease: "none"
				});
			});
		});
		
		//----------- This is to handle navigating directly to a Service Hash
		
		const hash = window.location.hash;
		if (!hash) return;

		// Wait 1500ms to ensure layout/GSAP is ready
		setTimeout(() => {
			const target = document.querySelector(hash);
			if (target && typeof gsap !== 'undefined') {
				console.log(`GSAP scrolling to ${hash}`);
				gsap.killTweensOf(window);
				gsap.to(window, {
					duration: 1,
					scrollTo: { y: target, offsetY: 0 }, // adjust offsetY if needed for headers
					ease: "power2.out"
				});
			}
		}, 1500);
	}
	
	
	
	//
	// -- END Conditional Page functionalities below
	//
	
});

jQuery(document).ready(function($) {

	//Open all pdfs in a new tab
	$(document).on('click', 'a[href$=".pdf"]', function() {
		$(this).attr('target', "_blank");
	});
	//Open external links in new tab
	$(document).on('click', 'a', function () {
		if (this.hostname !== window.location.hostname) {
			$(this).attr('target', "_blank");
		}
	});

	//========= svg toggler animation =========
	var toggleTimer = null;
	$(document).on('click', '.toggler', function() {
		console.log('Toggle clicked');
		if($(this).hasClass('active')) {
			// If already active, add transition class
			$(this).addClass('back');
			var toggler = $(this);
			clearTimeout(toggleTimer);
			toggleTimer = setTimeout(function(toggler) {
				// After 500ms, remove the transition class
				toggler.removeClass('back');
			}, 500);
		} else{
			// If not active, remove transition class
			$(this).removeClass('back');
			clearTimeout(toggleTimer);
		}
		$(this).toggleClass('active');
	});
	//========= end svg toggler animation =========

	//add padding equal to header height to the body
	function adjustBodyPadding() {
		var headerHeight = $('header.site-header').outerHeight();
		$('.site-main').css('padding-top', headerHeight + 'px');
	}
	// adjustBodyPadding();
	// $(window).on('resize', function() {
	// 	adjustBodyPadding();
	// });

	//pause vimeo video on click/tap
	$('.pe-video').on('click', function(e) {
		//ensure .pe--play is not the clicked element
		var clickedElement = e.target;
		if($(clickedElement).hasClass('pe--play') || $(clickedElement).parents('.pe--play').length > 0) {
			return; //exit function if .pe--play or its child is clicked
		}
		var player = $(this).find('iframe')[0];
		if (player && $(this).hasClass('lightbox-open')) {//player found and fullscreen open
			var vimeoPlayer = new Vimeo.Player(player);
			vimeoPlayer.pause().then(function() {
			}).catch(function(error) {
				console.error('Error pausing video:', error);
			});
		} else {
			console.log('No iframe found for Vimeo player.');
		}
	});

});