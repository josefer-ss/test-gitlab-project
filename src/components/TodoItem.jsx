// A single todo row.
function TodoItem({ todo }) {
  return (
    <li className="todo-item">
      <span className="todo-item__text">{todo.text}</span>
    </li>
  )
}

export default TodoItem
