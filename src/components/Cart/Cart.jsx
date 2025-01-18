import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../../store/reducers/comicsCartReducer';
import Counter from '../common/Counter/Counter';
import TotalSum from './TotalSum/TotalSum';

const Cart = () => {
	const items = useSelector(state => state.comicsCart.items);
	console.log(items);
	const dispatch = useDispatch();

	const handleRemove = id => {
		dispatch(removeItem(id));
	};

	// const handleQuantityChange = (id, quantity) => {
	// 	dispatch(updateQuantity({ id, quantity }));
	// };

	return (
		<div>
			<h2>Корзина</h2>
			{Object.entries(items).map(([id, item]) => (
				<div key={id}>
					<h3>{item.name}</h3>
					<p>Цена: {item ? item.quantity * item.price : 0} ₽</p>
					{/* <input type='number' value={item.quantity} min='1' onChange={e => handleQuantityChange(id, +e.target.value)} /> */}
					<Counter item={item} id={id} />
					<button onClick={() => handleRemove(id)}>Удалить</button>
				</div>
			))}
			<br />
			<br />
			<br />
			<br />
			<br />
			<TotalSum />
		</div>
	);
};

export default Cart;
