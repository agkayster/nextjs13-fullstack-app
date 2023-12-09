'use client';
import { Button } from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';

import beachPic from '../../../../public/beach_pic.jpeg';

const CategoryPage = ({ params }) => {
	// console.log('get params =>', params);
	const { category } = params;

	return (
		<div className='cont'>
			<h1 className='catTitle text-[#53c28b]'>{category}</h1>
			<div className='item flex flex-row gap-14 mt-[3.125rem] mb-[6.25rem]'>
				<div className='content flex-1 flex flex-col gap-5 justify-center'>
					<h1 className='title text-5xl'>Test</h1>
					<p className='desc text-xl'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Harum deleniti similique blanditiis quae ut sequi
						asperiores! Modi blanditiis debitis asperiores,
						laudantium praesentium porro expedita similique, ducimus
						adipisci, voluptatum libero! Nesciunt.
					</p>
					<Button text='See More' url='#' />
				</div>
				<div className='imgContainer flex-1 h-[31.25rem] relative'>
					<Image
						alt='category image'
						src={beachPic}
						fill={true}
						className='img object-cover'
					/>
				</div>
			</div>
			<div className='item flex flex-row-reverse gap-14 mt-[3.125rem] mb-[6.25rem]'>
				<div className='content flex-1 flex flex-col gap-5 justify-center'>
					<h1 className='title'>Test</h1>
					<p className='desc'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Harum deleniti similique blanditiis quae ut sequi
						asperiores! Modi blanditiis debitis asperiores,
						laudantium praesentium porro expedita similique, ducimus
						adipisci, voluptatum libero! Nesciunt.
					</p>
					<Button text='See More' url='#' />
				</div>
				<div className='imgContainer flex-1 h-[31.25rem] relative'>
					<Image
						alt='category image'
						src={beachPic}
						fill={true}
						className='img object-cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
