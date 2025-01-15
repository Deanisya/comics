import { useEffect, useState } from 'react';
import './App.css';
// import CatalogList from './components/CatalogList/CatalogList';
import LogInLogOut from './components/LogInLogOut/LogInLogOut';
import { AuthContext } from './Context';
import CatalogListRedux from './components/CatalogListRedux/CatalogListRedux';
import NavBar from './components/NavBar/NavBar';
import SectionContainer from './components/SectionContainer/SectionContainer';
import SideBar from './components/SideBar/SideBar';

function App() {
	const [user, setUser] = useState('');
	const [countCurt, setCountCurt] = useState(0);
	const [openSideBar, setOpenSideBar] = useState(false);

	useEffect(() => {
		if (openSideBar) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	return (
		<AuthContext.Provider
			value={{
				setUser: obj => setUser(obj),
			}}
		>
			<div className='App'>
				{user && <p>Hi, {user.login}</p>}

				<NavBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} countCurt={countCurt} />
				<SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
				<LogInLogOut />
				<SectionContainer>
					<CatalogListRedux setCountCurt={setCountCurt} />
				</SectionContainer>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
