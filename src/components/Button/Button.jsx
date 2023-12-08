import Link from 'next/link';

export const Button = ({ text, url }) => {
	return (
		<Link href={url}>
			<button
				onClick={() => console.log('log button')}
				className='btn p-5 cursor-pointer bg-[#53c28b] border-none rounded-md w-max text-white'>
				{text}
			</button>
		</Link>
	);
};
