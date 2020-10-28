const validateInputs = (name, email, textarea) => {

	const nameField = document.querySelector(name);
	const emailField = document.querySelector(email);
	const textareaField = document.querySelector(textarea);
	let errors = 0;

	const validateName = (name) => name.value !== '';

	const validateEmail = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email.value);
	}

	const validateTextArea = (textarea) => textarea.value !== '';

	const warning = (elem) => {
		errors++;
		elem.style.boxShadow = 'rgba(255, 0, 0, 0.41) 0px 0px 10px 0px';
	}
	const success = (elem) => elem.style.boxShadow = 'none';

	!validateName(nameField) ? warning(nameField) : success(nameField);
	!validateEmail(emailField) ? warning(emailField) : success(emailField);
	!validateTextArea(textareaField) ? warning(textareaField) : success(textareaField);

	return errors === 0;

}

export default validateInputs;