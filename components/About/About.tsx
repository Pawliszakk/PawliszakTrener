import classes from './About.module.scss';
import { SiInstagram } from 'react-icons/si';
import { FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';
const About = () => {
	return (
		<section className={classes.about} id="o-mnie">
			<div className={classes.photo}>
				<img
					src="/assets/trener/trener.jpg"
					width={400}
					height={400}
					alt="Zdjęcie trenera Pawliszaka"
				/>
			</div>
			<div className={classes.content}>
				<h3>
					Nazywam się <span>Oskar Pawliszak</span>
				</h3>
				<p>
					Moja przygoda ze sportem rozpoczęła się ponad 10 lat temu a od ponad 5
					lat zajmuje się sportami siłowymi. Na początku trenowałem trójbój
					siłowy lecz wyspecjalizowałem się w wyciskaniu leżąc i temu oddałem
					się najbardziej jak dotąd kończąc na wyniku <span>170 kg</span> na
					ławce poziomej.{' '}
					<a href="https://www.instagram.com/pawliszakk/">Sprawdź instagram</a>
				</p>
				<p>
					Od ponad 3 lat skutecznie prowadzę ludzi, treningi personalne i
					rozpisuje plany treningowe aby każdy podopieczny osiągnął wyznaczony
					sobie cel w jak najbardziej efektywny i bezpieczny sposób.{' '}
				</p>

				<div className={classes.socials}>
					<div className={classes.social}>
						<a href="mailto:oskar.pawliszak1@o2.pl">
							<FaEnvelope />
							<span>oskar.pawliszak1@o2.pl</span>
						</a>
					</div>
					<div className={classes.social}>
						<a
							href="https://www.facebook.com/oskar.pawliszak.5/"
							rel="noopener"
							target="_blank"
						>
							<FaSquareFacebook />
							<span>Facebook</span>
						</a>
					</div>
					<div className={classes.social}>
						<a
							href="https://www.instagram.com/pawliszakk"
							rel="noopener"
							target="_blank"
						>
							<SiInstagram />
							<span>instagram</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
