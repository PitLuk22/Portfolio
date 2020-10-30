import postData from '../services/requests';
import validateInputs from './validateInputs';

const forms = () => {

	const form = document.querySelector('form'),
		inputs = document.querySelectorAll('.contacts__form-input'),
		btn = document.querySelector('.contacts__form-submit'),
		statusOverlay = document.querySelector('.status-message'),
		statusBlock = statusOverlay.querySelector('.status-message__popup'),
		statusText = statusBlock.querySelector('div'),
		statusImg = statusBlock.querySelector('img');


	const message = {
		loading: 'Loading...',
		thanks: 'Thanks, I will contact you as soon as possible!',
		thanksSuccess: 'img/success.svg',
		failure: 'Something went wrong :( <br> Please, try again!',
		failureError: 'img/envelope-error.svg',
		spinner: 'img/spinner.gif',
		ok: 'img/ok.svg',
		fail: 'img/error.svg'
	};


	form.addEventListener('submit', (e) => {
		e.preventDefault();

		// Validation 
		if (validateInputs('#fullname', '#email', '#message')) {

			btn.textContent = '';

			// Create spinner inside statusMessage block
			const btnImg = document.createElement('img');
			btnImg.setAttribute('src', message.spinner);
			btn.appendChild(btnImg);

			const formData = new FormData(form);

			postData('php/server.php', formData)
				.then(res => {
					console.log(res);
					addStylesToPopup(btnImg, message.ok, 'active-status-message-success', message.thanks, message.thanksSuccess);
				})
				.catch(() => {
					addStylesToPopup(btnImg, message.fail, 'active-status-message-error', message.failure, message.failureError);
				})
				.finally(() => {
					setTimeout(() => {
						statusBlock.classList.add('active-status-message-end');
						statusBlock.classList.remove('active-status-message-success');
						statusBlock.classList.remove('active-status-message-error');
						setTimeout(() => {
							statusOverlay.style.visibility = 'hidden';
							statusBlock.classList.remove('active-status-message-end');
						}, 1000);
						btn.textContent = 'SEND';
					}, 3000);

					// Clear inputs
					inputs.forEach(input => input.value = '');
					form.reset();
				})
		}

	})

	const addStylesToPopup = (btnImg, btnImgSrc, popupClass, popupText, popupImg) => {
		//img
		btnImg.setAttribute('src', btnImgSrc);
		//overlay
		statusOverlay.style.visibility = 'visible';
		//popup
		statusBlock.classList.add(popupClass);
		//message
		statusText.innerHTML = popupText;
		statusImg.setAttribute('src', popupImg);
	}


}

export default forms;