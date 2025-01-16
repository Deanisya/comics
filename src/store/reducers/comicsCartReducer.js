import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/comicsCartAction';

const initialState = {
	goods: [],
};

export const comicsCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			// проверяем есть ли данный товар в корзине
			const existingItemIndex = state.goods.findIndex(good => good.id === action.payload.id);
			if (existingItemIndex !== -1) {
				// если товар уже есть то увеличиваем количество
				const updatedGoods = [...state.goods];
				updatedGoods[existingItemIndex].quantity += action.payload.quantity;
				return { ...state, goods: updatedGoods };
			}
			// если товара нет то добавляем его в корзину
			return { ...state, goods: [...state.goods, { ...action.payload, quantity: action.payload.quantity || 1 }] };
		case REMOVE_FROM_CART:
			return { ...state, goods: state.goods.filter(good => good.id !== action.payload) };
		default:
			return state;
	}
};
