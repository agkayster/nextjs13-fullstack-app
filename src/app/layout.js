import { Inter, Ubuntu } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

const ubuntu = Ubuntu({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Nextjs13 App',
	description: 'This is a Nextjs13 App',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={ubuntu.className}>
				<ThemeProvider>
					{/* className container works because of "./globals.css". This can be replaced with Tailwind css */}
					<div className='container'>
						<Navbar />
						{children}
						<Footer />
					</div>
					{/* <div className='container'>
					<Navbar />
					{children}
					<Footer />
				</div> */}
				</ThemeProvider>
			</body>
		</html>
	);
}
