import Header from 'components/Header/Header';
import Dashboard from 'pages/Dashboard/Dashboard';
import Login from 'pages/Login/Login';
import SingleView from 'pages/SingleView/SingleView';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { checkLogin } from 'utils/checkLogin';

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		setIsLoggedIn(checkLogin());
	}, []);

	return (
		<>
			<Header />

			<Routes>
				{!isLoggedIn ? (
					<Route path="/" element={<Login />} />
				) : (
					<>
						<Route path="/*" element={<Dashboard />} />
						<Route path="/details/:id" element={<SingleView />} />
					</>
				)}
			</Routes>
		</>
	);
}

export default App;
