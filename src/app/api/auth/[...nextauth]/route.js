import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';

import User from '@/models/User';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			id: 'credentials',
			username: 'Credentials',
			/* after getting the credentials we need to authorize them */
			async authorize(credentials) {
				/* use connect to check if our user is in our DB mongoDB */
				await connect();

				try {
					/* find a particular user using their email credentials */
					const user = await User.findOne({
						email: credentials.email,
					});

					if (user) {
						/*check password and use bcrypt to compare the credentials password used during login 
						with the password stored by the user in our DB mongoDB*/
						const isPasswordCorrect = await bcrypt.compare(
							credentials.password,
							user.password
						);

						if (isPasswordCorrect) {
							return user;
						} else {
							throw new Error('Incorrect password');
						}
					} else {
						throw new Error('user not found');
					}
				} catch (error) {
					throw new Error(error);
				}
			},
		}),
	],
	pages: {
		/* this is our error page, so we do not have to leave the login page on the browser */
		error: '/dashboard/login',
	},
});

/* when we pass our username and password, it is going to be a POST method and when we fetch user details, it is a GET method */
export { handler as GET, handler as POST };
