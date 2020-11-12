// todo list component
const TodoList = ({ todos = [] }) => (
  <div className="list-wrapper">
    {todos.map((todo, key) => <TodoListItem key={key} todo={todo} />)}
  </div>
)

export default TodoList
