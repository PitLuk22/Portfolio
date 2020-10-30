const scrolling = (triggerSelector) => {
	const upElem = document.querySelector(triggerSelector);

	let start = false;
	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop > 1650) {
			start = true;
			upElem.style.opacity = '1';
		} else if (document.documentElement.scrollTop < 1650 && start) {
			upElem.style.opacity = '0';
		}

	});

	// Scrolling with Request Animated Frame

	// [href^="#"] - means that we want to search all elements which start with '#' 
	const links = document.querySelectorAll('[href^="#');
	let speed = 0.5;

	links.forEach(link => {
		link.addEventListener('click', function (event) {
			if (this.hash !== '') {
				// Number of flipped pixels  (for cross-browser)
				let widthTop = Math.round(document.body.scrollTop || document.documentElement.scrollTop);
				// Get hash like this or this.href.match(/#.+/g);
				let hash = this.hash;
				// Get element to scroll and its pixels to border top 
				let toBlock = document.querySelector(hash).getBoundingClientRect().top;
				let start = null;

				// start animation
				const step = (time) => {

					// Check our first cycle
					if (start === null) {
						start = time;
					}
					// Correction speed on long distance
					if (toBlock > 6000) {
						speed = 0.08;
					} else if (toBlock > 3000 && toBlock < 6000) {
						speed = 0.2;
					}

					let progress = time - start;
					// эта переменная отвечает за количество пикселей на которое нам надо пролистать в течение этой анимации
					let r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

					document.documentElement.scrollTo(0, r);

					if (r !== widthTop + toBlock) {
						requestAnimationFrame(step);
					} else {
						location.hash = hash;
					}
				};

				requestAnimationFrame(step);
			}
		});
	});
}
export default scrolling;