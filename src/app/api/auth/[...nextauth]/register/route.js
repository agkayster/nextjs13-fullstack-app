import { connect } from 'mongoose';

export const POST = async (request) => {
	const { username, email, password } = await request.json();

	await connect();

	try {
	} catch (error) {
		return new NextResponse(error.message, { status: 500 });
	}
};
