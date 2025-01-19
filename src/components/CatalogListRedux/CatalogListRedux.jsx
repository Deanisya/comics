import { useEffect, useState } from 'react';
import ComicsItem from '../ComicsItem/ComicsItem';
import style from './CatalogListRedux.module.css';
import MyModal from '../MyModal/MyModal';
import FormComics from '../FormComics/FormComics';
import { useDispatch, useSelector } from 'react-redux';
import { addComicsAction, deleteComicsAction, loadComicsAction } from '../../store/actions/catalogComicsActions';
import Filter from '../Filter/Filter';

function CatalogListRedux() {
	const [isModal, setIsModal] = useState(false);
	let comics = useSelector(state => state.catalogComics.comics);
	// const comics = useSelector(state => state.catalogComics.sortedComics);

	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadComicsAction());
	}, [dispatch]);

	const getRandomPrice = (comicId, min, max) => {
		const savedPrices = JSON.parse(localStorage.getItem('comicPrices')) || {}; // Получаем все сохранённые цены
		if (savedPrices[comicId]) {
			return savedPrices[comicId]; // Возвращаем существующую цену для конкретного комикса
		}
		const newPrice = parseFloat((Math.random() * (max - min) + min).toFixed(0)); // Генерируем новую случайную цену
		console.log(newPrice);

		savedPrices[comicId] = newPrice; // Сохраняем цену по уникальному ID
		localStorage.setItem('comicPrices', JSON.stringify(savedPrices)); // Обновляем localStorage
		return newPrice;
	};

	return (
		<>
			<Filter />
			<button className={style.addBtn} onClick={() => setIsModal(true)}>
				Create new comics
			</button>
			<div className={style.CatalogList}>
				{comics.map((item, i) => {
					const price = getRandomPrice(item.id, 100, 1000);
					return <ComicsItem price={price} item={{ ...item, price }} index={i} key={item.id} deleteComicsItem={() => dispatch(deleteComicsAction(i))} />;
				})}
			</div>
			<MyModal title='Add comics' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormComics addComics={obj => dispatch(addComicsAction(obj))} closeModal={() => setIsModal(false)} />
			</MyModal>
		</>
	);
}

export default CatalogListRedux;
