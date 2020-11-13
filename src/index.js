import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './App.js';

const root = document.getElementById('root');

render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	root,
);
