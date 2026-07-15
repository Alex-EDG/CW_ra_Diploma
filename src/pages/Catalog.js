import CatalogComponent from '../layouts/CatalogComponent';
import PageLayout from '../layouts/PageLayout';

export default function Catalog() {
	return (
		<PageLayout>
			<CatalogComponent searchInput />
		</PageLayout>
	);
};
