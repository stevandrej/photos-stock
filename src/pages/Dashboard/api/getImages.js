import { baseUrl } from "config/baseUrl";

export const getImages = (page = 1) => {
	return fetch(`${baseUrl}/v2/list?page=${page}&limit=30`)
};
