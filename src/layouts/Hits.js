import { useSelector, useDispatch } from 'react-redux';
import PreLoader from '../ui/Preloader';
import { useEffect } from 'react';
import { FetchHintsThunk } from '../store/thunks/FetchHintsThunk';
import Card from '../components/Card';
import ErrorRetry from '../ui/ErrorRetry';

export default function Hits() {
	const { hits, loading, error } = useSelector(state => state.hits);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(FetchHintsThunk());
	}, [ dispatch ]);

	return (
		<section className="top-sales">
			<h2 className="text-center">Хиты продаж!</h2>
			{loading && <PreLoader />}
			{error ? (
				<ErrorRetry retry={FetchHintsThunk} />
			) : (
				hits && (
					<div className="row">
						{hits?.map(hit => (
							<Card {...hit} key={hit.id} hit />
						))}
					</div>
				)
			)}
		</section>
	);
};
