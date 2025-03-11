import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortComicsAction } from '../../store/actions/catalogComicsActions';

function Filter() {
	const dispatch = useDispatch();
	const sortOption = useSelector(state => state.catalogComics.sortOption);
	const handleSortChange = event => {
		dispatch(sortComicsAction(event.target.value));
	};

	return (
		<select value={sortOption} onChange={handleSortChange}>
			<option value='all'>По умолчанию</option>
			<option value='rating'>По рейтингу</option>
			<option value='date'>По дате</option>
			<option value='increase'>По возрастанию цены</option>
			<option value='decrease'>По убыванию цены</option>
		</select>
	);
}

export default Filter;
