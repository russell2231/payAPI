import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import { AppProvider } from './components/App/context';
import './index.scss';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<Router>
				<App />
			</Router>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
