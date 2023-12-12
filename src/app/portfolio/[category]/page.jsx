'use client';
import { Button } from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import notFound from 'next/navigation';

import beachPic from '../../../../public/beach_pic.jpeg';
import { items } from './data';

const getData = (cat) => {
	const data = items[cat];

	if (data) {
		return data;
	}

	return notFound();
};

const CategoryPage = ({ params }) => {
	/* params is picked up in the [category] subfolder when you click on the href in the parent component */

	const { category } = params;

	const data = getData(category);

	return (
		<div className='cont'>
			<h1 className='catTitle text-[#53c28b]'>{category}</h1>
			{/* nth child code should be used a step above the parent div for the content and image */}
			<div className='[&>*:nth-child(odd)]:flex-row-reverse [&>*:nth-child(even)]:flex-row'>
				{data.map(({ id, title, desc }) => (
					<div
						className='item flex gap-14 mt-[3.125rem] mb-[6.25rem]'
						key={id}>
						<div className='content flex-1 flex flex-col gap-5 justify-center'>
							<h1 className='title text-5xl'>{title}</h1>
							<p className='desc text-xl'>{desc}</p>
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
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
