import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

export const GET = async (request) => {
	/* we are trying to get session.data.user.name */
	const url = new URL(request.url);

	/* we search for the username */
	const username = url.searchParams.get('username');

	//here we fetch data from mongodb
	try {
		await connect();

		/* this would fetch all our posts and if there is a username it should fetch that username */
		const posts = await Post.find(username && { username });

		/* respond with all posts */
		return new NextResponse(JSON.stringify(posts), { status: 200 });
	} catch (error) {
		return new NextResponse('Database Error', { status: 500 });
	}
};

export const POST = async (request) => {
	const body = await request.json();

	const newPost = new Post(body);

	try {
		await connect();

		await newPost.save();

		return new NextResponse('Post has been created', { status: 201 });
	} catch (err) {
		return new NextResponse('Database Error', { status: 500 });
	}
};
