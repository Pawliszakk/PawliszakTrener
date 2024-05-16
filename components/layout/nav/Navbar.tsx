import classes from './Navbar.module.scss';

import { CiDumbbell } from 'react-icons/ci';
import { FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';

const Navbar = () => {
	return (
		<header className={classes.header}>
			<div className={classes.bar}>
				<div className={classes.icons}>
					<a href="mailto:oskar.pawliszak1@o2.pl">
						<FaEnvelope />
					</a>
					<a href="https://www.facebook.com/oskar.pawliszak.5/">
						<FaSquareFacebook />
					</a>
					<a href="https://www.instagram.com/pawliszakk">
						<SiInstagram />
					</a>
				</div>
			</div>
			<nav className={classes.nav}>
				<div className={classes.logo}>
					{' '}
					<CiDumbbell /> Pawliszak Trener
				</div>
				<ul className={classes.list}>
					<li>
						<a href="#">O mnie</a>
					</li>
					<li>
						<a href="#">Plany</a>
					</li>
					<li>
						<a href="#">Oferta</a>
					</li>
					<li>
						<a href="#">Kontakt</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
