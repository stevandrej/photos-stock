import styles from './modal.module.css';
import { createPortal } from 'react-dom';

const Modal = ({open, onClose, ...props }) => {
	const handleClose = () => {
		onClose(false);
	};

	return createPortal(
		open && <div className={styles.overlay} onClick={handleClose}>
			<div
				className={styles.modal}
				onClick={(event) => event.stopPropagation()}
			>
				{props.children}
			</div>
		</div>,
		document.getElementById('root')
	);
};

export default Modal;
