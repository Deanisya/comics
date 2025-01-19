export const ADD_COMICS = 'ADD_COMICS';
export const DELETE_COMICS = 'DELETE_COMICS';
export const LOAD_COMICS = 'LOAD_COMICS';
export const SORT_COMICS = 'SORT_COMICS';

export const deleteComicsAction = index => {
	return {
		type: DELETE_COMICS,
		payload: index,
	};
};
export const addComicsAction = obj => {
	return {
		type: ADD_COMICS,
		payload: obj,
	};
};
export const sortComicsAction = sortOption => {
	return {
		type: SORT_COMICS,
		payload: sortOption,
	};
};

export const loadComicsAction = () => {
	return dispatch => {
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
				console.log(arr);
				dispatch({
					type: LOAD_COMICS,
					payload: arr,
				});
			});
	};
}; // можно передать вторым параметром функцию геттер getState
