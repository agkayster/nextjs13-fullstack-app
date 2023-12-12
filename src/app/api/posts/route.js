import { NextResponse } from 'next/server';
import connect from '@/utils/db';

export const GET = async (request) => {
	//here we fetch data from mongodb

	return new NextResponse('it works', { status: 200 });
};
