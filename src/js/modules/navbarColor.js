const navbarColor = () => {
	const header = document.querySelector('header');

	window.addEventListener('scroll', () => {
		window.scrollY > 0 ? header.classList.add('sticky') : header.classList.remove('sticky');
	})
}
export default navbarColor;