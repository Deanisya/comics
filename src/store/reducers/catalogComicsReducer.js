// рекомендации по action
// {
//     type: "ADD_COMICS",
//     payload: {} // данные с помощью которых редьюсер делает изменения в сторе
// }
import { ADD_COMICS, DELETE_COMICS, LOAD_COMICS } from '../actions/catalogComicsActions';

// let initialState = {
// 	comics: [],
// 	curt: {},
// };

export const catalogComicsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_COMICS:
			return [...state, action.payload];
		// return { ...state, comics: [...state.comics, action.payload] };
		case DELETE_COMICS:
			return state.filter((el, i) => i !== action.payload);
		// return { ...state, comics: state.comics.filter((el, i) => i !== action.payload) };
		case LOAD_COMICS:
			return action.payload;
		default:
			return state;
	}
};
