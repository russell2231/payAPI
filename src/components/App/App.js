import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';

import styles from './App.module.scss';

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
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
