// import styles
import './TodoListItem.css';

// todo list item component
const TodoListItem = ({ todo, onRemovedPress }) => (
	<div className='todo-item-container'>
		<h3>{todo?.text}</h3>
		<div className='button-container'>
			<button className='completed-button'>Mark As Completed</button>
			<button
				className='remove-button'
				onClick={() => onRemovedPress(todo?.text)}>
				Remove
			</button>
		</div>
	</div>
);

export default TodoListItem;
