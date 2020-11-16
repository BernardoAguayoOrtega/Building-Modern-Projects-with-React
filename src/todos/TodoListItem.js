// import styles
import './TodoListItem.css';

// todo list item component
const TodoListItem = ({ todo, onRemovedPress, isCompleted }) => (
	<div className={`todo-item-container ${todo.isCompleted && 'disable'}`}>
		<h3>{todo?.text}</h3>
		<div className='button-container'>
			<button
				disabled={todo.isCompleted}
				className='completed-button'
				onClick={() => isCompleted(todo?.text)}>
				Mark As Completed
			</button>
			<button
				className='remove-button'
				onClick={() => onRemovedPress(todo?.text)}>
				Remove
			</button>
		</div>
	</div>
);

export default TodoListItem;
