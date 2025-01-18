import React from 'react';
import styles from './Counter.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '../../../store/reducers/comicsCartReducer';

function Counter({ id }) {
	const item = useSelector(state => state.comicsCart.items[id]);
	const dispatch = useDispatch();

	const handleDecrement = () => {
		dispatch(decrementCount({ id }));
	};
	const handleIncrement = () => {
		dispatch(incrementCount({ id }));
	};

	return (
		<div>
			<button onClick={handleDecrement}>-</button>
			<span className={styles.count}>{item.quantity}</span>
			<button onClick={handleIncrement}>+</button>
		</div>
	);
}

export default Counter;
