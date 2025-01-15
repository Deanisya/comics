import React, { useState } from 'react';
import style from './SideBar.module.css';
import Blur from '../Blur/Blur';

function SideBar({ openSideBar, setOpenSideBar }) {
	return (
		<div>
			{openSideBar && <Blur setOpenSideBar={setOpenSideBar} openSideBar={openSideBar} />}
			<div className={`${style.openSideBar} ${openSideBar ? style.open : ''}`}>я корзина зина</div>;
		</div>
	);
}

export default SideBar;
