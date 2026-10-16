/* Keep legacy Horizon reveals presentational rather than load-like. This runs
 * before Timber initializes the plugin, so the first reveal uses the shorter
 * values without forcing a second layout or animation pass. */
document.querySelectorAll('.horizon[data-animate-in]').forEach(function(element) {
	let animation = element.getAttribute('data-animate-in') || '';
	animation = animation.replace(/duration\s*:\s*[\d.]+(?:ms)?/gi, 'duration:420ms');
	animation = animation.replace(/delay\s*:\s*([\d.]+)(?:ms)?/gi, function(match, value) {
		return 'delay:' + Math.min(Number(value) || 0, 120) + 'ms';
	});

	if (/preset:slideInUpShort/i.test(animation)) animation += 'transY:18px;';
	if (/preset:slideInDownShort/i.test(animation)) animation += 'transY:-18px;';
	if (/preset:slideInLeftShort/i.test(animation)) animation += 'transX:-18px;';
	if (/preset:slideInRightShort/i.test(animation)) animation += 'transX:18px;';

	element.setAttribute('data-animate-in', animation);
});

document.addEventListener('DOMContentLoaded', function() {
	const scrollTopButton = document.querySelector('.tlc-scroll-top');

	if (!scrollTopButton) {
		return;
	}

	const updateScrollTopButton = function() {
		scrollTopButton.classList.toggle('is-visible', window.scrollY > 180);
	};

	scrollTopButton.addEventListener('click', function() {
		window.scrollTo({
			top: 0,
			behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
		});
	});

	window.addEventListener('scroll', updateScrollTopButton, { passive: true });
	updateScrollTopButton();
});
