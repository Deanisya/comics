import React from 'react';
import { useSelector } from 'react-redux';
import styles from './CartIcon.module.css';

const CartIcon = () => {
	const totalQuantity = useSelector(state => state.comicsCart.totalQuantity);
	return <>{totalQuantity > 0 && <span className={styles.CartIcon}>{totalQuantity}</span>}</>;
};

export default CartIcon;
