import React from 'react';
import useCounter from '../../hooks/useCounter';
import styles from './Counter.module.css';

function Counter({ setCountCurt, setIsAddCart }) {
	let { count, add, subtract } = useCounter(1);

	const handleSubtract = () => {
		if (count === 1) {
			setIsAddCart(false);
			setCountCurt(0);
		} else {
			subtract();
			setCountCurt(count - 1);
		}
	};

	const handleAdd = () => {
		add();
		setCountCurt(count + 1);
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
