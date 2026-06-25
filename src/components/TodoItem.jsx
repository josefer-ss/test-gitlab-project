// A single todo row. Clicking the checkbox toggles its completed state.
function TodoItem({ todo, onToggle }) {
  return (
    <li className={todo.completed ? 'todo-item todo-item--done' : 'todo-item'}>
      <input
        className="todo-item__checkbox"
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.text}" as complete`}
      />
      <span className="todo-item__text">{todo.text}</span>
    </li>
  )
}

export default TodoItem
