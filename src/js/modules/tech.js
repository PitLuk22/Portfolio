const tech = () => {
	const technologies = document.querySelectorAll('.tech__content-item');
	technologies.forEach(item => {
		item.addEventListener('touchstart', () => {
			item.style.backgroundColor = '#2196f3';
		})
		item.addEventListener('touchend', () => {
			item.style.backgroundColor = '#222';
		})
	})
}

export default tech;