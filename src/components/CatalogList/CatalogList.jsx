import React, { useEffect, useState } from 'react';
import ComicsItem from '../ComicsItem/ComicsItem';
import style from './CatalogList.module.css';
import MyModal from '../MyModal/MyModal';
import FormComics from '../FormComics/FormComics';

function CatalogList(props) {
	const [comics, setComics] = useState([]);
	const [isModal, setIsModal] = useState(false);

	useEffect(() => {
		fetch('https://api.tvmaze.com/search/shows?q=batman')
			.then(res => res.json())
			.then(data => {
				let arr = data.map(e => ({
					name: e.show.name,
					link_url: e.show.url,
					img_src: e.show.image.original,
					rating: e.show.rating.average,
					premiered: e.show.premiered,
					desc: e.show.summary,
					id: e.show.id,
				}));

				setComics(arr);
			});
	}, []);

	const deleteComicsItem = index => {
		comics.splice(index, 1);
		setComics([...comics]);
	};

	const addComics = obj => {
		// (1) comics.push(obj);
		// setComics([...comics])
		// (2) comics.splice(comics.length, 0 , obj);
		// setComics([...comics])
		// (3)
		setComics([...comics, obj]);
	};

	return (
		<>
			<button className={style.addBtn} onClick={() => setIsModal(true)}>
				Create new comics
			</button>
			<div className={style.CatalogList}>
				{comics.map((item, i) => {
					return <ComicsItem item={item} index={i} key={item.id} deleteComicsItem={() => deleteComicsItem(i)} />;
				})}
			</div>
			<MyModal title='Add comics' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormComics addComics={addComics} closeModal={() => setIsModal(false)} />
			</MyModal>
		</>
	);
}

export default CatalogList;
