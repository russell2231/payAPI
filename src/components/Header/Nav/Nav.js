import { Link, useHistory } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

import { navVariants } from '../../../utilities/framerVariants';
import Button from '../../shared/Button/Button';

import styles from './Nav.module.scss';

const Nav = ({ showNav }) => {
	const shouldReduceMotion = useReducedMotion();
	const variant = (element) => {
		return shouldReduceMotion ? navVariants.reduce : navVariants[element];
	};
	const history = useHistory();

	return (
		<motion.div
			className={styles.listContainer}
			key='nav'
			variants={variant('nav')}
			initial='hidden'
			animate='visible'
			exit='exit'
		>
			<ul className={styles.list}>
				<li>
					<Link className={styles.itemLink} to='/pricing'>
						Pricing
					</Link>
				</li>
				<li>
					<Link className={styles.itemLink} to='/about'>
						About
					</Link>
				</li>
				<li>
					<Link className={styles.itemLink} to='/contact'>
						Contact
					</Link>
				</li>
			</ul>

			<Button primary onClick={() => history.push('/contact')}>
				Schedule a Demo
			</Button>
		</motion.div>
	);
};

export default Nav;
