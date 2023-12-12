import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import blogImg from '../../../public/blog_image.jpeg';

/* we are fetching Data */
async function getData() {
	const res = await fetch('http://localhost:3000/api/posts', {
		next: { revalidate: 10 }, // => revalidates our data every 10 secs
	});

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

const BlogPage = async () => {
	const data = await getData();

	return (
		<div className='mainCont'>
			{data.map(({ userId, _id: id, title, description, image }) => (
				<Link
					key={id}
					/* id in href must match [id] subfolder or category in href url must match [category] subfolder
					id or category or house property must also be present as a property in the API json data.
					There must be a property called id, house, category in the API json data.
					Click on the href in the parent component sends the params to the [id] subfolder
					*/
					href={`/blog/${id}`}
					className='cont flex items-center gap-[3.125rem] mb-[3.125rem]'>
					<div className='imgContainer'>
						<Image
							alt='blog image'
							src={image}
							width={400}
							height={150}
							className='img object-cover flex-1'
						/>
					</div>
					<div className='content flex-1'>
						<h1 className='title mb-2.5'>{title}</h1>
						<p className='desc text-lg text-[#999]'>
							{description}
						</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default BlogPage;
