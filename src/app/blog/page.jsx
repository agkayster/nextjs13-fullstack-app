import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import blogImg from '../../../public/blog_image.jpeg';

const BlogPage = () => {
	return (
		<div className='mainCont'>
			<Link
				href='/blog/testId1'
				className='cont flex items-center gap-[3.125rem] mb-[3.125rem]'>
				<div className='imgContainer'>
					<Image
						alt='blog image'
						src={blogImg}
						width={400}
						height={150}
						className='img object-cover'
					/>
				</div>
				<div className='content'>
					<h1 className='title mb-2.5'>Test</h1>
					<p className='desc text-lg text-[#999]'>Desc</p>
				</div>
			</Link>
			<Link
				href='/blog/testId2'
				className='cont flex items-center gap-[3.125rem] mb-[3.125rem]'>
				<div className='imgContainer'>
					<Image
						alt='blog image'
						src={blogImg}
						width={400}
						height={150}
						className='img object-cover'
					/>
				</div>
				<div className='content'>
					<h1 className='title mb-2.5'>Test</h1>
					<p className='desc text-lg text-[#999]'>Desc</p>
				</div>
			</Link>
		</div>
	);
};

export default BlogPage;
