import React from 'react';
import styles from './Blur.module.css';

import { useDispatch } from 'react-redux';
import { closeSideBar } from '../../store/reducers/comicsCartReducer';

function Blur() {
	const dispatch = useDispatch();

	const handleCloseSideBar = () => {
		dispatch(closeSideBar());
	};

	return <div onClick={handleCloseSideBar} className={styles.blurMenu}></div>;
}

export default Blur;
