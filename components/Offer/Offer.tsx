import classes from './Offer.module.scss';
import Button from '../UI/Button';
import SectionTitle from '../UI/SectionTitle';

const Offer = () => {
	return (
		<section className={classes.offer} id="oferta">
			<SectionTitle>Oferta</SectionTitle>

			<div className={classes.offers}>
				<div className={classes.tile}>
					<div className={classes.image}>
						<img
							src="/assets/oferta/konsultacja.JPG"
							width={480}
							height={480}
							alt="Zdjęcie prezentujące oferte"
						/>
					</div>
					<div className={classes.description} id="plany">
						<h3> Indywidualny Plan Treningowy</h3>
						<p>
							Na podstawie twoich potrzeb oraz możliwości otrzymujesz
							zindywidualizowany plan treningowy na okres miesiąca. Plan
							treningowy zawiera w sobie rozpisaną rozgrzewkę, plan, filmy z
							techniką ćwiczeń - wszystko co jest potrzebne aby zacząć go
							realizować z dnia na dzień.
						</p>
						<Button href="#kontakt" darkHoverFont>
							Biorę!
						</Button>
					</div>
				</div>
				<div className={classes.tile}>
					<div className={classes.image}>
						<img
							src="/assets/oferta/prowadzenie.JPG"
							width={480}
							height={480}
							alt="Zdjęcie prezentujące oferte"
						/>
					</div>
					<div className={classes.description}>
						<h3> Prowadzenie treningowe Online</h3>
						<p>
							W ramach prowadzenia treningowego online, dostajesz indywidualny
							plan treningowy, kontakt ze mną online w każdym momencie oraz
							cotygodniową analizę filmów z twoich treningów, aby cały czas
							doskonalić twoją technikę i monitorować twoje postępy.
						</p>
						<Button href="#kontakt" darkHoverFont>
							Biorę!
						</Button>
					</div>
				</div>
				<div className={classes.tile}>
					<div className={classes.image}>
						<img
							src="/assets/oferta/trening.JPG"
							width={480}
							height={480}
							alt="Zdjęcie prezentujące oferte"
						/>
					</div>
					<div className={classes.description}>
						<h3> Trening Personalny </h3>
						<p>
							Stacjonarny trening personalny trwa od 2 do 3 godzin. Na treningu
							personalnym możesz sam powiedzieć co byś chciał przećwiczyć, na
							czym chciałbyś popracować lub zostawić to mnie i sam zadecyduję
							nad czym powinniśmy pracować aby jak najbardziej zbliżyć cię do
							twojego celu.
						</p>
						<Button href="#kontakt" darkHoverFont>
							Biorę!
						</Button>
					</div>
				</div>
				<div className={classes.tile}>
					<div className={classes.image}>
						<img
							src="/assets/oferta/pakiet.JPG"
							width={480}
							height={480}
							alt="Zdjęcie prezentujące oferte"
						/>
					</div>
					<div className={classes.description}>
						<h3> Pakiet Treningowy </h3>
						<p>
							W pakiecie treningowym masz wszystko czego ci potrzeba do
							osiągnięcia twojego celu w najkrótszym czasie. Pakiet treningowy
							obejmuje indywidualny plan treningowy, prowadzenie online oraz
							jeden trening personalny w miesiącu.
						</p>
						<Button href="#kontakt" darkHoverFont>
							Biorę!
						</Button>
					</div>
				</div>
				<div className={classes.tile}>
					<div className={classes.image}>
						<img
							src="/assets/oferta/konsultacja.JPG"
							width={480}
							height={480}
							alt="Zdjęcie prezentujące oferte"
						/>
					</div>
					<div className={classes.description}>
						<h3>Konsultacja techniki </h3>
						<p>
							Konsultacja techniki polega na wysyłaniu filmów z twoich ćwiczeń
							do mnie. Jako osoba z doświadczeniem w sportach siłowych
							analizuję, oceniam co można by było poprawić, zoptymalizować w
							danym przypadku i wysyłam ci wiadomość zwrotną z rzeczami do
							poprawy.
						</p>
						<Button href="#kontakt" darkHoverFont>
							Biorę!
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offer;
