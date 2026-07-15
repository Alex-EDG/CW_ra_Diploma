import { Env } from '@humanwhocodes/env';
import {
	loadingCart,
	loadingCartFailed,
	loadingCartSuccess,
	resetCart
} from '../CartSlice';

const env = new Env();

export const FetchCartThunk = body => async (dispatch, getState) => {
	const url = `${env.get('APP_BASE_URL', 'http://localhost:7075')}/api/order`;
	dispatch(loadingCart());

	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
		});

		if (!response.ok) {
			throw new Error('Failed to fetch');
		};

		localStorage.setItem('phone', encodeURIComponent(body.owner.phone));
		localStorage.setItem('address', encodeURIComponent(body.owner.address));

		dispatch(loadingCartSuccess({ response: response.status }));
		dispatch(resetCart());
	} catch (error) {
		dispatch(loadingCartFailed({ error: 'Failed to fetch' }));
	};
};
