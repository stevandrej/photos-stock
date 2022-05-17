import Button from 'components/Button/Button';
import Container from 'components/Layout/Container/Container';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { checkLogin } from 'utils/checkLogin';
import { formatClasses } from 'utils/formatClasses';
import styles from './Header.module.css';

const Header = () => {
	const albums = useSelector((state) => state.library.albums);
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const dropdownClasses = formatClasses([
		styles.DropDown,
		dropDownOpen ? styles.active : null,
	]);

	const toggleDropDown = () => {
		setDropDownOpen(!dropDownOpen);
	};

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerContent}>
					<div className={styles.headerTitle}>valstock</div>

					{checkLogin() && (
						<div className={styles.headerButton}>
							<div className={styles.ButtonWrapper}>
								<Button
									variant="primary"
									outlined={true}
									onClick={toggleDropDown}
								>
									My Album
								</Button>
								<ul className={dropdownClasses}>
									{albums.map((album) => (
										<li key={`dropdown-${album.id}`}>
											{album.name}
										</li>
									))}
								</ul>
							</div>
						</div>
					)}
				</div>
			</Container>
		</header>
	);
};

export default Header;
