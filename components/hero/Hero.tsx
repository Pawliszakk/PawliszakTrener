'use client';
import Button from '../UI/Button';
import classes from './Hero.module.scss';
import { Typewriter } from 'react-simple-typewriter';
const Hero = () => {
	const typeWriterWords = [
		'chcesz wycisnąć pierwszą stówkę?',
		'chcesz zmienić swoją sylwetkę?',
		'chcesz poprawić swoją postawę?',
		'chcesz być sprawniejszy?',
		'chcesz mieć lepszą kondycję?',
		'chcesz schudnąć?',
		'chcesz zyskać pewność siebie?',
	];

	return (
		<header className={classes.hero} id="home">
			<div className={classes.content}>
				<h1>Pawliszak Trener</h1>

				<div className={classes.typewritter}>
					<Typewriter
						loop={10}
						typeSpeed={100}
						cursor
						delaySpeed={2000}
						words={typeWriterWords}
					/>
				</div>

				<div className={classes.buttons}>
					<Button href="#oferta">Oferta</Button>
					<Button href="#kontakt" transparent>
						Kontakt
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Hero;
