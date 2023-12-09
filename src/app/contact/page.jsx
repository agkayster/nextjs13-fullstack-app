'use client';
import React from 'react';
import Image from 'next/image';
import contactImg from '../../../public/contact.png';
import { Button } from '@/components/Button/Button';

const ContactPage = () => {
	return (
		<div>
			<h1 className='title text-6xl mb-28 text-center'>
				Let's keep in touch
			</h1>
			<div className='content flex gap-28 items-center'>
				<div className='imgContainer flex-1 h-[31.25rem] relative'>
					<Image
						src={contactImg}
						alt='contact image'
						fill={true}
						className='image object-contain animate-[moveContact_3s_ease_infinite]'
					/>
				</div>
				<form className='form flex-1 flex flex-col gap-5'>
					<input
						type='text'
						placeholder='name'
						className='input p-5 bg-transparent border-solid border-[#bbb] border-4 outline-none text-[#bbb] 
						text-xl font-bold'
					/>
					<input
						type='text'
						placeholder='email'
						className='input p-5 bg-transparent border-solid border-[#bbb] border-4 
						outline-none text-[#bbb] text-xl font-bold'
					/>
					<textarea
						className='textArea p-5 bg-transparent border-solid border-[#bbb] border-4 
						outline-none text-[#bbb] text-xl font-bold'
						placeholder='message'
						cols='30'
						rows='10'></textarea>
					<Button url='#' text='Send' />
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
