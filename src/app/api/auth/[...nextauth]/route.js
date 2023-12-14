import NextAuth from 'next-auth';
import { useSession } from 'next-auth/react';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
	],
});

/* when we pass our username and password, it is going to be a POST method and when we fetch user details, it is a GET method */
export { handler as GET, handler as POST };
