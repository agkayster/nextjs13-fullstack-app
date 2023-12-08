'use client';
import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import aboutImg from '../../../public/desktop_image.jpeg';
import { Button } from '@/components/Button/Button';

const AboutPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src={aboutImg}
					fill={true}
					alt='laptop image'
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTitle}>Digital Storytellers</h1>
					<h2 className={styles.imgDesc}>
						Handcarfting award winning digital experiences
					</h2>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Are We?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Autem eum esse maiores qui vel quia incidunt
						voluptatibus! Expedita placeat quam, maxime alias id
						odio cupiditate commodi error odit doloremque animi!
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet, consectetur adipisicing
						elit. Cupiditate, labore nemo ab illo
						<br />
						-suscipit amet distinctio laboriosam fuga
						<br />
						-facilis minima iusto sapiente numquam
						<br />
						-deleniti debitis rerum eius ipsum nam pariatur.
					</p>
					<Button text='Contact' url='/contact' />
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
