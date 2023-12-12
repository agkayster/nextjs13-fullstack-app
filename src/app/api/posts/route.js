import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request) => {
	//here we fetch data from mongodb
	try {
		await connect();

		/* this would fetch all our posts */
		const posts = await Post.find();

		/* respond with all posts */
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 });
	}
};
