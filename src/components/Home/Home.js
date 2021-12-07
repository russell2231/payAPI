import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReducedMotion, motion } from 'framer-motion';

import { pageVariants } from '../../utilities/framerVariants';
import ScheduleDemo from '../shared/ScheduleDemo/ScheduleDemo';
import Partners from './Partners/Partners';
import Features from './Features/Features';

import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import heroImg from '../../assets/home/desktop/illustration-phone-mockup.svg';
import styles from './Home.module.scss';
import Callout from '../shared/Callout/Callout';

const Home = () => {
	const shouldReduceMotion = useReducedMotion();
	const variant = (element) => {
		return shouldReduceMotion ? pageVariants.reduce : pageVariants[element];
	};

	useEffect(() => {
		document.title = 'PayAPI';
	}, []);

	return (
		<motion.main
			className={styles.home}
			variants={variant('page')}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
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
			<Features />
			<Callout />
		</motion.main>
	);
};

export default Home;
