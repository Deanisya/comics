import React from 'react';
import style from './ComicsItem.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddToCartButton from '../common/AddToCartButton/AddToCartButton';
import Counter from '../common/Counter/Counter';
import { useSelector } from 'react-redux';

function ComicsItem({ item, deleteComicsItem }) {
	let { name, link_url, img_src, rating, premiered, desc, id, price } = item;

	const items = useSelector(state => state.comicsCart.items);
	const isInCart = items[id]?.quantity > 0;

	return (
		<div key={id} className={style.comicsItem}>
			<img src={img_src} />
			<a href={link_url}>{name}</a>
			<p className={style.heading}>Premier: {premiered}</p>
			<p className={style.rating}>Rating: {rating}</p>
			<p className={style.price}>Price: {price} $</p>
			<p className={style.desc}>{desc.replace(/<\/?[a-zA-Z]+>/gi, '')}</p>
			<DeleteButton title='Удалить' onClick={deleteComicsItem} />

			{isInCart ? <Counter id={id} /> : <AddToCartButton product={item} />}
		</div>
	);
}

export default ComicsItem;
