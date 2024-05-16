import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: string;
	blue?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, blue }) => {
	return (
		<h2 className={`${classes.title} ${blue ? classes.blue : null}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
