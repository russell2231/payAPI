import React, { useState, useEffect, useContext, useCallback } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [demoEmail, setDemoEmail] = useState('');

	const handleResize = useCallback(() => {
		setWindowWidth(window.innerWidth);
	}, []);

	const handleDemoSchedule = (email) => {
		setDemoEmail(email);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<AppContext.Provider value={{ windowWidth, demoEmail, handleDemoSchedule }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
