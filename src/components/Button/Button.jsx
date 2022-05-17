import PropTypes from 'prop-types';
import { formatClasses } from 'utils/formatClasses';
import styles from './button.module.css';

const Button = ({ variant='primary', outlined, className, ...props }) => {
	let classes = [
		styles.btn,
		styles[variant],
		outlined ? styles.outlined : null,
		className ? className : null,
	];

	return (
		<button className={formatClasses(classes)} {...props}>
			{props.children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	variant: PropTypes.string,
	outlined: PropTypes.bool,
};
