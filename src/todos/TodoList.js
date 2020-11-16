// import todo list from
import NewTodoForm from './NewTodoForm';
// import todo list item
import TodoListItem from './TodoListItem';
// connect component
import { connect } from 'react-redux';
// import styles
import './TodoList.css'

// todo list component
const TodoList = ({ todos = [] }) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo, key) => (
			<TodoListItem key={key} todo={todo} />
		))}
	</div>
);

const mapStateToProps = (state) => ({
	todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
