import React, { useState } from 'react';

const useInput = (defaultVal = '') => {
	const [value, setValue] = useState(defaultVal);

	const onChange = event => {
		setValue(event.target.value);
	};
	return {
		value: value,
		onChange,
	};
};

export default useInput;
