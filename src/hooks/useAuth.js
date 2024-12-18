import { useState } from 'react';

function useAuth() {
	const [res, setRes] = useState(null);
	const [error, setError] = useState('');

	return {
		res,
		error,
		auth: (login, pass) => {
			if (login === 'admin' && pass === '123') {
				setRes({ login, date: new Date() });
				setError('');
			} else {
				setError('Incorrect data');
				setRes(null);
			}
		},
	};
}

export default useAuth;
