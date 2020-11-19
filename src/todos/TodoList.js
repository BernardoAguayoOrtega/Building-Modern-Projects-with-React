import { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { loadTodos, deleteTodoRequest, updateTodoRequest } from './thunks';
import { getTodos, getTodosLoading } from './selectors';
import './TodoList.css';

// todo list component
const TodoList = ({
	todos = [],
	onRemovedPress,
	isCompleted,
	isLoading,
	startLoadingTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading todos ....</div>;

	const content = (
		<div className='list-wrapper'>
			<NewTodoForm />
			{todos.map((todo, key) => (
				<TodoListItem
					key={key}
					todo={todo}
					onRemovedPress={onRemovedPress}
					isCompleted={isCompleted}
				/>
			))}
		</div>
	);

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	todos: getTodos(state),
	isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
	onRemovedPress: (id) => dispatch(deleteTodoRequest(id)),
	isCompleted: (id) => dispatch(updateTodoRequest(id)),
	onDisplayAlertClick: () => dispatch(displayAlert()),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
