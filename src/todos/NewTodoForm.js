// import hooks
import { useState } from 'react'

// new todo form component
const NewTodoForm = () => {
  // use state hook
  const [inputValue, setInputValue] = useState(undefined)

  return (
    <div className="new-todo-form">
      <input
        placeholder="type a new todo"
        type="text"
        className="new-todo-input"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button className="new-todo-button"></button>
    </div>
  )
}

export default NewTodoForm
