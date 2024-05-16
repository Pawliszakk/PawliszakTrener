import classes from './Roadmap.module.scss';

const Roadmap = () => {
	return (
		<div className={classes.box}>
			<div className={classes.step}>
				<h3>
					<span>01.</span> Ankieta oraz wywiad
				</h3>
				<p>
					Na początku muszę trochę cię poznać i dowiedzieć się o tobie pare
					rzeczy aby pracować z tobą jak najlepiej potrafię. Po skontaktowaniu
					się ze mną dostaniesz wstępną ankietę oraz pare dodatkowych pytań.
				</p>
			</div>
			<div className={classes.step}>
				<h3>
					<span>02.</span> Plan działania
				</h3>
				<p>
					Po wypełnieniu ankiety, wstępnej rozmowie – obieramy plan działania
					dostosowany do twoich możliwości, czasu, sprzętu (rozpisuję treningi
					domowe) oraz oczywiście do twoich potrzeb – czy to siłowych,
					sylwetkowych lub zdrowotnych.
				</p>
			</div>
			<div className={classes.step}>
				<h3>
					<span>03.</span> Działamy!
				</h3>
				<p>
					Plan działania obrany więc nie ma na co czekać i realizować twoje
					cele! Najczęściej realizacje planu treningowego możesz zacząć już na
					drugi dzień po jego otrzymaniu lub kiedy tylko będziesz chciał.
				</p>
			</div>
			<div className={classes.step}>
				<h3>
					<span>04.</span> Satysfakcja!
				</h3>
				<p>
					Oczywiście, proces transformacji wymaga czasu, ale po wykonaniu
					naszego planu działania, z twoim zaangażowaniem pierwsze efekty będą
					zawuażalne już w przeciągu miesiąca!
				</p>
			</div>
		</div>
	);
};

export default Roadmap;
