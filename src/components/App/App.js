import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.app}>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
