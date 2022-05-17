import { combineReducers } from '@reduxjs/toolkit';
import { libraryReducer } from './library/reducer';

const rootReducer = combineReducers({
	library: libraryReducer,
});

export default rootReducer;
