import { catalogComicsReducer } from './reducers/catalogComicsReducer';
import comicsCartReducer from './reducers/comicsCartReducer';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore(
	{
		reducer: {
			catalogComics: catalogComicsReducer,
			comicsCart: comicsCartReducer,
		},
	},
	applyMiddleware(thunk)
);
window.store = store;
