import styled from 'styled-components';

const TodoItemContainer = styled.div`
	background: #fff;
	border-radius: 8px;
	margin-top: 8px;
	padding: 16px;
	position: relative;
	box-shadow: 0 4px 8px grey;
`;

const ButtonContainer = styled.div`
	position: absolute;
	right: 12px;
	bottom: 12px;
`;

const CompletedButton = styled.button`
	font-size: 16px;
	padding: 8px;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	display: inline-block;
	background-color: lightblue;
`;
const RemoveButton = styled.button`
	font-size: 16px;
	padding: 8px;
	border: none;
	border-radius: 8px;
	outline: none;
	cursor: pointer;
	display: inline-block;
	background-color: lightcoral;
	margin-left: 8px;
`;

// todo list item component
const TodoListItem = ({ todo, onRemovedPress, isCompleted }) => (
	<TodoItemContainer isCompleted={isCompleted}>
		<h3>{todo?.text}</h3>
		<ButtonContainer>
			<CompletedButton
				disabled={todo.isCompleted}
				className='completed-button'
				onClick={() => isCompleted(todo?.id)}>
				Mark As Completed
			</CompletedButton>
			<RemoveButton
				className='remove-button'
				onClick={() => onRemovedPress(todo?.id)}>
				Remove
			</RemoveButton>
		</ButtonContainer>
	</TodoItemContainer>
);

export default TodoListItem;
