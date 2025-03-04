import React, { useEffect } from 'react';
import useInput from '../../hooks/useInput';
import useAuth from '../../hooks/useAuth';

function FormLogIn({ closeModal, setIsLoginTrue }) {
	let login = useInput('');
	let pass = useInput('');

	let { res, error, auth } = useAuth();

	const handlerLogin = e => {
		e.preventDefault();
		// console.log(login.value);
		// console.log(pass.value);
		auth(login.value, pass.value);
	};

	useEffect(() => {
		if (res) {
			closeModal();
			setIsLoginTrue();
		}
	}, [res]);

	return (
		<div>
			<p>Login: admin, Password: 123</p>
			<form>
				<label>
					Login:
					<br />
					<input type='text' placeholder='Enter email...' {...login} />
				</label>
				<label>
					<br />
					Password:
					<br />
					<input type='password' {...pass} />
				</label>
				<br />
				<button onClick={handlerLogin}>Log In</button>
				<br />
				{res && <p>{JSON.stringify(res)}</p>}
				{error && <p style={{ color: 'red' }}>{error}</p>}
			</form>
		</div>
	);
}

export default FormLogIn;
