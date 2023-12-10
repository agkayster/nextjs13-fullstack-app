import React from 'react';
import Image from 'next/image';

import blogAvatar from '../../../../public/blog_avatar.jpeg';
import mountainImg from '../../../../public/mountain_blog.jpeg';

const BlogPost = ({ params }) => {
	// console.log('get params =>', params);
	return (
		<div className='cont'>
			<div className='top flex'>
				<div className='info flex-1'>
					<h1 className='title text-[2.5rem] '>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<p className='desc text-lg font-light'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perferendis impedit mollitia ea dolorum. Quos eum
						corporis asperiores optio vel, iure ullam, quo sequi
						placeat ipsum quas? Itaque deleniti beatae magni.
					</p>
					<div className='author flex items-center gap-2.5'>
						<Image
							src={blogAvatar}
							alt='blog post image'
							width={40}
							height={40}
							className='avatar object-cover rounded-[50%]'
						/>
						<span className='username'>John Doe</span>
					</div>
				</div>
				<div className='imageContainer flex-1 h-[18.75rem] relative'>
					<Image
						alt='mountain image'
						fill={true}
						className='image object-cover'
						src={mountainImg}
					/>
				</div>
			</div>
			<div className='content mt-[3.125rem] text-xl font-light text-[#999] text-justify'>
				<p className='text'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quasi, accusamus non autem, reiciendis voluptatum pariatur
					laudantium facere modi cum nisi obcaecati expedita cumque ea
					laborum, voluptas ipsa dolorum? Pariatur, nesciunt!
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
