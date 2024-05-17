import classes from './Reviews.module.scss';
import { TbStarFilled } from 'react-icons/tb';
import ReviewsSlider from './ReviewsSlider';
import SectionTitle from '../UI/SectionTitle';

const Reviews = () => {
	return (
		<section className={classes.reviews}>
			<SectionTitle>Wasze opinie</SectionTitle>

			<div className={classes.box}>
				<div className={classes.google}>
					<span>Doskonała</span>

					<div className={classes.stars}>
						<TbStarFilled />
						<TbStarFilled />
						<TbStarFilled />
						<TbStarFilled />
						<TbStarFilled />
					</div>
					<p>
						Na podstawie <span>23 opini</span>
					</p>

					<img
						src="/assets/google/google.png"
						alt="Google logo icon"
						width={150}
						height={100}
					/>
				</div>
				<ReviewsSlider />
			</div>
		</section>
	);
};

export default Reviews;
