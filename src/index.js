import ReactDOM from 'react-dom/client';
import './app/styles/style.css';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
