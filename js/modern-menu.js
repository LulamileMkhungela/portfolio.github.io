(function () {
	var closeDelay = 620;

	function storeControlPosition(trigger) {
		if (!trigger) return;
		var rect = trigger.getBoundingClientRect();
		document.documentElement.style.setProperty('--menu-control-left', rect.left + 'px');
		document.documentElement.style.setProperty('--menu-control-right', (document.documentElement.clientWidth - rect.right) + 'px');
		document.documentElement.style.setProperty('--menu-control-top', rect.top + 'px');
	}

	var scrollPosition = 0;
	var unlockTimer = null;
	var stateTimer = null;
	var contactTimer = null;
	var isTransitioning = false;
	var menuThemeColor = '#f6f5f1';
	var themeMeta = document.querySelector('meta[name="theme-color"]');
	var originalThemeColor = themeMeta ? themeMeta.getAttribute('content') : null;
	var createdThemeMeta = false;
	function mountToggle(trigger) {
		if (!trigger || trigger.classList.contains('menu-toggle-portal')) return;
		trigger.classList.add('menu-toggle-portal');
		document.body.appendChild(trigger);
	}

	function updateToggleState(open) {
		var triggers = document.querySelectorAll('a.side-nav-show');
		Array.prototype.forEach.call(triggers, function (trigger) {
			trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
			trigger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
		});
	}

	function ensureThemeMeta() {
		if (themeMeta) return themeMeta;
		themeMeta = document.createElement('meta');
		themeMeta.setAttribute('name', 'theme-color');
		document.head.appendChild(themeMeta);
		createdThemeMeta = true;
		return themeMeta;
	}

	function setMenuThemeColor() {
		ensureThemeMeta().setAttribute('content', menuThemeColor);
	}

	function restoreThemeColor() {
		if (!themeMeta) return;
		if (createdThemeMeta) {
			themeMeta.remove();
			themeMeta = null;
			createdThemeMeta = false;
			return;
		}
		if (originalThemeColor) themeMeta.setAttribute('content', originalThemeColor);
	}

	function upgradeProjectFooterLinkedIn() {
		var links = document.querySelectorAll('.footer.tlc-footer a[href*="linkedin.com"]');
		Array.prototype.forEach.call(links, function (link) {
			link.target = '_blank';
			link.rel = 'noopener noreferrer';
			link.setAttribute('aria-label', 'LinkedIn');
			link.innerHTML = '<svg class="project-linkedin-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.41v1.57h.05c.47-.9 1.64-1.86 3.37-1.86 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.33 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13Zm1.78 13.02H3.55V8.99h3.56v11.46Z"/></svg>';
		});
	}

	function lockPage() {
		window.clearTimeout(unlockTimer);
		scrollPosition = window.pageYOffset || document.documentElement.scrollTop || 0;
		document.documentElement.style.setProperty('--modern-menu-scroll-top', '-' + scrollPosition + 'px');
		document.documentElement.classList.add('modern-menu-lock');
		document.body.classList.add('modern-menu-lock');
		setMenuThemeColor();
	}

	function unlockPage() {
		document.documentElement.classList.remove('modern-menu-lock');
		document.body.classList.remove('modern-menu-lock');
		document.documentElement.style.removeProperty('--modern-menu-scroll-top');
		restoreThemeColor();
		window.scrollTo(0, scrollPosition);
	}

	function setClosingState() {
		isTransitioning = true;
		var sideNavigation = document.querySelector('.side-navigation-wrapper');
		if (sideNavigation) sideNavigation.classList.remove('active');
		document.body.classList.remove('aux-navigation-active', 'no-scroll');
		document.body.classList.remove('menu-icon-open');
		document.body.classList.add('menu-icon-closing');
		updateToggleState(false);
		window.clearTimeout(unlockTimer);
		unlockTimer = window.setTimeout(unlockPage, closeDelay);
		window.clearTimeout(stateTimer);
		stateTimer = window.setTimeout(function () {
			document.body.classList.remove('menu-icon-closing');
			var contactControl = document.querySelector('.contact-collaboration');
			if (contactControl) {
				contactControl.classList.add('contact-collaboration--returning');
				window.clearTimeout(contactTimer);
				contactTimer = window.setTimeout(function () {
					contactControl.classList.remove('contact-collaboration--returning');
				}, 300);
			}
			isTransitioning = false;
		}, closeDelay);
	}

	document.addEventListener('click', function (event) {
		var trigger = event.target.closest('a.side-nav-show');

		if (trigger) {
			event.preventDefault();
			event.stopImmediatePropagation();

			if (isTransitioning) {
				return;
			}

			if (document.body.classList.contains('menu-icon-open')) {
				setClosingState();
			} else {
				isTransitioning = true;
				window.clearTimeout(stateTimer);
				window.clearTimeout(contactTimer);
				var contactControl = document.querySelector('.contact-collaboration');
				if (contactControl) contactControl.classList.remove('contact-collaboration--returning');
				storeControlPosition(trigger);
				mountToggle(trigger);
				lockPage();
				document.body.classList.remove('menu-icon-closing');
				document.body.classList.add('menu-icon-open');
				document.body.classList.add('aux-navigation-active', 'no-scroll');
				var sideNavigation = document.querySelector('.side-navigation-wrapper');
				if (sideNavigation) sideNavigation.classList.add('active');
				updateToggleState(true);
				stateTimer = window.setTimeout(function () {
					isTransitioning = false;
				}, closeDelay);
			}
			return;
		}

		if (event.target.closest('.side-nav-hide a')) {
			setClosingState();
		}
	}, true);

	document.addEventListener('keydown', function (event) {
		if (event.key === 'Escape' && !isTransitioning && document.body.classList.contains('menu-icon-open')) {
			setClosingState();
		}
	});

	upgradeProjectFooterLinkedIn();
	updateToggleState(false);
}());
