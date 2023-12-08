'use client';
import Image from 'next/image';
import hero from '../../public/hero.png';

export default function Home() {
	return (
		/* always name your classnames, it keeps styling UNIQUE */
		<main className='cont flex flex-row items-center gap-28'>
			<div className='item flex-1 flex flex-col gap-14'>
				<h1 className='title text-7xl bg-gradient-to-b from-green-600 to-gray-600 bg-clip-text text-transparent'>
					Better design for your digital products.
				</h1>
				<p className='desc text-2xl font-light'>
					Turn your idea into Reality. We bring together the teams
					from the global tech industry.
				</p>
				<button
					onClick={() => console.log('log button')}
					className='btn p-5 cursor-pointer bg-[#53c28b] border-none rounded-md w-max text-white'>
					See Our works
				</button>
			</div>
			<div className='item flex-1 flex flex-col gap-14'>
				<Image
					src={hero}
					alt='hero image'
					className='w-full h-[31.25rem] object-cover'
				/>
			</div>
		</main>
	);
}
