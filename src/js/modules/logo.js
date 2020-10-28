const mainLogo = (logoSelector, logoText) => {

	const logo = document.querySelector(logoSelector);
	let index = 0;

	const typeLogo = (logoInterval) => {
		logo.textContent = logoText.slice(0, index) + '_';
		index++;
		if (index > logoText.length) {
			index = 0;
			logo.textContent = logoText.slice(0, logoText.length);
			clearInterval(logoInterval)
			setTimeout(() => updateInterval(logoInterval), 3000)
		}
	}

	function updateInterval() {
		let logoInterval = setInterval(() => typeLogo(logoInterval), 100);
	}

	updateInterval();
}

export default mainLogo;