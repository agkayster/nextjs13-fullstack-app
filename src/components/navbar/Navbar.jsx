'use client';
import Link from 'next/link';
import React from 'react';
import { signOut } from 'next-auth/react';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const links = [
	{
		id: 1,
		title: 'Home',
		url: '/',
	},
	{
		id: 2,
		title: 'Portfolio',
		url: '/portfolio',
	},
	{
		id: 3,
		title: 'Blog',
		url: '/blog',
	},
	{
		id: 4,
		title: 'About',
		url: '/about',
	},
	{
		id: 5,
		title: 'Contact',
		url: '/contact',
	},
	{
		id: 6,
		title: 'Dashboard',
		url: '/dashboard',
	},
];

const Navbar = () => {
	return (
		<div className='h-28 flex justify-between items-center'>
			<Link href='/' className='font-bold text-2xl'>
				ejikechiboka
			</Link>
			<div className='links flex items-center gap-5'>
				<DarkModeToggle />
				{links.map(({ id, title, url }) => (
					<Link key={id} href={url} className=''>
						{title}
					</Link>
				))}
				<button
					onClick={() => signOut()}
					className='p-1.5 border-none bg-[#53c28b] text-white cursor-pointer rounded'>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
