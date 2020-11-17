import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, markTodoAsCompleted } from './actions';
import { displayAlert } from './thunks';
import './TodoList.css';

// todo list component
const TodoList = ({
	todos = [],
	onRemovedPress,
	isCompleted,
	onDisplayAlertClick,
}) => (
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

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovedPress: (text) => dispatch(removeTodo(text)),
	isCompleted: (text) => dispatch(markTodoAsCompleted(text)),
	onDisplayAlertClick: () => dispatch(displayAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
