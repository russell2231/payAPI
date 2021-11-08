import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';

function App() {
	return (
		<>
			<Header />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</>
	);
}

export default App;
