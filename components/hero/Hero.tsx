import Button from '../UI/Button';
import classes from './Hero.module.scss';

const Hero = () => {
	return (
		<header className={classes.hero}>
			<div className={classes.content}>
				<h1>Pawliszak Trener</h1>

				<div className={classes.typewritter}>
					<span>CHCESZ BYĆ SPRAWNY?</span>
				</div>

				<div className={classes.buttons}>
					<Button>Oferta</Button>
					<Button transparent>Kontakt</Button>
				</div>
			</div>
		</header>
	);
};

export default Hero;
