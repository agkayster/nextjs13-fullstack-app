import React from 'react';
import Link from 'next/link';

const PortfolioPage = () => {
	return (
		<div className='cont'>
			<h1 className='selectTitle my-[1.25rem] mx-0 text-[20px] font-semibold'>
				Choose a gallery
			</h1>
			<div className='items flex gap-[3.125rem]'>
				{/*Click on the href in the parent component sends the params to
				the [category] subfolder*/}
				<Link
					href='/portfolio/illustrations'
					className="item border-solid border-[#bbb] border-[0.31rem] rounded-[0.31rem] 
					w-80 h-[25rem] relative bg-[url('/illustration.png')] !bg-cover text-slate-500 hover:text-green-500">
					<span className='title absolute right-2.5 bottom-2.5 text-[2.5rem] font-bold'>
						Illustrations
					</span>
				</Link>
				<Link
					href='/portfolio/websites'
					className="item border-solid border-[#bbb] border-[0.31rem] rounded-[0.31rem] w-80 h-[25rem] 
					relative bg-[url('/websites.jpeg')] !bg-cover text-slate-500 hover:text-green-500">
					<span className='title absolute right-2.5 bottom-2.5 text-[2.5rem] font-bold '>
						Websites
					</span>
				</Link>
				<Link
					href='/portfolio/applications'
					className="item border-solid border-[#bbb] border-[0.31rem] rounded-[0.31rem] w-80 h-[25rem] 
					relative bg-[url('/apps.jpeg')] !bg-cover text-slate-500 hover:text-green-500">
					<span className='title absolute right-2.5 bottom-2.5 text-[2.5rem] font-bold'>
						Applications
					</span>
				</Link>
			</div>
		</div>
	);
};

export default PortfolioPage;
