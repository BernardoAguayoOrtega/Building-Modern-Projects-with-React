// todo list item component
const TodoListItem = ({ todo }) => (
  <div className="todo-item-conatiner">
    <h3>{todo?.text}</h3>
    <div className="button-container">
      <button className='completed-button'>Mark As Completed</button>
      <button className='remove-button'>Remove</button>
    </div>
  </div>
)

export default TodoListItem