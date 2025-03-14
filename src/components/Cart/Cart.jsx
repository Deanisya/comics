import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartItems, removeAllItems, removeItem, updateQuantity } from '../../store/reducers/comicsCartReducer';
import Counter from '../common/Counter/Counter';
import TotalSum from './TotalSum/TotalSum';
import s from './Cart.module.css';
const Cart = () => {
	const items = useSelector(state => state.comicsCart.items);
	console.log(items);
	const dispatch = useDispatch();
	useEffect(() => {
		const savedItems = localStorage.getItem('cart');
		if (savedItems) {
			const parsedItems = JSON.parse(savedItems);
			dispatch(loadCartItems(parsedItems));
		}
	}, [dispatch]);

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(items));
	}, [items]);

	const handleRemove = id => {
		dispatch(removeItem(id));
	};

	const handleRemoveAll = () => {
		dispatch(removeAllItems());
	};

	// const handleQuantityChange = (id, quantity) => {
	// 	dispatch(updateQuantity({ id, quantity }));
	// };

	return (
		<div className={s.cartBlock}>
			<h2 style={{ textAlign: 'center', color: 'white' }}>Cart</h2>
			{Object.entries(items).map(([id, item]) => (
				<div key={id} className={s.cart}>
					<h3>{item.name}</h3>
					<p>Price: {item ? item.quantity * item.price : 0} $</p>
					{/* <input type='number' value={item.quantity} min='1' onChange={e => handleQuantityChange(id, +e.target.value)} /> */}
					<Counter item={item} id={id} />
					<button onClick={() => handleRemove(id)}>X</button>
				</div>
			))}
			<TotalSum />
			<button className={s.removeBtn} onClick={handleRemoveAll}>
				Delete All Goods
			</button>
		</div>
	);
};

export default Cart;
