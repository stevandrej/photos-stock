import Button from 'components/Button/Button';
import Container from 'components/Container/Container';
import { checkLogin } from 'utils/checkLogin';
import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container style={{ margin: 'auto' }}>
				<div className={styles.headerContent}>
					<div className={styles.headerTitle}>valstock</div>

					{checkLogin() && (
						<div className={styles.headerButton}>
							<Button variant="primary" outlined={true}>
								My Album
							</Button>
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
