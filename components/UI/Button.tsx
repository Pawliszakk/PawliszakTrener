import classes from './Button.module.scss';

interface ButtonProps {
	children: string;
	classname?: string;
	transparent?: boolean;
	darkHoverFont?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
	return (
		<button
			className={`${classes.btn} ${props.classname ? props.classname : null} ${
				props.transparent ? classes.transparent : null
			} ${props.darkHoverFont ? classes.darkHoverFont : null}`}
		>
			{props.children}
		</button>
	);
};

export default Button;
