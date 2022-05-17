import { formatClasses } from 'utils/formatClasses';
import styles from './row.module.css';

const Row = ({ justifyCenter, ...props }) => {
	const classes = [styles.row, justifyCenter ? styles.justifyCenter : null];

	return (
		<div className={formatClasses(classes)} {...props}>
			{props.children}
		</div>
	);
};

export default Row;
