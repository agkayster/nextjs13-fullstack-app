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
	const { data, mutate, error, isLoading } = useSWR(
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

			/* mutate refreshes our page automatically once we submit a new post,so we don't have to do it manually */
			mutate();

			/* this empties the input boxes once we have submitted a post,
			by setting postDetail state to empty string */
			setPostDetail({
				title: '',
				description: '',
				image: '',
				content: '',
			});
		} catch (error) {
			console.log('get error =>', error);
		}
	};

	/* Do this, if you have a DELETE API endpoint */
	const handlePostDelete = async (postId) => {
		try {
			await fetch(`api/posts/${postId}`, {
				method: 'DELETE',
				headers: { 'Content-Type': 'application/json' },
			});

			/* once we delete, mutate helps us to refresh automatically */
			mutate();
		} catch (error) {
			console.log('get delete error =>', error);
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

	// console.log('get name data =>', postData);
	// console.log('get post detail =>', postDetail);

	if (error) return <h1>Failed to Load</h1>;
	if (isLoading) return <h1>Loading...</h1>;

	if (session.status === 'authenticated') {
		return (
			<div className='cont flex gap-28'>
				<div className='posts flex-1'>
					{data?.map(
						({
							_id: id,
							title,
							description,
							image,
							username,
							content,
						}) => (
							<div
								key={id}
								className='post flex items-center justify-between my-12'>
								<div className='imgContainer w-52 h-24 relative'>
									<Image
										alt='post image'
										src={image}
										width={100}
										height={100}
										className='img object-cover'
									/>
									<p>{username}</p>
								</div>
								<h2 className='postTitle'>{title}</h2>
								<span
									onClick={() => handlePostDelete(id)}
									className='delete cursor-pointer text-red-500'>
									X
								</span>
							</div>
						)
					)}
				</div>
				<form
					className='newPost flex-1 flex flex-col gap-5'
					onSubmit={handlePostSubmit}>
					<h1 className='text-xl font-bold text-center'>
						Add New Post
					</h1>
					<input
						type='text'
						placeholder='Title'
						value={postDetail.title || ''}
						onChange={(e) => handlePostFormChange(e, 'title')}
						className='inputTitle p-2.5 bg-transparent border-solid border-2 
						border-[#bbb] rounded text-[#bbb] text-xl font-bold'
					/>
					<input
						type='text'
						placeholder='Description'
						value={postDetail.description || ''}
						onChange={(e) => handlePostFormChange(e, 'description')}
						className='inputDesc p-2.5 bg-transparent border-solid border-2 
						border-[#bbb] rounded text-[#bbb] text-xl font-bold'
					/>
					<input
						type='text'
						placeholder='ImageURL'
						value={postDetail.image || ''}
						onChange={(e) => handlePostFormChange(e, 'image')}
						className='inputImg p-2.5 bg-transparent border-solid border-2 
						border-[#bbb] rounded text-[#bbb] text-xl font-bold'
					/>
					<textarea
						placeholder='Content'
						cols='30'
						rows='10'
						value={postDetail.content || ''}
						onChange={(e) => handlePostFormChange(e, 'content')}
						className='textArea p-2.5 bg-transparent border-solid border-2 
						border-[#bbb] rounded text-[#bbb] text-xl font-bold'></textarea>
					<button
						type='submit'
						className='postBtn p-5 cursor-pointer bg-[#53c28b] border-none rounded-md text-[#eee] font-bold'>
						Submit
					</button>
				</form>
			</div>
		);
	}
};

export default DashboardPage;
