import Button from 'components/Button/Button';
import Container from 'components/Layout/Container/Container';
import { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { checkLogin } from 'utils/checkLogin';
import { formatClasses } from 'utils/formatClasses';
import styles from './Header.module.css';

const Header = () => {
	const navigate = useNavigate();
	const albums = useSelector((state) => state.library.albums);
	const [dropDownOpen, setDropDownOpen] = useState(false);

	const dropdownClasses = formatClasses([
		styles.DropDown,
		dropDownOpen ? styles.active : null,
	]);

	const toggleDropDown = () => {
		setDropDownOpen(!dropDownOpen);
	};

	const handleAlbumOpen = useCallback(
		(id) => {
			navigate(`/album/${id}`);
		},
		[navigate]
	);

	const renderDropDown = useMemo(() => {
		return albums.length !== 0 ? (
			albums.map((album) => (
				<li
					key={`dropdown-${album.id}`}
					onClick={() => {
						handleAlbumOpen(album.id);
					}}
				>
					{album.name}
				</li>
			))
		) : (
			<li>Album list is empty</li>
		);
	}, [albums, handleAlbumOpen]);

	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerContent}>
					<div className={styles.headerTitle}>Photos stock</div>

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
									{renderDropDown}
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
