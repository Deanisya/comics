import { combineReducers } from 'redux';
import { catalogComicsReducer } from './catalogComicsReducer';

export const reducers = combineReducers({
	catalogComics: catalogComicsReducer,
});
