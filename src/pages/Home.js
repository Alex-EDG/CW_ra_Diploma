import { useSelector, useDispatch } from 'react-redux';
import Hits from '../layouts/Hits';
import PageLayout from '../layouts/PageLayout';
import CatalogComponent from '../layouts/CatalogComponent';
import { selectCategory } from '../store/CategoriesSlice';
import { useEffect } from 'react';
import { changeSearch } from '../store/CardsSlice';

export default function Home() {
	const { nothing } = useSelector(state => state.hits);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(changeSearch({ search: '' }));
    dispatch(selectCategory({ currCategory: 0 }));
	}, [ dispatch ]);

	return (
		<PageLayout>
			{!nothing && <Hits />}
			<CatalogComponent />
		</PageLayout>
	);
};
