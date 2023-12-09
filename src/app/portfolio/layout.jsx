import React from 'react';

const Layout = ({ children }) => {
	return (
		<div>
			<h1 className='mainTitle text-[6.25rem]'>Our Works</h1>
			{children}
		</div>
	);
};

export default Layout;
