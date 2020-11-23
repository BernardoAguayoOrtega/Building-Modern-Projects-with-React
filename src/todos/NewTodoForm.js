// import hooks
import { useState } from 'react';
// connect component
import { connect } from 'react-redux';
// import action
import { addTodoRequest } from './thunks';
import { getTodos } from './selectors'
import styled from 'styled-components'

const FormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: lightblue;
`

// new todo form component
const NewTodoForm = ({ todos, onCreatePressed }) => {
	// use state hook
	const [inputValue, setInputValue] = useState(undefined);

	return (
		<FormContainer>
			<NewTodoInput
				placeholder='type a new todo'
				type='text'
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<NewTodoButton
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
			</NewTodoButton>
		</FormContainer>
	);
};

const mapStateToProps = (state) => ({
	todos: getTodos(state)
});

const mapDispatchToProps = (dispatch) => ({
	onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
