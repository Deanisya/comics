import { useEffect, useState } from 'react';
import './App.css';
// import CatalogList from './components/CatalogList/CatalogList';
import LogInLogOut from './components/LogInLogOut/LogInLogOut';
import CatalogListRedux from './components/CatalogListRedux/CatalogListRedux';
import NavBar from './components/NavBar/NavBar';
import SectionContainer from './components/SectionContainer/SectionContainer';
import SideBar from './components/SideBar/SideBar';

function App() {
	const [openSideBar, setOpenSideBar] = useState(false);

	useEffect(() => {
		if (openSideBar) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	return (
		<div className='App'>
			<NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
			<SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
			<LogInLogOut />
			<SectionContainer>
				<CatalogListRedux />
			</SectionContainer>
		</div>
	);
}

export default App;
