import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import blogAvatar from '../../../../public/blog_avatar.jpeg';
import mountainImg from '../../../../public/mountain_blog.jpeg';

/* we are fetching Data. always use async/await */
async function getData(id) {
	const res = await fetch(
		// id here is coming from params.id passed below
		`http://localhost:3000/api/posts/${id}`,
		{
			cache: 'no-store',
		}
	);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		return notFound();
	}
	return res.json();
}

// or Dynamic metadata
export async function generateMetadata({ params }) {
	const { id } = params;

	const post = await getData(id);
	return {
		title: post.title,
		description: post.description,
	};
}

/* always use async/await */
const BlogPost = async ({ params }) => {
	const { id } = params;

	/* id here is passed into the getData function above and into the API URL, this must match [id] in the subfolder 
	category here is passed into the getData function above and into the API URL, this must match [category] in the subfolder 
	*/
	const data = await getData(id);

	return (
		<div className='cont'>
			<div className='top flex'>
				<div className='info flex-1'>
					<h1 className='title text-[2.5rem] '>{data.title}</h1>
					<p className='desc text-lg font-light'>
						{data.description}
					</p>
					<div className='author flex items-center gap-2.5'>
						<Image
							src={blogAvatar}
							alt='blog post image'
							width={40}
							height={40}
							className='avatar object-cover rounded-[50%]'
						/>
						<span className='username'>{data.username}</span>
					</div>
				</div>
				<div className='imageContainer flex-1 h-[18.75rem] relative'>
					<Image
						alt='mountain image'
						fill={true}
						className='image object-cover'
						src={data.image}
					/>
				</div>
			</div>
			<div className='content mt-[3.125rem] text-xl font-light text-[#999] text-justify'>
				<p className='text'>{data.content}</p>
			</div>
		</div>
	);
};

export default BlogPost;
