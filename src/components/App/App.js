import { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Header from '../Header/Header';
import Nav from '../Header/Nav/Nav';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
import About from '../About/About';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';
import Contact from '../Contact/Contact';

function App() {
	const [showNav, setShowNav] = useState(false);
	const location = useLocation();

	useEffect(() => {
		document
			.querySelector('body')
			.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
	}, [location]);

	return (
		<div className={styles.wrapper} id='wrapper'>
			<Header showNav={showNav} setShowNav={setShowNav} />
			<AnimatePresence exitBeforeEnter>
				{showNav && <Nav showNav={showNav} />}
			</AnimatePresence>
			<AnimatePresence exitBeforeEnter onExitComplete={() => setShowNav(false)}>
				<Switch location={location} key={location.pathname}>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/pricing'>
						<Pricing />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
