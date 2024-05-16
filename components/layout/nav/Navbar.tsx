'use client';
import classes from './Navbar.module.scss';

import { CiDumbbell } from 'react-icons/ci';
import SocialBar from './SocialBar';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);

	const toggleNavbarHandler = () => setOpen((prev) => !prev);

	return (
		<header className={classes.header}>
			<SocialBar />
			<nav className={classes.nav}>
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
