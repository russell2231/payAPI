import { useEffect } from 'react';
import { useReducedMotion, motion } from 'framer-motion';

import { pageVariants } from '../../utilities/framerVariants';
import { ReactComponent as BgCircle } from '../../assets/shared/desktop/bg-pattern-circle.svg';
import Callout from '../shared/Callout/Callout';
import Plans from './Plans/Plans';
import styles from './Pricing.module.scss';

const Pricing = () => {
	const shouldReduceMotion = useReducedMotion();
	const variant = (element) => {
		return shouldReduceMotion ? pageVariants.reduce : pageVariants[element];
	};

	useEffect(() => {
		document.title = 'PayAPI | Pricing';
	}, []);

	return (
		<motion.main
			className={styles.pricing}
			variants={variant('page')}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<BgCircle className={styles.bgCircle} />
			<h1>Pricing</h1>
			<Plans />
			<Callout />
		</motion.main>
	);
};

export default Pricing;
