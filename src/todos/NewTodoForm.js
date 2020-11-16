// import hooks
import { useState } from 'react';
// connect component
import { connect } from 'react-redux';
// import action
import { createTodo } from './actions';
// import styles
import './NewTodoForm.css';

// new todo form component
const NewTodoForm = ({ todos, onCreatePressed }) => {
	// use state hook
	const [inputValue, setInputValue] = useState(undefined);

	return (
		<div className='new-todo-form'>
			<input
				placeholder='type a new todo'
				type='text'
				className='new-todo-input'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				className='new-todo-button'
				onClick={() => {
					const isDuplicateText = todos.some(
						(todo) => todo.text === inputValue,
					);

					if (!isDuplicateText) {
						onCreatePressed(inputValue);
						setInputValue('');
					}
				}}>
				Add
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
