import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(
	rootReducer,
	undefined,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
