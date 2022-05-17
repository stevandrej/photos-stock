import Button from 'components/Button/Button';
import InputTextField from 'components/InputTextField/InputTextField';
import Row from 'components/Layout/Row/Row';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToAlbum, createAlbum } from 'redux/library/actions';

const AddToAlbum = ({ handleClose, albumId, image, ...props }) => {
	const dispatch = useDispatch();
	const albums = useSelector((state) => state.library.albums);
	const [albumName, setAlbumName] = useState('');
	const [saveType, setSaveType] = useState('NEW');
	const [selectedExistingAlbums, setSelectedExistingAlbums] = useState([]);

	useEffect(() => {
		const close = (e) => {
			if (e.keyCode === 27) {
				handleClose();
			}
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	});

	const handleSelectedExistingAlbums = (event) => {
		event.target.checked
			? setSelectedExistingAlbums([
					...selectedExistingAlbums,
					event.target.value,
			  ])
			: setSelectedExistingAlbums(
					selectedExistingAlbums.filter((item) => {
						return item !== event.target.value;
					})
			  );
	};

	const handleSave = () => {
		switch (saveType) {
			case 'NEW': {
				dispatch(createAlbum(albumName));
				dispatch(addToAlbum(albums.length, image));
				handleClose();
				break;
			}
			case 'EXISTING': {
				let targetedAlbumIndex = [];
				albums.forEach((album, index) => {
					selectedExistingAlbums.forEach((selectedAlbumId) => {
						if (album.id === selectedAlbumId) {
							targetedAlbumIndex.push(index);
						}
					});
				});
				dispatch(addToAlbum(targetedAlbumIndex, image));
				handleClose();
				break;
			}
			default:
				break;
		}
	};

	return (
		<div
			style={{
				minWidth: 350,
				minHeight: 350,
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Row
				style={{
					justifyContent: 'space-evenly',
					marginBottom: 20,
					gap: 20,
				}}
			>
				{/* Create New Album */}
				<Button variant="secondary" onClick={() => setSaveType('NEW')}>
					Create new album
				</Button>
				{/* Existing album */}
				<Button
					variant="secondary"
					onClick={() => setSaveType('EXISTING')}
				>
					Add to existing
				</Button>
			</Row>
			<Row justifyCenter style={{ marginBottom: 20 }}>
				{saveType === 'NEW' ? (
					<InputTextField
						id="album-name"
						value={albumName}
						onChange={(e) => {
							setAlbumName(e.target.value);
						}}
					/>
				) : (
					<div>
						{albums.map((item, index) => (
							<Row key={`${item.id}-${index}`}>
								<input
									type="checkbox"
									id={`selectAlbum-${item.id}`}
									name={item.id}
									value={item.id}
									onChange={handleSelectedExistingAlbums}
								/>
								<label htmlFor={`selectAlbum-${item.id}`}>
									{item.name}
								</label>
							</Row>
						))}
					</div>
				)}
			</Row>
			<Row style={{ justifyContent: 'space-evenly', marginBottom: 20 }}>
				<Button variant="secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button onClick={handleSave}>Save</Button>
			</Row>
		</div>
	);
};

export default AddToAlbum;
