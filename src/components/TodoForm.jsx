import { useState } from 'react'

// Controlled form for adding a new todo.
// Calls onAdd(text) when submitted with a non-empty value.
function TodoForm({ onAdd }) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const trimmed = text.trim()
    if (trimmed === '') return
    onAdd(trimmed)
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-form__input"
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(event) => setText(event.target.value)}
        aria-label="New todo"
      />
      <button className="todo-form__button" type="submit">
        Add
      </button>
    </form>
  )
}

export default TodoForm
