import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useGlobalContext } from '../App/context';

import Button from '../shared/Button/Button';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as Menu } from '../../assets/shared/mobile/menu.svg';
import { ReactComponent as Close } from '../../assets/shared/mobile/close.svg';
import styles from './Header.module.scss';

const Header = ({ showNav, setShowNav }) => {
	const { windowWidth } = useGlobalContext();
	let history = useHistory();
	const isNavOpen = showNav;
	const isMobile = windowWidth < 768;

	const toggleNav = () => {
		setShowNav(!showNav);
	};

	useEffect(() => {
		if (windowWidth >= 768) {
			setShowNav(false);
		}
	}, [windowWidth]);

	useEffect(() => {
		if (isNavOpen) {
			document.body.style.overflowY = 'hidden';
		} else {
			document.body.style.overflowY = 'scroll';
		}
	}, [isNavOpen]);

	return (
		<header className={styles.header}>
			<nav className={`${styles.nav} ${isNavOpen ? styles.open : null}`}>
				<Link to='/'>
					<Logo />
				</Link>
				{isMobile && (
					<button className={styles.menu}>
						{!isNavOpen ? (
							<Menu onClick={toggleNav} />
						) : (
							<Close onClick={toggleNav} />
						)}
					</button>
				)}
				<div className={styles.listContainer}>
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
				</div>
			</nav>
		</header>
	);
};

export default Header;
