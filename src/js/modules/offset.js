const offset = (el) => {
	// function offset(el) {
	const rect = el.getBoundingClientRect(); // расположение элемента относительно viewport (возвращает объект)
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // проскроленная высота 
	return { top: rect.top + scrollTop };
}
export default offset;