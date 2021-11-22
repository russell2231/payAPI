import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../../App/context';

import Button from '../Button/Button';
import styles from './ScheduleDemo.module.scss';

const ScheduleDemo = () => {
	const { handleDemoSchedule } = useGlobalContext();
	let navigate = useHistory();

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.target).entries());
		navigate.push('/contact');
		handleDemoSchedule(data.email);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type='email'
				name='email'
				placeholder='Enter email address'
				required
			/>
			<Button type='submit' primary demo>
				Schedule a Demo
			</Button>
		</form>
	);
};

export default ScheduleDemo;
