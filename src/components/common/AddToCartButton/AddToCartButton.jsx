import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../../store/reducers/comicsCartReducer';

const AddToCartButton = ({ product }) => {
	const dispatch = useDispatch();

	const handleAddToCart = () => {
		dispatch(addItem(product));
	};

	return <button onClick={handleAddToCart}>Добавить в корзину</button>;
};

export default AddToCartButton;
