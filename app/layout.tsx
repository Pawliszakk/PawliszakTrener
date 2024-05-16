import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/nav/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title:
		'Oskar Pawliszak - Trener Personalny, Plany Treningowe, Treningi Personalne',
	description:
		'Oskar Pawliszak - trener personalny. Zbuduj siłę i wymarzoną sylwetkę z moimi planami treningowymi. Skorzystaj z treningów personalnych na terenie Zamościa!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
