import React from 'react';
import { useSelector } from 'react-redux';
import s from './TotalSum.module.css';

function TotalSum() {
	const totalSum = useSelector(state => {
		return Object.values(state.comicsCart.items).reduce((sum, item) => {
			return sum + item.quantity * item.price;
		}, 0);
	});

	return (
		<div>
			<p className={s.totalSum}>Общая сумма: {totalSum} $</p>
		</div>
	);
}

export default TotalSum;
