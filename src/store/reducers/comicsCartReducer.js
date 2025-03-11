import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: {}, // список товаров, где ключ — id товара, значение — { name, price, quantity }
		totalQuantity: 0,
		isSideBarOpen: false,
	},
	reducers: {
		addItem(state, action) {
			const { id, name, price } = action.payload;

			if (state.items[id]) {
				state.items[id].quantity += 1;
				state.totalQuantity += 1;
			} else {
				state.items[id] = { name, price, quantity: 1 };
				state.totalQuantity += 1;
			}
		},
		removeItem(state, action) {
			const id = action.payload;
			if (state.items[id]) {
				state.totalQuantity -= state.items[id].quantity;
				delete state.items[id];
			}
		},
		removeAllItems(state) {
			if (state.items && typeof state.items === 'object') {
				state.items = {};
				state.totalQuantity = 0;
			}
		},
		updateQuantity(state, action) {
			const { id, quantity } = action.payload;
			if (state.items[id]) {
				state.totalQuantity += quantity - state.items[id].quantity;
				state.items[id].quantity = quantity;
			}
		},

		openSideBar(state) {
			state.isSideBarOpen = !state.isSideBarOpen;
		},
		closeSideBar(state) {
			state.isSideBarOpen = false;
		},

		incrementCount(state, action) {
			const { id } = action.payload;
			if (state.items[id]) {
				state.items[id].quantity++;
				state.totalQuantity++;
				state.Sum += state.items[id].price;
			}
		},
		decrementCount(state, action) {
			const { id } = action.payload;
			if (state.items[id] && state.items[id].quantity > 0) {
				state.items[id].quantity--;
				state.totalQuantity--;
				if (state.items[id].quantity === 0) {
					delete state.items[id];
				}
			}
		},
	},
});

export const { addItem, removeItem, updateQuantity, openSideBar, closeSideBar, incrementCount, decrementCount, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
