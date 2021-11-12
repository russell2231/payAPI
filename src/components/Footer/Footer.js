import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Facebook } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as Twitter } from '../../assets/shared/desktop/twitter.svg';
import { ReactComponent as Linkedin } from '../../assets/shared/desktop/linkedin.svg';
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<Link to='/'>
					<Logo className={styles.logo} />
				</Link>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link to='/pricing'>Pricing</Link>
					</li>
					<li className={styles.item}>
						<Link to='/about'>About</Link>
					</li>
					<li className={styles.item}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
				<div className={styles.socials}>
					<a
						className={styles.socialItem}
						href='https://www.facebook.com'
						target='_blank'
						rel='noreferrer'
					>
						<Facebook />
					</a>
					<a
						className={styles.socialItem}
						href='https://www.twitter.com'
						target='_blank'
						rel='noreferrer'
					>
						<Twitter />
					</a>
					<a
						className={styles.socialItem}
						href='https://www.linkedin.com'
						target='_blank'
						rel='noreferrer'
					>
						<Linkedin />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
