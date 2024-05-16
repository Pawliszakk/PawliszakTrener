import classes from './SocialBar.module.scss';

import { SiInstagram } from 'react-icons/si';
import { FaEnvelope, FaSquareFacebook } from 'react-icons/fa6';

interface SocialBarProps {
	isScrolled: boolean;
}

const SocialBar: React.FC<SocialBarProps> = (props) => {
	return (
		<div
			className={`${classes.bar} ${props.isScrolled ? classes.scrolled : null}`}
		>
			<div className={classes.icons}>
				<a href="mailto:oskar.pawliszak1@o2.pl">
					<FaEnvelope />
				</a>
				<a href="https://www.facebook.com/oskar.pawliszak.5/">
					<FaSquareFacebook />
				</a>
				<a href="https://www.instagram.com/pawliszakk">
					<SiInstagram />
				</a>
			</div>
		</div>
	);
};

export default SocialBar;
