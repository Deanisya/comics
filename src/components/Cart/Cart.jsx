import React from 'react';
import style from './Cart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeComicsInCurtAction } from '../../store/actions/comicsCartAction';

function Cart() {
	const cartGoods = useSelector(state => state.comicsCart.goods);
	const dispatch = useDispatch();

	const handleRemoveFromCart = id => {
		dispatch(removeComicsInCurtAction(id));
	};

	return (
		<div>
			<h2>Я зина корзина</h2>
			{cartGoods.length === 0 ? (
				<p>Зина в отпуске, товаров нет</p>
			) : (
				<ul>
					{cartGoods.map(cartGood => (
						<li key={cartGood.id}>
							{cartGood.name}-{cartGood.price}-{cartGood.quantity}
							<button onClick={() => handleRemoveFromCart(cartGood.id)}>Удалить</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Cart;
