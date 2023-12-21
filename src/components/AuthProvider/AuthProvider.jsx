'use client';

import React from 'react';
import { SessionProvider } from 'next-auth/react';

/* here we use AuthProvider component since we cannot use useSession to wrap our app directly
{children} represents our app we are wrapping */
const AuthProvider = ({ children }) => {
	return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
