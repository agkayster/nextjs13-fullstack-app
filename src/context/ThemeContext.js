'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext();

/* wrap our application with Themeprovider, hence the use of {children} */
export const ThemeProvider = ({ children }) => {
	const [mode, setMode] = useState('dark');

	const handleToggle = () => {
		/* use prev, for toggling, to take note of last/previous position/state */
		setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
	};

	/* this would allow any page/component in our app to use the handleToggle function and mode 
	state which we place in an object */
	return (
		<ThemeContext.Provider value={{ handleToggle, mode }}>
			<div className={`theme ${mode}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
