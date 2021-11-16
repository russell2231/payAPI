import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
import About from '../About/About';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';
import Contact from '../Contact/Contact';

function App() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Switch>
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
			<Footer />
		</div>
	);
}

export default App;
