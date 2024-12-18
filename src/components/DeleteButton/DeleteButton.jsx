import React from 'react';
import style from './DeleteButton.module.css';

function DeleteButton(props) {
	return (
		<button className={style.deleteBtn} onClick={props.onClick}>
			{props.title}
		</button>
	);
}

export default DeleteButton;
