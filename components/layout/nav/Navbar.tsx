'use client';
import { useEffect, useState } from 'react';

import classes from './Navbar.module.scss';

import { CiDumbbell } from 'react-icons/ci';
import SocialBar from './SocialBar';
import Hamburger from 'hamburger-react';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			if (scrollTop > 0) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	const toggleNavbarHandler = () => setOpen((prev) => !prev);

	console.log(isScrolled);

	return (
		<header className={classes.header}>
			<SocialBar isScrolled={isScrolled} />
			<nav className={`${classes.nav} ${isScrolled ? classes.scrolled : null}`}>
				<div className={classes.logo}>
					{' '}
					<a href="/#home">
						<CiDumbbell /> Pawliszak Trener
					</a>
				</div>
				<div className={classes.hamburger}>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>

				<ul className={`${classes.list} ${isOpen ? classes.open : null}`}>
					<li onClick={toggleNavbarHandler}>
						<a href="#o-mnie">O mnie</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="#plany">Plany</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="#oferta">Oferta</a>
					</li>
					<li onClick={toggleNavbarHandler}>
						<a href="#kontakt">Kontakt</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
