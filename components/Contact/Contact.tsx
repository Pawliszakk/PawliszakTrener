import classes from './Contact.module.scss';

import { FiPhone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { FaInstagram } from 'react-icons/fa6';
import Button from '../UI/Button';

const Contact = () => {
	return (
		<section className={classes.contact} id="kontakt">
			<h3>Skontaktuj się ze mną</h3>
			<p>
				Jesteś zainteresowany współpracą lub masz do mnie pytanie, chętnie
				odpowiem 🙂
			</p>

			<div className={classes.box}>
				<div className={classes.infos}>
					<a href="tel:535150052" className={classes.info}>
						<FiPhone /> 535 150 052
					</a>
					<a href="mailto:oskar.pawliszak1@o2.pl" className={classes.info}>
						<RxEnvelopeClosed /> oskar.pawliszak1@o2.pl
					</a>
					<a
						href="https://www.instagram.com/pawliszakk/"
						className={classes.info}
					>
						<FaInstagram /> Instagram
					</a>
				</div>
				<div className={classes.form}>
					<div className={classes.top}>
						<input type="text" name="name" placeholder="Twoje imię" />
						<input type="text" name="email" placeholder="Twój adres e-mail" />
					</div>
					<div className={classes.bottom}>
						<textarea name="message" id=""></textarea>
					</div>
					<Button darkHoverFont>wyślij wiadomość</Button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
