// рекомендации по action
// {
//     type: "ADD_COMICS",
//     payload: {} // данные с помощью которых редьюсер делает изменения в сторе
// }
import { ADD_COMICS, DELETE_COMICS, LOAD_COMICS, ADD_TO_CART } from '../actions/catalogComicsActions';

// let initialState = {
// 	comics: [],
// 	curt: {},
// };

export const catalogComicsReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_COMICS:
			return [...state, action.payload];
		case DELETE_COMICS:
			return state.filter((el, i) => i !== action.payload);
		case LOAD_COMICS:
			return action.payload;
		case ADD_TO_CART:
			return;
		default:
			return state;
	}
};
