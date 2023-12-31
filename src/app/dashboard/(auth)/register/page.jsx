'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const RegisterPage = () => {
	/* use session to protect our register page */
	const session = useSession();

	const [userDetails, setUserDetails] = useState({
		name: '',
		email: '',
		password: '',
	});

	const [error, setError] = useState(false);

	const router = useRouter();

	const handleFormChange = (e, field) => {
		const { value } = e.target;
		setUserDetails({ ...userDetails, [field]: value });
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		try {
			const res = await fetch('/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userDetails),
			});

			/* once user is registered, user is redirected to /dashboard/login page */
			res.status === 201 &&
				router.push(
					'/dashboard/login?success=Account has been created'
				);
			setUserDetails({ name: '', email: '', password: '' });
		} catch (error) {
			setError(true);
		}
	};

	/* once user is authenticated and is in dashboard page, user cannot be redirected to register page again */
	if (session.status === 'authenticated') {
		router?.push('/dashboard');
	}

	return (
		<div className='cont flex flex-col gap-[1.25rem] items-center justify-center'>
			<form
				onSubmit={handleFormSubmit}
				className='form w-[18.75rem] flex flex-col gap-[1.25rem]'>
				<input
					type='text'
					placeholder='name'
					value={userDetails.name || ''}
					onChange={(e) => handleFormChange(e, 'name')}
					className='username p-[1.25rem] bg-transparent border-solid border-2 border-[#bbb] rounded-md text-xl font-bold text-[#bbb]'
					required
				/>
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
					Register
				</button>
			</form>
			{error && 'Something went wrong'}
			<Link href='/dashboard/login'>Login with an existing account</Link>
		</div>
	);
};

export default RegisterPage;
