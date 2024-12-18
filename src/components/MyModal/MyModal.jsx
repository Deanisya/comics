import React from 'react';
import style from './MyModal.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';

function MyModal(props) {
	return (
		<div className={`${style.modal__wrapper} ${props.isModal ? style.open : style.close}`}>
			<div className={style.modal__body}>
				{props.title && <h2>{props.title}</h2>}
				{props.children}
				<DeleteButton title='x' onClick={props.closeModal} />
			</div>
		</div>
	);
}

export default MyModal;
