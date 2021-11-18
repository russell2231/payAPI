const formValidation = (objectToValidate, handleSetErrors) => {
	let errors = {};

	for (const propName in objectToValidate) {
		const propValue = objectToValidate[propName];

		if (propName === 'email') {
			if (!emailValidation(propValue)) {
				errors = {
					...errors,
					[propName]: true,
				};
			}
			continue;
		}

		if (propValue === '') {
			errors = { ...errors, [propName]: true };
		}
	}

	if (Object.keys(errors).length === 0) {
		return true;
	} else {
		handleSetErrors(errors);
		return false;
	}
};

const emailValidation = (email) => {
	const regex =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
};

export default formValidation;
