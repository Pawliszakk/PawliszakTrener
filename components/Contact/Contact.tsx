import classes from './Contact.module.scss';

import { FiPhone } from 'react-icons/fi';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { FaInstagram } from 'react-icons/fa6';
import Button from '../UI/Button';
import { FaRegUser } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import SectionTitle from '../UI/SectionTitle';

const Contact = () => {
	return (
		<section className={classes.contact} id="kontakt">
			<SectionTitle>Skontaktuj się ze mną</SectionTitle>
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
						<div className={classes.input}>
							<input type="text" name="name" placeholder="Twoje imię" />
							<FaRegUser />
						</div>
						<div className={classes.input}>
							<input type="text" name="email" placeholder="Twój adres e-mail" />
							<RxEnvelopeClosed />
						</div>
					</div>
					<div className={classes.bottom}>
						<div className={classes.input}>
							<textarea name="message" id="" placeholder="Wiadomość"></textarea>
							<BiMessageDetail />
						</div>
					</div>
					<Button darkHoverFont>wyślij wiadomość</Button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
