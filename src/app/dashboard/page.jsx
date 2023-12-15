'use client'; /* use client because we are doing client side fetching with useEffect, SWR, react query */

import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { ThemeContext } from '@/context/ThemeContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
	const session = useSession();

	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());
	const { mode } = useContext(ThemeContext);
	/* fetching with nextjs useSWR hook better than useEffect fetch */
	const { data, error, isLoading } = useSWR(
		'https://jsonplaceholder.typicode.com/posts',
		fetcher
	);
	// const [data, setData] = useState([]);
	// const [errors, setErrors] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);

	// useEffect(() => {
	// 	async function getData() {
	// 		setIsLoading(true);
	// 		const res = await fetch(
	// 			'https://jsonplaceholder.typicode.com/posts',
	// 			{
	// 				next: { revalidate: 10 }, // => revalidates our data every 10 secs
	// 			}
	// 		);

	// 		if (!res.ok) {
	// 			// This will activate the closest `error.js` Error Boundary
	// 			setErrors(true);
	// 			setIsLoading(false);
	// 		}
	// 		/* always assign "await res.json()" to data */
	// 		const data = await res.json();

	// 		/* then set it to state */
	// 		setData(data);
	// 		setIsLoading(false);
	// 	}
	// 	getData();
	// }, []);

	if (session.status === 'loading') {
		return <p>Loading...</p>;
	}

	if (session.status === 'unauthenticated') {
		router?.push('/dashboard/login');
	}

	if (error) return <h1>Failed to Load</h1>;
	if (isLoading) return <h1>Loading...</h1>;

	if (session.status === 'authenticated') {
		return (
			<>
				<ul>
					{data.map(({ id, userId, title, body }) => (
						<li
							key={id}
							className={`${
								mode === 'dark' ? 'text-white' : 'text-black'
							}`}>
							{title}
						</li>
					))}
				</ul>
			</>
		);
	}
};

export default DashboardPage;
