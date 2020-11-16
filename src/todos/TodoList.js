// import todo list from
import NewTodoForm from './NewTodoForm';
// import todo list item
import TodoListItem from './TodoListItem';
// connect component
import { connect } from 'react-redux';
// import action creator
import { removeTodo } from './actions';
// import styles
import './TodoList.css';

// todo list component
const TodoList = ({ todos = [], onRemovedPress }) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo, key) => (
			<TodoListItem key={key} todo={todo} onRemovedPress={onRemovedPress} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onRemovedPress: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
