import SectionTitle from '../UI/SectionTitle';
import classes from './Certificates.module.scss';
import CertificatesSlider from './CertificatesSlider';

const Certificates = () => {
	return (
		<section className={classes.certificates}>
			<SectionTitle>Certyfikaty</SectionTitle>
			<CertificatesSlider />
		</section>
	);
};

export default Certificates;
