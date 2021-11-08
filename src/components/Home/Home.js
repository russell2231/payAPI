import { Link } from 'react-router-dom';

import ScheduleDemo from '../shared/ScheduleDemo/ScheduleDemo';
import Partners from './Partners/Partners';

import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import heroImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import styles from './Home.module.scss';

const Home = () => {
	return (
		<main className={styles.home}>
			<BgCircle className={styles.bgCircle} />
			<section className={styles.hero}>
				<img className={styles.heroImg} src={heroImg} alt='' />
				<div className={styles.heroContent}>
					<h1 className={styles.heading}>
						Start building with our APIs for absolutely free.
					</h1>
					<ScheduleDemo />
					<p className={styles.tagline}>
						Have any questions? <Link to='/contact'>Contact Us</Link>
					</p>
				</div>
			</section>
			<Partners />
		</main>
	);
};

export default Home;
