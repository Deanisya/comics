import React, { useEffect, useState } from 'react';
import ComicsItem from '../ComicsItem/ComicsItem';
import style from './CatalogList.module.css';

function CatalogList(props) {
	const [comics, setComics] = useState([]);

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

	return (
		<div className={style.CatalogList}>
			{comics.map((item, i) => {
				return (
					<ComicsItem item={item} index={i} key={item.id}>
						<button className={style.deleteBtn} onClick={() => deleteComicsItem(i)}>
							DELETE
						</button>
					</ComicsItem>
				);
			})}
		</div>
	);
}

export default CatalogList;
