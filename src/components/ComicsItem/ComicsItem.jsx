import React, { useState } from 'react';
import style from './ComicsItem.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddInCurt from '../AddInCurt/AddInCurt';
import Counter from '../Counter/Counter';

function ComicsItem(props) {
	let { name, link_url, img_src, rating, premiered, desc, id, price } = props.item;

	const [isAddCart, setIsAddCart] = useState(false);

	const addCart = () => {
		setIsAddCart(!isAddCart);
		props.setCountCurt(1);
	};

	return (
		<div key={id} className={style.comicsItem}>
			<img src={img_src} />
			<a href={link_url}>{name}</a>
			<p className={style.heading}>Premier: {premiered}</p>
			<p className={style.rating}>Rating: {rating}</p>
			<p className={style.price}>Price: {price} $</p>
			<p className={style.desc}>{desc.replace(/<\/?[a-zA-Z]+>/gi, '')}</p>
			<DeleteButton title='Удалить' onClick={props.deleteComicsItem} />
			{isAddCart ? <Counter setCountCurt={props.setCountCurt} addCart={addCart} setIsAddCart={setIsAddCart} /> : <AddInCurt onClick={addCart} />}
		</div>
	);
}

export default ComicsItem;
