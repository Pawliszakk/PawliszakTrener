import classes from './Reviews.module.scss';
import Image from 'next/image';
import { TbStarFilled } from 'react-icons/tb';
import ReviewsSlider from './ReviewsSlider';

const Reviews = () => {
	return (
		<section className={classes.reviews}>
			<h3>Wasze Opinie</h3>

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
					<Image
						src="/assets/google/google.png"
						width={150}
						height={100}
						alt="Google logo icon"
					/>
				</div>
                <ReviewsSlider/>
			</div>
		</section>
	);
};

export default Reviews;
