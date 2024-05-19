import classes from './Button.module.scss';

interface ButtonProps {
	children: string;
	classname?: string;
	transparent?: boolean;
	darkHoverFont?: boolean;
	href?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
	if (props.href) {
		return (
			<button
				className={`${classes.btn} ${
					props.classname ? props.classname : null
				} ${props.transparent ? classes.transparent : null} ${
					props.darkHoverFont ? classes.darkHoverFont : null
				}`}
			>
				<a href={props.href}>{props.children}</a>
			</button>
		);
	}

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
