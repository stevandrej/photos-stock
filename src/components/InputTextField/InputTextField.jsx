import styles from './inputTextField.module.css';
import PropTypes from 'prop-types';

const InputTextField = ({ label, id, placeholder, ...props }) => {
	return (
		<div className={styles.formField}>
			{label && (
				<label htmlFor={id} className={styles.fieldLabel}>
					{label}
				</label>
			)}
			<input
				id={id}
				type="text"
				placeholder={placeholder}
				className={styles.fieldInput}
				{...props}
			/>
		</div>
	);
};

export default InputTextField;

InputTextField.propTypes = {
	label: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
};
