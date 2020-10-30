const showProjects = () => {

	const projects = document.querySelectorAll('.projects__content-item');
	const showAll = document.querySelector('.show-all');

	const projectsSection = document.querySelector('.projects');
	const projectsContent = projectsSection.querySelector('.projects__content');
	const projectsItem = projectsContent.querySelector('.projects__content-item-img');

	let currentHeight = 0;
	let startedHeight = projectsItem.offsetHeight + 50;
	projectsContent.style.height = startedHeight + 'px';

	const addShowStyles = (elem) => {
		elem.style.opacity = '1';
		elem.style.transform = 'translate(0, 0)';
	}

	const addHideStyles = (elem) => {
		elem.style.opacity = '0';
		elem.style.transform = 'translate(0, 150%)';
	}

	const defineFullHeight = () => {
		if (document.documentElement.offsetWidth >= 1840) {
			currentHeight = startedHeight * 2;
		} else if (document.documentElement.offsetWidth > 1259) {
			currentHeight = startedHeight * 3;
		} else {
			currentHeight = startedHeight * 6;
		}
		projectsContent.style.height = currentHeight + 'px';
	}

	const hideSomeProjects = (projects) => {
		projects.forEach((elem, i) => {
			if (document.documentElement.offsetWidth >= 1840) {
				i >= 3 ? addHideStyles(elem) : addShowStyles(elem);
			} else if (document.documentElement.offsetWidth > 1259) {
				i >= 2 ? addHideStyles(elem) : addShowStyles(elem);
			} else {
				i >= 1 ? addHideStyles(elem) : addShowStyles(elem);
			}
		});
	}

	hideSomeProjects(projects);

	window.addEventListener('resize', () => {
		// in close case
		if (projectsContent.style.height.replace(/\D/g, '') < 1000) {
			hideSomeProjects(projects)
		}
		// in open case 
		else {
			defineFullHeight();
		}
	});

	showAll.addEventListener('click', (e) => {
		e.preventDefault();
		defineFullHeight();
		e.target.remove();
		projects.forEach(elem => addShowStyles(elem));
	})

	// TOUCH

	const subs = document.querySelectorAll('.projects__content-item-sub');

	projectsSection.addEventListener('touchstart', (e) => {
		e.stopPropagation();

		subs.forEach(sub => {
			if (e.target
				&& !e.target.classList.contains('projects__content-item-sub')
				&& sub.classList.contains('active')) {
				sub.style.top = 100 + '%';
				sub.classList.remove('active');
			}
		})
	})

	projects.forEach(elem => {
		elem.addEventListener('touchend', () => {
			const certainSub = elem.querySelector('.projects__content-item-sub');
			certainSub.style.top = 0;
			certainSub.classList.add('active');
		})
	})






}

export default showProjects;