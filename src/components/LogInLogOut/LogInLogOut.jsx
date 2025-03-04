import { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import FormLogIn from '../FormLogIn/FormLogIn';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

function LogInLogOut() {
	const [isLogin, setIsLogin] = useState(false);
	const [isModal, setIsModal] = useState(false);

	const logIn = () => {
		console.log('Вы вошли');
		setIsModal(true);
	};
	const logOut = () => {
		console.log('Вы вышли');
		setIsLogin(false);
	};

	return (
		<div>
			{isLogin ? (
				<button style={{ background: 'transparent', color: 'white', border: 'none', fontSize: '35px' }} onClick={logOut}>
					<LogoutIcon />
				</button>
			) : (
				<button style={{ background: 'transparent', color: 'white', border: 'none', fontSize: '35px' }} onClick={logIn}>
					<PersonIcon />
				</button>
			)}
			<MyModal title='User authorization' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormLogIn setIsLoginTrue={() => setIsLogin(true)} closeModal={() => setIsModal(false)} />
			</MyModal>
		</div>
	);
}

export default LogInLogOut;
