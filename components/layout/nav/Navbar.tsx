'use client';
import { useEffect, useState } from 'react';

import classes from './Navbar.module.scss';

import { CiDumbbell } from 'react-icons/ci';
import SocialBar from './SocialBar';
import Hamburger from 'hamburger-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				if (pathname !== '/') {
					setIsScrolled(true);
					return;
				}
				setIsScrolled(true);
			} else {
				if (pathname !== '/') {
					setIsScrolled(true);
					return;
				}
				setIsScrolled(false);
			}
		};
		if (pathname !== '/') {
			setIsScrolled(true);
			return;
		}
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [pathname]);
	const toggleNavbarHandler = () => setOpen((prev) => !prev);

	return (
		<header className={classes.header}>
			<SocialBar isScrolled={isScrolled} />
			<nav className={`${classes.nav} ${isScrolled ? classes.scrolled : null}`}>
				<div className={classes.logo}>
					{' '}
					<Link href="/#home">
						<CiDumbbell /> Pawliszak Trener
					</Link>
				</div>
				<div className={classes.hamburger}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>

				<ul className={`${classes.list} ${isOpen ? classes.open : null}`}>
					<li onClick={toggleNavbarHandler}>
						<a href="/#o-mnie">O mnie</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="/#plany">Plany</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="/#oferta">Oferta</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="/#kontakt">Kontakt</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
