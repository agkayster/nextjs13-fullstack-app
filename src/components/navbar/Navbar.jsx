'use client';
import Link from 'next/link';
import React from 'react';
import { useSession, signOut } from 'next-auth/react';

/* import our DarkModeToggle component */
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

/* links to be used in our navbar in an array, so we use it dynamically and do not repeat code */
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
	/* destructure status from useSession hook */
	const { status } = useSession();

	return (
		<div className='h-28 flex justify-between items-center'>
			<Link href='/' className='font-bold text-2xl'>
				ejikechiboka
			</Link>
			<div className='links flex items-center gap-5'>
				{/* set our DarkModeToggle component in the navbar */}
				<DarkModeToggle />
				{links.map(({ id, title, url }) => (
					<Link key={id} href={url} className=''>
						{title}
					</Link>
				))}
				{/* apply the condition below to protect logout button and get signOut from useSession hook */}
				{status === 'authenticated' && (
					<button
						onClick={() => signOut()}
						className='p-1.5 border-none bg-[#53c28b] text-white cursor-pointer rounded'>
						Logout
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
