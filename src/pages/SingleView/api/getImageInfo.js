import { baseUrl } from 'config/baseUrl';

export const getImageInfo = (id) => {
	return fetch(`${baseUrl}/id/${id}/info`);
};
