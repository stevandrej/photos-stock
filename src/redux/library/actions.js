import * as actionTypes from './actionTypes';

export const createAlbum = (albumName) => {
	return {
		type: actionTypes.CREATE_ALBUM,
		payload: albumName,
	};
};

export const addToAlbum = (index, image) => {
	// Convert index to Type ARRAY
	let arrOfIndexes;
	Array.isArray(index) ? (arrOfIndexes = index) : (arrOfIndexes = [index]);
	return {
		type: actionTypes.ADD_TO_ALBUM,
		payload: {
			indexes: arrOfIndexes,
			image,
		},
	};
};

export const removeFromAlbum = (id, image) => {
	return {
		type: actionTypes.REMOVE_FROM_ALBUM,
		payload: {
			id,
			image,
		},
	};
};
