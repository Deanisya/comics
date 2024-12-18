import React from 'react';
import style from './ComicsItem.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';

function ComicsItem(props) {
	let { name, link_url, img_src, rating, premiered, desc, id } = props.item;
	return (
		<div className={style.comicsItem}>
			<img src={img_src} />
			<a href={link_url}>{name}</a>
			<p className={style.heading}>Premier: {premiered}</p>
			<p>Rating: {rating}</p>
			<p className={style.desc}>{desc.replace(/<\/?[a-zA-Z]+>/gi, '')}</p>
			<DeleteButton title='Удалить' onClick={props.deleteComicsItem} />
		</div>
	);
}

export default ComicsItem;
