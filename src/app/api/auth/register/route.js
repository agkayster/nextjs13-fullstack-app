import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

/* pass in "request" coming from Register page/handleFormSubmit since it is a POST request */
export const POST = async (request) => {
	const { name, email, password } = await request.json();

	await connect();

	/* encrypt our password */
	const hashedPassword = await bcrypt.hash(password, 5);

	const newUser = new User({ name, email, password: hashedPassword });

	console.log('get new user =>', newUser);

	try {
		await newUser.save();
		return new NextResponse('user has been created', { status: 201 });
	} catch (error) {
		return new NextResponse(error.message, { status: 500 });
	}
};
