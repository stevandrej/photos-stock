export const checkLogin = () => {
	if (localStorage.getItem('token') === '1234') return true;
	else return false;
};
