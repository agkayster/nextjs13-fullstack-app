'use client'; /* use client because we are doing client side fetching with useEffect, SWR, react query */

import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const DashboardPage = () => {
	const [postDetail, setPostDetail] = useState({
		title: '',
		description: '',
		image: '',
		content: '',
	});
	const session = useSession();

	const router = useRouter();

	const fetcher = (...args) => fetch(...args).then((res) => res.json());

	/* fetching with nextjs useSWR hook better than useEffect fetch. We fetch based on the
	 username of the user who is logged in */
	const { data, error, isLoading } = useSWR(
		`/api/posts?username=${session?.data?.user?.name}`,
		fetcher
	);

	const handlePostFormChange = (e, field) => {
		const { value } = e.target;

		setPostDetail({ ...postDetail, [field]: value });
	};

	/* submitting new Posts */
	const handlePostSubmit = async (e) => {
		e.preventDefault();

		/* we add the name of the user to the details of the post the user created */
		try {
			await fetch('/api/posts/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					...postDetail,
					username: session?.data?.user?.name,
				}),
			});
		} catch (error) {
			console.log('get error =>', error);
		}
	};
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

	/* if user is not logged in and authenticated, redirect the user to "/dashboard/login" page */
	if (session.status === 'unauthenticated') {
		router?.push('/dashboard/login');
	}

	// console.log('get name data =>', data);
	// console.log('get post detail =>', postDetail);

	if (error) return <h1>Failed to Load</h1>;
	if (isLoading) return <h1>Loading...</h1>;

	if (session.status === 'authenticated') {
		return (
			<div className='cont'>
				<div className='posts'>
					{data.map(
						({
							_id: id,
							title,
							description,
							image,
							username,
							content,
						}) => (
							<div key={id} className='post'>
								<div className='imgContainer'>
									<Image
										alt='post image'
										src={image}
										width={100}
										height={100}
									/>
								</div>
								<h2 className='postTitle'>{title}</h2>
								<span className='delete'>X</span>
							</div>
						)
					)}
				</div>
				<form className='new' onSubmit={handlePostSubmit}>
					<h1>Add New Post</h1>
					<input
						type='text'
						placeholder='Title'
						value={postDetail.title || ''}
						onChange={(e) => handlePostFormChange(e, 'title')}
						className='inputTitle'
					/>
					<input
						type='text'
						placeholder='Description'
						value={postDetail.description || ''}
						onChange={(e) => handlePostFormChange(e, 'description')}
						className='inputDesc'
					/>
					<input
						type='text'
						placeholder='ImageURL'
						value={postDetail.image || ''}
						onChange={(e) => handlePostFormChange(e, 'image')}
						className='inputImg'
					/>
					<textarea
						placeholder='Content'
						cols='30'
						rows='10'
						value={postDetail.content || ''}
						onChange={(e) => handlePostFormChange(e, 'content')}
						className='textArea'></textarea>
					<button type='submit' className='postBtn'>
						Submit
					</button>
				</form>
			</div>
		);
	}
};

export default DashboardPage;
