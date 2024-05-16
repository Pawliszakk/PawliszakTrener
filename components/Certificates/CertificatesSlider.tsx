'use client';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import classes from './CertificatesSlider.module.scss';

const CertificatesSlider = () => {
	const [emblaRef] = useEmblaCarousel();

	const certificates = [
		'/assets/certyfikaty/1.jpg',
		'/assets/certyfikaty/2.jpg',
		'/assets/certyfikaty/3.jpg',
		'/assets/certyfikaty/4.jpg',
		'/assets/certyfikaty/5.jpg',
		'/assets/certyfikaty/6.jpg',
		'/assets/certyfikaty/7.jpg',
		'/assets/certyfikaty/8.jpg',
		'/assets/certyfikaty/9.jpg',
		'/assets/certyfikaty/10.jpg',
		'/assets/certyfikaty/11.jpg',
	];

	return (
		<div className={classes.box} ref={emblaRef}>
			<div className={classes.slider}>
				{certificates.map((c) => (
					<div key={c} className={classes.image}>
						<Image
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
