// todo list item component
const TodoListItem = ({ todo }) => (
  <div className="todo-item-conatiner">
    <h3>{todo?.text}</h3>
  </div>
)

export default TodoListItem
