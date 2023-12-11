import React from 'react';

const DarkModeToggle = () => {
	// const mode = 'dark';
	return (
		<div className='cont w-11 h-6 border-solid border-[.094rem] border-[#53c28b] rounded-[1.875rem] flex justify-between items-center p-0.5 relative cursor-pointer'>
			<div className='icon text-xs'>🌙</div>
			<div className='icon text-xs'>☀️</div>
			<div
				className='ball w-4 h-4 bg-[#53c28b] rounded-[50%] absolute'
				/* style controls the movement of the green toggle ball */
				style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
			/>
		</div>
	);
};

export default DarkModeToggle;
