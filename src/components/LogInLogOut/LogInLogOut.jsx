import { useState } from 'react';
import MyModal from '../MyModal/MyModal';
import FormLogIn from '../FormLogIn/FormLogIn';

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
		<div style={{ paddingTop: '10vh' }}>
			{isLogin ? <button onClick={logOut}>Log Out</button> : <button onClick={logIn}>Log In</button>}
			<MyModal title='User authorization' isModal={isModal} closeModal={() => setIsModal(false)}>
				<FormLogIn setIsLoginTrue={() => setIsLogin(true)} closeModal={() => setIsModal(false)} />
			</MyModal>
		</div>
	);
}

export default LogInLogOut;
