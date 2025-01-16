import React from 'react';
import useCounter from '../../hooks/useCounter';
import styles from './Counter.module.css';

function Counter({ setIsAddCart, onClick }) {
	let { count, add, subtract } = useCounter(1);

	const handleSubtract = () => {
		if (count === 1) {
			setIsAddCart(false);
		} else {
			subtract();
		}
	};

	const handleAdd = () => {
		add();
		onClick();
	};

	return (
		<div className={styles.counter}>
			<button onClick={handleSubtract}>-</button>
			<div className={styles.count}>{count}</div>
			<button onClick={handleAdd}>+</button>
		</div>
	);
}

export default Counter;
