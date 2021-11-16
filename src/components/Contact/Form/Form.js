import { useState } from 'react';

import Button from '../../shared/Button/Button';
import styles from './Form.module.scss';

const Form = () => {
	const [optIn, setOptIn] = useState(false);

	const handleClick = () => {
		setOptIn(!optIn);
	};

	return (
		<form className={styles.form}>
			<input type='text' name='name' id='' placeholder='Name' />
			<input type='email' name='email' id='' placeholder='Email Address' />
			<input type='text' name='company' id='' placeholder='Company Name' />
			<input type='text' name='title' id='' placeholder='Title' />
			<textarea name='message' id='' placeholder='Message'></textarea>
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
