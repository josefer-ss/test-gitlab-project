import TodoItem from './TodoItem.jsx'

// Renders the list of todos, or an empty-state message
// when there is nothing to show.
function TodoList({ todos, onToggle }) {
  if (todos.length === 0) {
    return <p className="todo-list__empty">No todos yet. Add your first one above!</p>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  )
}

export default TodoList
