import Container from 'components/Layout/Container/Container';
import Section from 'components/Layout/Section/Section';
import Row from 'components/Layout/Row/Row';
import Button from 'components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { baseUrl } from 'config/baseUrl';
import { useEffect } from 'react';

const Album = () => {
	let navigate = useNavigate();
	const { id } = useParams();
	const album = useSelector((state) =>
		state.library.albums.find((item) => item.id === id)
	);

	useEffect(() => {
		if (album === undefined) navigate('/');
	}, [album, navigate]);

	if (album)
		return (
			<Container alignMiddle>
				<Section>
					<Row justifyCenter>
						<h1>Album Name</h1>
					</Row>
					<Row justifyCenter>Date created: 29th November 2021</Row>
				</Section>
				<Section component="main">
					<Row justifyCenter style={{ gap: 10 }}>
						{album.images.map((image) => (
							<picture
								key={`image-${image}`}
								style={{ display: 'inline-block' }}
							>
								<img
									src={`${baseUrl}/id/${image}/248/300`}
									width={248}
									height={300}
									alt={`${image}`}
									loading="lazy"
									decoding="async"
									style={{
										contentVisibility: 'auto',
										objectFit: 'cover',
									}}
								/>
							</picture>
						))}
					</Row>
				</Section>
				<Section>
					<Row
						style={{
							justifyContent: 'space-evenly',
							marginBottom: 20,
							gap: 20,
						}}
					>
						<Button
							variant="secondary"
							onClick={() => {
								navigate('/');
							}}
						>
							Cancel
						</Button>
						<Button>Save</Button>
					</Row>
				</Section>
			</Container>
		);
};

export default Album;
