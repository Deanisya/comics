import React from 'react';
import styles from './AddInCurt.module.css';

function AddInCurt({ onClick }) {
	return (
		<div>
			<button className={styles.button} onClick={onClick}>
				Add in cart
			</button>
		</div>
	);
}

export default AddInCurt;
