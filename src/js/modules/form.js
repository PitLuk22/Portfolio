import postData from '../services/requests';
import validateInputs from './validateInputs';

const forms = () => {

	const form = document.querySelector('form'),
		inputs = document.querySelectorAll('.contacts__form-input'),
		btn = document.querySelector('.contacts__form-submit'),
		statusBlock = document.querySelector('.status-message'),
		statusText = statusBlock.querySelector('span');

	const message = {
		loading: 'Loading...',
		thanks: 'Thanks, I will contact you as soon as possible!',
		failure: 'Something went wrong :( <br> Please, try again!',
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
			const statusImg = document.createElement('img');
			statusImg.setAttribute('src', message.spinner);
			btn.appendChild(statusImg);

			const formData = new FormData(form);

			postData('server.php', formData)
				.then(res => {
					console.log(res);
					//btn
					statusImg.setAttribute('src', message.ok);
					// Add text into statusBlock
					statusBlock.classList.add('active-status-message');
					statusText.textContent = message.thanks;
				})
				.catch(() => {
					//btn
					statusImg.setAttribute('src', message.fail);
					// Add text into statusBlock
					statusBlock.classList.add('active-status-message');
					statusText.innerHTML = message.failure;
				})
				.finally(() => {
					setTimeout(() => {
						statusBlock.classList.add('active-status-message-end');
						statusBlock.classList.remove('active-status-message');
						setTimeout(() => {
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



}

export default forms;