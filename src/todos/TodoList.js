import { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { markTodoAsCompleted } from './actions';
import { loadTodos, deleteTodoRequest } from './thunks';
import './TodoList.css';

// todo list component
const TodoList = ({
	todos = [],
	onRemovedPress,
	isCompleted,
	isLoading,
	startLoadingTodos
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
	todos: state.todos,
	isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovedPress: (id) => dispatch(deleteTodoRequest(id)),
	isCompleted: (text) => dispatch(markTodoAsCompleted(text)),
	onDisplayAlertClick: () => dispatch(displayAlert()),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
