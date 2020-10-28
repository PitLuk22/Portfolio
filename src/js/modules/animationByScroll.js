

const animationByScroll = (Vivus, moveBlock, offset) => {

	// VIVUS //
	let location = new Vivus('address-svg', { type: 'delayed', duration: 200 });

	let phone = new Vivus('phone-svg', { type: 'sync', duration: 200 });

	let mail = new Vivus('email-svg', { type: 'delayed', duration: 300 });

	const svgs = [location, phone, mail]
	const svgsEl = svgs.map(elem => elem.parentEl);
	// VIVUS //

	const marker = document.querySelector('#marker');
	const sections = document.querySelectorAll('section');
	const links = document.querySelectorAll(".nav-links li a");
	let animItems = document.querySelectorAll('.anim-items');


	window.addEventListener('scroll', () => startSvgOnScroll(svgsEl));
	window.addEventListener('scroll', () => startSvgOnScroll(sections));
	window.addEventListener('scroll', () => startSvgOnScroll(animItems));


	function startSvgOnScroll(collection = []) {
		collection.forEach(item => {
			const itemHeight = item.offsetHeight; // высота каждого отдельного элемента
			const itemOffset = offset(item).top; // высота элемента от начала страницы 
			const animStartCoeff = 4; // при видимости картинки на 1/4 запускается анимация 

			let itemPointAnim = window.innerHeight - itemHeight / animStartCoeff;

			// если высота элемента больше выстоты окна браузера, то ->
			if (itemHeight > window.innerHeight) {
				itemPointAnim = window.innerHeight - window.innerHeight / animStartCoeff;
			}

			if (item.nodeName === "OBJECT") {

				if ((pageYOffset > itemOffset - itemPointAnim) && pageYOffset < (itemOffset + itemHeight)) {
					getCurrentElem(item).play();
				} else {
					getCurrentElem(item).stop().reset();
				}

			} else if (item.nodeName === 'SECTION') {

				if (Math.round(window.pageYOffset) < Math.round(item.offsetHeight + offset(item).top) - document.documentElement.clientHeight / 2 // нижняя граница
					&& Math.round(window.pageYOffset) > Math.round(itemOffset) - 200) { // верхняя граница
					moveBlock(marker, links, item); // item - секция на которой мы находимся
				}

			} else {

				if ((pageYOffset > itemOffset - itemPointAnim) && pageYOffset < (itemOffset + itemHeight)) {
					item.classList.add('active');
				} else if (!item.classList.contains('non-anim')) {
					item.classList.remove('active');
				}

			}
		})
	}

	function getCurrentElem(item) {
		return svgs.filter(elem => elem.parentEl === item)[0];
	}

	setTimeout(() => {
		startSvgOnScroll(animItems);
	}, 2000);

}


export default animationByScroll;
