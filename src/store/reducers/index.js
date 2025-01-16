import { combineReducers } from 'redux';
import { catalogComicsReducer } from './catalogComicsReducer';
import { comicsCartReducer } from './comicsCartReducer';

export const reducers = combineReducers({
	catalogComics: catalogComicsReducer,
	comicsCart: comicsCartReducer,
});
