import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
