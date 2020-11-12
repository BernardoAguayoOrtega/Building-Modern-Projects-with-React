// todo list item component
const TodoListItem = ({ todo }) => (
  <div className="todo-item-conatiner">
    <h3>{todo?.text}</h3>
    <button>Mark As Completed</button>
    <button>Remove</button>
  </div>
)

export default TodoListItem
