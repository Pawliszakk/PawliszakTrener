'use client';
import { useEffect, useState } from 'react';
import classes from './Slider.module.scss';
import Image from 'next/image';
import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

const Slider = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const images = [
		'/assets/metamorfozy/1.jpg',
		'/assets/metamorfozy/2.jpg',
		'/assets/metamorfozy/3.jpg',
		'/assets/metamorfozy/4.jpg',
		'/assets/metamorfozy/5.jpg',
		'/assets/metamorfozy/6.jpg',
	];
	const altTexts = [
		'Przemiana Kamila - ponad 2 lata',
		'Przemiana Kuby - 3 lata',
		'Przemiana Michała - 11 miesięcy',
		'Przemiana Michała - ponad 2 lata',
		'Przemiana Kuby - 7 miesięcy',
		'Moja skromna przemiana - 5 lat',
		'Przemiana Kacpra - 1.5 roku',
	];

	const changeNextSlide = () => {
		if (currentImage === 5) {
			setCurrentImage(0);
		} else {
			setCurrentImage((prev) => prev + 1);
		}
	};
	const changePreviousSlide = () => {
		if (currentImage === 0) {
			setCurrentImage(5);
		} else {
			setCurrentImage((prev) => prev - 1);
		}
	};
	useEffect(() => {
		const sliderTimer = setTimeout(() => {
			changeNextSlide();
		}, 4000);

		return () => clearTimeout(sliderTimer);
	}, [changeNextSlide]);
	return (
		<div className={classes.box}>
			<div className={classes.slider}>
				{images.map((image, index) => (
					<Image
						key={index}
						src={image}
						width={600}
						height={500}
						alt={altTexts[index]}
						className={`${classes.image} ${
							index === currentImage ? classes.active : ''
						}`}
						style={{
							transition: 'opacity 0.5s ease',
							opacity: index === currentImage ? 1 : 0,
						}}
					/>
				))}
				<button
					onClick={changePreviousSlide}
					className={`${classes.arrow} ${classes.left}`}
				>
					<MdOutlineKeyboardArrowLeft />
				</button>
				<button
					onClick={changeNextSlide}
					className={`${classes.arrow} ${classes.right}`}
				>
					<MdOutlineKeyboardArrowRight />
				</button>
				<div className={classes.text}>{altTexts[currentImage]}</div>
			</div>

			<div className={classes.dots}>
				{images.map((image, i) => (
					<div
						key={image}
						onClick={() => setCurrentImage(i)}
						className={`${classes.dot} ${
							i === currentImage ? classes.active : null
						}`}
					></div>
				))}
			</div>
		</div>
	);
};

export default Slider;
