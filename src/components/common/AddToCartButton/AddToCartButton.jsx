import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/reducers/comicsCartReducer';
import s from './AddToCartButton.module.css';
const AddToCartButton = ({ product }) => {
	const dispatch = useDispatch();
	// console.log(`Продукт: ${product}`);

	const handleAddToCart = () => {
		dispatch(addItem(product));
	};

	return (
		<button onClick={handleAddToCart} className={s.addToCartButton}>
			Add in cart
		</button>
	);
};

export default AddToCartButton;
