import ScheduleDemo from '../ScheduleDemo/ScheduleDemo';
import styles from './Callout.module.scss';

const Callout = () => {
	return (
		<section className={styles.callout}>
			<h2>Ready to start?</h2>
			<ScheduleDemo />
		</section>
	);
};

export default Callout;
