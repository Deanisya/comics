import React, { useState } from 'react';

const useCounter = (defaultCount = 0) => {
	const [count, setCount] = useState(defaultCount);

	return {
		count,
		add: () => setCount(count + 1),
		subtract: () => {
			if (count > 1) {
				setCount(count - 1);
			}
		},
	};
};

export default useCounter;
