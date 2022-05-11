export const getImages = (page = 1) => {
	return fetch(`${process.env.REACT_APP_BASEURL}/v2/list?page=${page}&limit=30`)
};
