import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getImageInfo } from './api/getImageInfo';

const SingleView = () => {
	let navigate = useNavigate();
	let { id } = useParams();
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

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

	return loading ? (
		<div>Loading...</div>
	) : data ? (
		<>
			<h2>{data.author}</h2>
			<div>
				<button>Add to Album</button>
				<button>Download</button>
			</div>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<img
					src={`${process.env.REACT_APP_BASEURL}/id/${id}/200/300`}
					alt={data.author}
				/>
			</div>
			<div>Detailed info</div>
			<button
				onClick={() => {
					navigate('/');
				}}
			>
				Go Back
			</button>
		</>
	) : (
		<div>No data...</div>
	);
};

export default SingleView;
