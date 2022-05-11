const initState = {
	isAuth: false,
};

const authReducer = (state = initState, { action, payload }) => {
	switch (action) {
		case 'LOGIN_TRUE':
			return {
				isAuth: true,
				...state,
			};
		default:
			return {
				...state,
			};
	}
};

export default authReducer;
