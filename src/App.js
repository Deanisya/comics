import { useState } from 'react';
import './App.css';
import CatalogList from './components/CatalogList/CatalogList';
import LogInLogOut from './components/LogInLogOut/LogInLogOut';
import { AuthContext } from './Context';

function App() {
	const [user, setUser] = useState('');

	return (
		<AuthContext.Provider
			value={{
				setUser: obj => setUser(obj),
			}}
		>
			<div className='App'>
				{user && <p>Hi, {user.login}</p>}
				<LogInLogOut />
				<CatalogList />
			</div>
		</AuthContext.Provider>
	);
}

export default App;
