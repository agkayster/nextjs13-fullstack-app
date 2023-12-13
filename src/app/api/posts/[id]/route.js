import { NextResponse } from 'next/server';
import connect from '@/utils/db';
import Post from '@/models/Post';

//here we fetch single post from mongodb
export const GET = async (request, { params }) => {
	/* destructure "id" from params */
	const { id } = params;

	try {
		await connect();

		/* this would fetch all our posts */
		const post = await Post.findById(id);

		/* respond with all posts */
		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (error) {
		return new NextResponse('Post not found', { status: 500 });
	}
};

// export const DELETE = async (request, { params }) => {
// 	const { id } = params;

// 	try {
// 		await connect();

// 		await Post.findByIdAndDelete(id);

// 		return new NextResponse('Post has been deleted', { status: 200 });
// 	} catch (err) {
// 		return new NextResponse('Database Error', { status: 500 });
// 	}
// };
