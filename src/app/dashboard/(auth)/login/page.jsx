'use client';

import { signIn } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
	const [userDetails, setUserDetails] = useState({
		email: '',
		password: '',
	});

	const router = useRouter();

	const handleFormChange = (e, field) => {
		const { value } = e.target;
		setUserDetails({ ...userDetails, [field]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		/* destructure our email and password */
		const { email, password } = userDetails;

		/* pass our email and password in sigin credentialsProvider */
		await signIn('credentials', userDetails);
	};

	return (
		<div className='cont flex flex-col gap-[1.25rem] items-center justify-center'>
			<form
				className='form w-[18.75rem] flex flex-col gap-[1.25rem]'
				onSubmit={handleFormSubmit}>
				<input
					type='email'
					placeholder='email'
					value={userDetails.email || ''}
					onChange={(e) => handleFormChange(e, 'email')}
					className='email p-[1.25rem] bg-transparent border-solid border-2 border-[#bbb] rounded-md text-xl 
					font-bold text-[#bbb]'
					required
				/>
				<input
					type='password'
					placeholder='password'
					value={userDetails.password || ''}
					onChange={(e) => handleFormChange(e, 'password')}
					className='password p-[1.25rem] bg-transparent border-solid border-2 border-[#bbb] rounded-md text-xl font-bold text-[#bbb]'
					required
				/>
				<button className='btn w-[18.75rem] p-5 cursor-pointer bg-[#53c28b] border-none rounded-md text-[#eee] font-bold'>
					Login
				</button>
			</form>
			<button className='' onClick={() => signIn('google')}>
				Log in with Google
			</button>
		</div>
	);
};

export default LoginPage;
