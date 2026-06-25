import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import TodoFilter from './components/TodoFilter.jsx'
import './App.css'

// Root component. Holds the list of todos in state and passes
// handlers down to the form (to add) and the list (to render).
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn what a Git branch is', completed: false },
    { id: 2, text: 'Make your first commit', completed: false },
  ])
  const [filter, setFilter] = useState('all')

  // Add a new todo to the top of the list.
  function addTodo(text) {
    const newTodo = { id: Date.now(), text, completed: false }
    setTodos([newTodo, ...todos])
  }

  // Flip the completed flag of a single todo.
  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  // Decide which todos to show based on the active filter.
  const visibleTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Todo App</h1>
        <p className="app__subtitle">A tiny project to practice the Git workflow</p>
      </header>

      <section className="card">
        <TodoForm onAdd={addTodo} />
        <TodoFilter current={filter} onChange={setFilter} />
        <TodoList todos={visibleTodos} onToggle={toggleTodo} />
      </section>

      <footer className="app__footer">
        Built for the Git Bootcamp · branch <code>feature/filter-and-complete</code>
      </footer>
    </main>
  )
}

export default App
