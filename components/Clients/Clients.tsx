import classes from './Clients.module.scss';
import Metamorphoses from './Metamorphoses';
import Roadmap from './Roadmap';

const Clients = () => {
	return (
		<section className={classes.clients}>
			<div className={classes.wrapper}>
				<Metamorphoses />
				<Roadmap />
			</div>
		</section>
	);
};

export default Clients;
