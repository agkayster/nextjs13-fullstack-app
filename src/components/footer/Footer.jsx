import Image from 'next/image';
import React from 'react';
import { images } from './images';

const Footer = () => {
	return (
		<div className='h-14 flex items-center justify-between'>
			<div className='text-sm'>©️ejikechiboka. All rights reserved</div>
			<div className='flex flex-row gap-2.5'>
				{images.map(({ id, title }) => (
					<Image
						key={id}
						src={title}
						width={15}
						height={15}
						alt='ejike dev'
						className='opacity-60 cursor-pointer'
					/>
				))}
			</div>
		</div>
	);
};

export default Footer;
