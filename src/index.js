import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { configureStore } from './store';
import App from './App.js';

const root = document.getElementById('root');

const store = configureStore();

const persistor = persistStore(store);

render(
	<Provider store={store}>
		<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	root,
);
