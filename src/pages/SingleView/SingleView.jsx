import Button from 'components/Button/Button';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getImageInfo } from './api/getImageInfo';
import Container from 'components/Layout/Container/Container';
import Row from 'components/Layout/Row/Row';
import Section from 'components/Layout/Section/Section';
import Modal from 'components/Modal/Modal';
import AddToAlbum from 'components/AddToAlbum/AddToAlbum';
import { baseUrl } from 'config/baseUrl';

const SingleView = () => {
	let navigate = useNavigate();
	let { id } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		if (id) {
			getImageInfo(id)
				.then((response) => response.json())
				.then((result) => {
					setData(result);
					setLoading(false);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [id]);

	const handleDownload = async () => {
		const imageUrl = await fetch(data.download_url);
		const imageBlob = await imageUrl.blob();
		const image = URL.createObjectURL(imageBlob);

		const link = document.createElement('a');
		link.href = image;
		link.download = id;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return loading ? (
		<div>Loading...</div>
	) : data ? (
		<>
			<Modal open={modalOpen} onClose={setModalOpen}>
				<AddToAlbum
					handleClose={() => {
						setModalOpen(false);
					}}
					image={id}
				/>
			</Modal>
			<Container alignMiddle>
				<Section>
					<Row style={{ gap: 30 }}>
						<Button
							variant="secondary"
							onClick={() => {
								setModalOpen(true);
							}}
						>
							Add to Album +
						</Button>
						<Button variant="primary" onClick={handleDownload}>
							Download
						</Button>
					</Row>
				</Section>
				<Section component="main">
					<Row>
						<img
							src={`${baseUrl}/id/${id}/1024/500`}
							alt={data.author}
						/>
					</Row>
				</Section>
				<Section>
					<Row justifyCenter>Uploaded by</Row>
					<Row justifyCenter>
						<h2>{data.author}</h2>
					</Row>
					<Row justifyCenter style={{ marginTop: 20, gap: 20 }}>
						<Button
							variant="secondary"
							onClick={() => {
								navigate('/');
							}}
						>
							Go Back
						</Button>
					</Row>
				</Section>
			</Container>
		</>
	) : (
		<div>No data...</div>
	);
};

export default SingleView;
