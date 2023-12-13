'use client';

import { signIn } from 'next-auth/react';
import React from 'react';

const LoginPage = () => {
	return (
		<div className='cont'>
			<button className='' onClick={() => signIn('google')}>
				Log in with Google
			</button>
		</div>
	);
};

export default LoginPage;
