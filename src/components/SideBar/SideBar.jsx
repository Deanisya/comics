import React, { useEffect } from 'react';
import style from './SideBar.module.css';
import Blur from '../Blur/Blur';
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';

function SideBar() {
	const isSideBarOpen = useSelector(state => state.comicsCart.isSideBarOpen);

	useEffect(() => {
		if (isSideBarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	return (
		<>
			{isSideBarOpen && <Blur />}
			<div className={`${style.openSideBar} ${isSideBarOpen ? style.open : ''}`}>
				<Cart />
			</div>
		</>
	);
}

export default SideBar;
