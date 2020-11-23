import { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { loadTodos, deleteTodoRequest, updateTodoRequest } from './thunks';
import {
	getTodosLoading,
	getCompleteTodos,
	getIncompleteTodos,
} from './selectors';
import styled from 'styled-components';

const ListWrapper = styled.div`
	max-width: 700px;
	margin: auto;
`;

// todo list component
const TodoList = ({
	onRemovedPress,
	isCompleted,
	isLoading,
	startLoadingTodos,
	completeTodos,
	incompleteTodos,
}) => {
	useEffect(() => {
		startLoadingTodos();
	}, []);

	const loadingMessage = <div>Loading todos ....</div>;

	const content = (
		<ListWrapper>
			<NewTodoForm />
			{incompleteTodos.map((todo, key) => (
				<TodoListItem
					key={key}
					todo={todo}
					onRemovedPress={onRemovedPress}
					isCompleted={isCompleted}
				/>
			))}
			{completeTodos.map((todo, key) => (
				<TodoListItem
					key={key}
					todo={todo}
					onRemovedPress={onRemovedPress}
					isCompleted={isCompleted}
				/>
			))}
		</ListWrapper>
	);

	return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
	isLoading: getTodosLoading(state),
	completeTodos: getCompleteTodos(state),
	incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
	onRemovedPress: (id) => dispatch(deleteTodoRequest(id)),
	isCompleted: (id) => dispatch(updateTodoRequest(id)),
	onDisplayAlertClick: () => dispatch(displayAlert()),
	startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
