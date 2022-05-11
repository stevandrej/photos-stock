import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ variant, outlined, className, ...props }) => {
	return (
		<button
			className={`
				${styles.btn} 
				${styles[variant]} 
				${outlined && styles.outlined}
				${className}
			`}
			{...props}
		>
			{props.children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	variant: PropTypes.string,
	outlined: PropTypes.bool,
};
