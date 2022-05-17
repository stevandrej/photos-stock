import { useEffect, useState } from 'react';
import { getImages } from './api/getImages';
import { parseLinkHeader } from 'utils/parseLinkHeader';
import { useNavigate } from 'react-router-dom';
import Container from 'components/Layout/Container/Container';
import Section from 'components/Layout/Section/Section';
import Row from 'components/Layout/Row/Row';
import Button from 'components/Button/Button';
import { baseUrl } from 'config/baseUrl';

const Dashboard = () => {
	let navigate = useNavigate();
	const [data, setData] = useState([]);
	const [pagination, setPagination] = useState(null);

	useEffect(() => {
		//Get data
		getImages()
			.then((response) => {
				setPagination(parseLinkHeader(response.headers.get('Link')));
				return response.json();
			})
			.then((images) => {
				setData(images);
			});
	}, []);

	//Navigate to detailed page
	const handleImgClick = (id) => {
		navigate(`/details/${id}`);
	};

	//Load more
	const handleLoadMore = () => {
		fetch(pagination.next)
			.then((response) => {
				setPagination(parseLinkHeader(response.headers.get('Link')));
				return response.json();
			})
			.then((result) => {
				setData([...data, ...result]);
			});
	};

	return (
		<Container alignMiddle>
			<Section>
				<Row justifyCenter style={{ gap: 10 }}>
					{data.map((item) => (
						<picture
							key={`image-${item.id}`}
							style={{ display: 'inline-block' }}
						>
							<img
								src={`${baseUrl}/id/${item.id}/248/300`}
								width={248}
								height={300}
								alt={`${item.id}`}
								loading="lazy"
								decoding="async"
								style={{
									contentVisibility: 'auto',
									objectFit: 'cover',
									cursor: 'pointer',
								}}
								onClick={() => handleImgClick(item.id)}
							/>
						</picture>
					))}
				</Row>
			</Section>
			<Section>
				<Row justifyCenter>
					<Button variant="secondary" onClick={handleLoadMore}>
						Load More
					</Button>
				</Row>
			</Section>
		</Container>
	);
};

export default Dashboard;
