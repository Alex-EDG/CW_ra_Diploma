import CatalogComponent from '../layouts/CatalogComponent';
import PageLayout from '../layouts/PageLayout';
import { selectCategory } from '../store/CategoriesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function Catalog() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectCategory({ currCategory: 0 }));
  }, [ dispatch ]);

	return (
		<PageLayout>
			<CatalogComponent searchInput />
		</PageLayout>
	);
};
