import Button from '../UI/Button';
import classes from './Metamorphoses.module.scss';
import Slider from './Slider';

const Metamorphoses = () => {
	return (
		<div className={classes.box}>
			<span>Jak to wygląda?</span>
			<p>Oni już wiedzą...</p>
			<Slider />
			<Button darkHoverFont href="#kontakt">
				Zacznijmy działać !
			</Button>
		</div>
	);
};

export default Metamorphoses;
