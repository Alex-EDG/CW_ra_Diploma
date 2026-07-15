import { Env } from '@humanwhocodes/env';
import {
	loadingHits,
	loadingHitsSuccess,
	loadingHitsError,
	setNothing
} from '../HitsSlice';

const env = new Env();

export const FetchHintsThunk = () => async (dispatch, getState) => {
	const url = `${env.get('APP_BASE_URL', 'http://localhost:7075')}/api/top-sales`;
	dispatch(loadingHits());

	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Failed to fetch');
		};
		const data = await response.json();

		if (data.length === 0) {
			dispatch(setNothing(true));
		} else {
			dispatch(loadingHitsSuccess({ hits: data }));
		};
	} catch (error) {
		dispatch(loadingHitsError({ error: 'Failed to fetch' }));
	};
};
