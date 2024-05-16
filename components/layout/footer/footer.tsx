import Link from 'next/link';
import classes from './footer.module.scss';
import { FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';
import { SiInstagram } from 'react-icons/si';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={classes.footer}>
			<div className={classes.socials}>
				<div className={classes.social}>
					<a href="mailto:oskar.pawliszak1@o2.pl">
						<FaEnvelope />
					</a>
				</div>
				<div className={classes.social}>
					<a href="https://www.facebook.com/oskar.pawliszak.5/">
						<FaSquareFacebook />
					</a>
				</div>
				<div className={classes.social}>
					<a href="https://www.instagram.com/pawliszakk">
						<SiInstagram />
					</a>
				</div>
			</div>
			<p>
				© Pawliszak Trener {currentYear} | Realizacja{' '}
				<a href="https://www.pawliszakdev.com">PawliszakDev</a>
			</p>

			<Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
		</footer>
	);
};

export default Footer;
