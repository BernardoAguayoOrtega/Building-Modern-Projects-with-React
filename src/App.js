// import todo list
import TodoList from './todos/TodoList';
// import hot loader
import { hot } from 'react-hot-loader';
// import styles
import './App.css';

const App = () => (
	<div className='app'>
		<TodoList />
	</div>
);

export default hot(module)(App);
