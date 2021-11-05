import Button from '../Button/Button';
import styles from './ScheduleDemo.module.scss';

const ScheduleDemo = () => {
	return (
		<form className={styles.form}>
			<input
				className={styles.input}
				type='email'
				name='email'
				placeholder='Enter email address'
			/>
			<Button type='submit' primary demo>
				Schedule a Demo
			</Button>
		</form>
	);
};

export default ScheduleDemo;
