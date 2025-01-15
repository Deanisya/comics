import React from 'react';
import styles from './Blur.module.css';

function Blur({ setOpenSideBar, openSideBar }) {
	return <div onClick={() => setOpenSideBar(!openSideBar)} className={styles.blurMenu}></div>;
}

export default Blur;
