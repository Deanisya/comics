import './App.css';
import CatalogListRedux from './components/CatalogListRedux/CatalogListRedux';
import NavBar from './components/NavBar/NavBar';
import SectionContainer from './components/SectionContainer/SectionContainer';
import SideBar from './components/SideBar/SideBar';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<SideBar />
			<SectionContainer>
				<CatalogListRedux />
			</SectionContainer>
		</div>
	);
}

export default App;
