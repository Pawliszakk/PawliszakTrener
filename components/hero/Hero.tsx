import Button from '../UI/Button';
import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<header className={classes.hero}>
			<h1>Pawliszak Trener</h1>

			<div className={classes.typewritter}>
				<span>CHCESZ BYĆ SPRAWNY?</span>
			</div>

			<div className={classes.buttons}>
				<Button>Oferta</Button>
				<Button>Kontakt</Button>
			</div>
		</header>
	);
};

export default Hero;
