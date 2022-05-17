import { formatClasses } from 'utils/formatClasses';
import styles from './container.module.css';

const Container = ({ alignMiddle, ...props }) => {
	const classes = [styles.container, alignMiddle ? styles.alignMiddle : null];

	return (
		<div className={formatClasses(classes)} {...props}>
			{props.children}
		</div>
	);
};

export default Container;
