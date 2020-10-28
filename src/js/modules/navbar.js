const moveBlock = (marker, links, elem) => {
	if (elem.nodeName === 'SECTION') {
		links.forEach(link => {
			if (link.textContent.toLowerCase() === elem.id) {
				elem = link; // при скроле мы получаем элемент, который потом заменяем на соответсвтующую ссылку 
			}
		});
	}
	// Phone menu
	if (document.documentElement.offsetWidth <= 992) {
		marker.style.display = 'none';
		links.forEach(link => {
			link.classList.remove('active-link');
		})
		elem.classList.add('active-link');

		// marker.style.width = elem.offsetWidth + "px";
		// marker.style.top = elem.offsetTop + "px";
		// marker.style.left = '';
		// marker.style.height = '40px';

	}

	// Desktop menu
	else {
		marker.style.display = 'block';
		marker.style.width = elem.offsetWidth + "px";
		marker.style.left = elem.offsetLeft + "px";
		marker.style.height = '5px';
		marker.style.top = '100%';
	}
}

const navbar = (burgerSelector, navTag, markerId, linksSelector, burgerActiveClass, navActiveClass) => {

	const burger = document.querySelector(burgerSelector);
	const nav = document.querySelector(navTag);
	const marker = document.querySelector(markerId);
	const links = document.querySelectorAll(linksSelector);


	burger.addEventListener('click', () => {
		toggleNavbarClass(burger, nav);
		// moveBlock(marker, links, currentSection);
	})

	function toggleNavbarClass(burger, nav) {
		burger.classList.toggle(navActiveClass);
		nav.classList.toggle(burgerActiveClass);
		if (document.documentElement.offsetWidth <= 992) {
			document.body.classList.toggle('overflow-hidden')
		}
	}

	links.forEach((elem) => {
		elem.addEventListener("mousemove", (e) => moveBlock(marker, links, e.target));
		elem.addEventListener('click', () => toggleNavbarClass(burger, nav));
	});

	moveBlock(marker, links, links[0]);

	window.addEventListener('resize', () => moveBlock(marker, links, links[0]));
}

export default navbar;
export {
	moveBlock
};