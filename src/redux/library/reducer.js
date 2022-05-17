import * as actionTypes from './actionTypes';
import { v4 as uuid } from 'uuid';

const initState = {
	albums: [],
};

export const libraryReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case actionTypes.CREATE_ALBUM: {
			return {
				...state,
				albums: [
					...state.albums,
					{
						id: uuid(),
						name: payload,
						images: [],
					},
				],
			};
		}

		case actionTypes.ADD_TO_ALBUM: {
			let updatedAlbums = [...state.albums];

			payload.indexes.forEach((el) => {
				updatedAlbums[el] = {
					...state.albums[el],
					images: [...new Set([...state.albums[el].images, payload.image])],
				};
			});

			return {
				...state,
				albums: updatedAlbums,
			};
		}

		case actionTypes.REMOVE_FROM_ALBUM: {
			const index = state.albums.findIndex(payload.id);
			const updatedAlbums = state.albums[index].images.filter(
				(img) => img !== payload.image
			);
			return {
				...state,
				albums: updatedAlbums,
			};
		}

		default:
			return state;
	}
};
