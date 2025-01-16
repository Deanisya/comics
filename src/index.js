import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { reducers } from './store/reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk)); // создание хранилища и передача редьюсеров
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
window.store = store;
