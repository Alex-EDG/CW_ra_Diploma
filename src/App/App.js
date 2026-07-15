import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../layouts/Header';
import Page404 from '../pages/Page404';
import Footer from '../components/Footer';
import About from '../pages/About';
import Contacts from '../pages/Contacts';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import CatalogItem from '../pages/CatalogItem';
import Cart from '../pages/Cart';

function App() {
	return (
		<Router basename="/bosa-noga">
			<Header />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/cart" Component={Cart} />
				<Route path="/catalog/:id" Component={CatalogItem} />
				<Route path="/catalog" Component={Catalog} />
				<Route path="/contacts" Component={Contacts} />
				<Route path="/about" Component={About} />
				<Route path="*" Component={Page404} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
