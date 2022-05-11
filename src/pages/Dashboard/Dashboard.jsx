import { useEffect, useState } from 'react';
import { getImages } from './api/getImages';
import { parseLinkHeader } from 'utils/parseLinkHeader';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
	let navigate = useNavigate();
	const [data, setData] = useState([]);
	const [pagination, setPagination] = useState(null);

	useEffect(() => {
		getImages()
			.then((response) => {
				setPagination(parseLinkHeader(response.headers.get('Link')));
				return response.json();
			})
			.then((images) => {
				setData(images);
			});
	}, []);

	const handleImgClick = (id) => {
		navigate(`/details/${id}`);
	};

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
		<>
			{data.map((item) => (
				<picture
					key={`image-${item.id}`}
					style={{ display: 'inline-block' }}
				>
					<img
						src={`${process.env.REACT_APP_BASEURL}/id/${item.id}/200/300`}
						width={200}
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					marginTop: 20,
				}}
			>
				<button onClick={handleLoadMore}>Load More</button>
			</div>
		</>
	);
};

export default Dashboard;
