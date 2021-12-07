import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../App/context';
import formValidation from '../../../utilities/formValidation';

import Button from '../../shared/Button/Button';
import styles from './Form.module.scss';

const INITIAL_FORM = {
	name: '',
	email: '',
	company: '',
	title: '',
	message: '',
	updates: false,
	formErrors: {},
};

const Form = () => {
	const { demoEmail, handleDemoSchedule } = useGlobalContext();
	const [helpRequest, setHelpRequest] = useState(INITIAL_FORM);
	const [optIn, setOptIn] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const errors = helpRequest.formErrors;

	useEffect(() => {
		if (demoEmail) {
			setHelpRequest((prevState) => {
				return {
					...prevState,
					email: demoEmail,
					message:
						'I would like to schedule a demo showing for (Enter date and time here)',
				};
			});
		}
	}, [demoEmail]);

	const handleClick = () => {
		setOptIn(!optIn);
	};

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setHelpRequest({ ...helpRequest, [name]: value });
	};

	const setErrors = (err) => {
		setHelpRequest({ ...helpRequest, formErrors: { ...err } });
	};

	const restoreToInitial = () => {
		setHelpRequest(INITIAL_FORM);
		setOptIn(false);
	};

	const toggleAlert = () => {
		setShowAlert(true);

		setTimeout(() => {
			setShowAlert(false);
		}, 4000);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formValidation(helpRequest, setErrors)) {
			helpRequest.updates = optIn;
			restoreToInitial();
			handleDemoSchedule('');
			toggleAlert();
		}
	};

	return (
		<form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
			{showAlert && (
				<div className={styles.alert}>
					<p>Request has been sent. Thank you!</p>
				</div>
			)}
			<div className={`${styles.formGroup} ${errors.name ? styles.error : ''}`}>
				<input
					type='text'
					name='name'
					id=''
					placeholder='Name'
					value={helpRequest.name}
					onChange={(e) => handleChange(e)}
				/>
				{errors.name && <span>This field can't be empty</span>}
			</div>
			<div
				className={`${styles.formGroup} ${errors.email ? styles.error : ''}`}
			>
				<input
					type='email'
					name='email'
					id=''
					placeholder='Email Address'
					value={helpRequest.email}
					onChange={(e) => handleChange(e)}
				/>
				{errors.email && <span>Please use a valid email</span>}
			</div>
			<div
				className={`${styles.formGroup} ${errors.company ? styles.error : ''}`}
			>
				<input
					type='text'
					name='company'
					id=''
					placeholder='Company Name'
					value={helpRequest.company}
					onChange={(e) => handleChange(e)}
				/>
				{errors.company && <span>This field can't be empty</span>}
			</div>
			<div
				className={`${styles.formGroup} ${errors.title ? styles.error : ''}`}
			>
				<input
					type='text'
					name='title'
					id=''
					placeholder='Title'
					value={helpRequest.title}
					onChange={(e) => handleChange(e)}
				/>
				{errors.title && <span>This field can't be empty</span>}
			</div>
			<div
				className={`${styles.formGroup} ${errors.message ? styles.error : ''}`}
			>
				<textarea
					name='message'
					id=''
					placeholder='Message'
					value={helpRequest.message}
					onChange={(e) => handleChange(e)}
				></textarea>
				{errors.message && <span>This field can't be empty</span>}
			</div>
			<button
				className={`${styles.upToDate} ${optIn ? styles.active : ''}`}
				type='button'
				onClick={handleClick}
			>
				Stay up-to-date with company announcements and updates to our API
			</button>

			<Button type='submit' dark>
				Submit
			</Button>
		</form>
	);
};

export default Form;
