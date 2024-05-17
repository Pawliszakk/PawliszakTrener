'use client';
import useEmblaCarousel from 'embla-carousel-react';
import classes from './CertificatesSlider.module.scss';

const CertificatesSlider = () => {
	const [emblaRef] = useEmblaCarousel();

	const certificates = [
		'/assets/certyfikaty/1.JPG',
		'/assets/certyfikaty/2.JPG',
		'/assets/certyfikaty/3.JPG',
		'/assets/certyfikaty/4.JPG',
		'/assets/certyfikaty/5.JPG',
		'/assets/certyfikaty/6.JPG',
		'/assets/certyfikaty/7.JPG',
		'/assets/certyfikaty/8.JPG',
		'/assets/certyfikaty/9.JPG',
		'/assets/certyfikaty/10.JPG',
		'/assets/certyfikaty/11.JPG',
	];

	return (
		<div className={classes.box} ref={emblaRef}>
			<div className={classes.slider}>
				{certificates.map((c) => (
					<div key={c} className={classes.image}>
						<img
							src={c}
							width={200}
							height={200}
							alt="Certyfikat Trenera Pawliszaka"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CertificatesSlider;
