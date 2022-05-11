export const getImageInfo = (id) => {
	return fetch(`${process.env.REACT_APP_BASEURL}/id/${id}/info`);
};
