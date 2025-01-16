import React, { useState } from 'react';
import style from './ComicsItem.module.css';
import DeleteButton from '../DeleteButton/DeleteButton';
import AddInCurt from '../AddInCurt/AddInCurt';
import Counter from '../Counter/Counter';
import { useDispatch } from 'react-redux';
import { addComicsInCurtAction } from '../../store/actions/comicsCartAction';

function ComicsItem(props) {
	let { name, link_url, img_src, rating, premiered, desc, id, price } = props.item;

	const [isAddCart, setIsAddCart] = useState(false);
	const dispatch = useDispatch();

	const addCart = obj => {
		const cart = {
			...obj,
			quantity: 1,
		};
		dispatch(addComicsInCurtAction(cart));
	};

	const handleAddInCurtClick = () => {
		setIsAddCart(true);
		addCart(props.item);
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
			{isAddCart ? <Counter addCart={addCart} setIsAddCart={setIsAddCart} onClick={() => addCart(props.item)} /> : <AddInCurt onClick={handleAddInCurtClick} />}
		</div>
	);
}

export default ComicsItem;
