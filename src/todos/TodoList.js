// import todo list from
import NewTodoForm from './NewTodoForm';
// import todo list item
import TodoListItem from './TodoListItem';

// todo list component
const TodoList = ({ todos = [] }) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo, key) => (
			<TodoListItem key={key} todo={todo} />
		))}
	</div>
);

export default TodoList;
