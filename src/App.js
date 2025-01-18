import { useEffect, useState } from 'react';
import './App.css';
// import CatalogList from './components/CatalogList/CatalogList';
import LogInLogOut from './components/LogInLogOut/LogInLogOut';
import CatalogListRedux from './components/CatalogListRedux/CatalogListRedux';
import NavBar from './components/NavBar/NavBar';
import SectionContainer from './components/SectionContainer/SectionContainer';
import SideBar from './components/SideBar/SideBar';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<SideBar />
			<LogInLogOut />
			<SectionContainer>
				<CatalogListRedux />
			</SectionContainer>
		</div>
	);
}

export default App;
