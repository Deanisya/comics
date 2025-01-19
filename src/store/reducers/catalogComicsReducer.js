// рекомендации по action
// {
//     type: "ADD_COMICS",
//     payload: {} // данные с помощью которых редьюсер делает изменения в сторе
// }
// import { ADD_COMICS, DELETE_COMICS, LOAD_COMICS } from '../actions/catalogComicsActions';

// export const catalogComicsReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case ADD_COMICS:
// 			return [...state, action.payload];
// 		case DELETE_COMICS:
// 			return state.filter((el, i) => i !== action.payload);
// 		case LOAD_COMICS:
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

import { ADD_COMICS, DELETE_COMICS, LOAD_COMICS, SORT_COMICS } from '../actions/catalogComicsActions';

const initialState = {
	comics: [],
	sortOption: 'all', // Храним текущую выбранную опцию сортировки
};

export const catalogComicsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COMICS:
			return {
				...state,
				comics: [...state.comics, action.payload],
			};
		case DELETE_COMICS:
			return {
				...state,
				comics: state.comics.filter((el, i) => i !== action.payload),
			};
		case LOAD_COMICS:
			return {
				...state,
				comics: action.payload,
			};
		case SORT_COMICS:
			// Применяем сортировку при изменении опции сортировки
			const sortedComics = sortComics(state.comics, action.payload);
			return {
				...state,
				sortOption: action.payload,
				comics: sortedComics,
			};

		default:
			return state;
	}
};

// Функция для сортировки комиксов
const sortComics = (comics, sortOption) => {
	let sortedComics = [...comics]; // Копируем массив, чтобы не мутировать исходный
	switch (sortOption) {
		case 'rating':
			sortedComics.sort((a, b) => b.rating - a.rating); // сортировка по рейтингу
			break;
		case 'date':
			sortedComics.sort((a, b) => new Date(b.premiered) - new Date(a.premiered)); // сортировка по дате
			break;
		case 'increase':
			sortedComics.sort((a, b) => getPriceFromStorage(a.id) - getPriceFromStorage(b.id)); // сортировка по возрастанию цены
			break;
		case 'decrease':
			sortedComics.sort((a, b) => getPriceFromStorage(b.id) - getPriceFromStorage(a.id)); // сортировка по убыванию цены
			break;
		case 'all':
			break;

		default:
			break;
	}
	return sortedComics;
};

const getPriceFromStorage = comicId => {
	const savedPrices = JSON.parse(localStorage.getItem('comicPrices')) || {}; // Получаем все сохранённые цены
	return savedPrices[comicId] || 0; // Возвращаем цену для конкретного комикса или 0, если не найдена
};
