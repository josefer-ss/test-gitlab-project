import { useState } from 'react'
import TodoForm from './components/TodoForm.jsx'
import TodoList from './components/TodoList.jsx'
import './App.css'

// Root component. Holds the list of todos in state and passes
// handlers down to the form (to add) and the list (to render).
function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn what a Git branch is' },
    { id: 2, text: 'Make your first commit' },
  ])

  // Add a new todo to the top of the list.
  function addTodo(text) {
    const newTodo = { id: Date.now(), text }
    setTodos([newTodo, ...todos])
  }

  return (
    <main className="app">
      <header className="app__header">
        <h1 className="app__title">Todo App</h1>
        <p className="app__subtitle">A tiny project to practice the Git workflow</p>
      </header>

      <section className="card">
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} />
      </section>

      <footer className="app__footer">
        Built for the Git Bootcamp · branch <code>main</code>
      </footer>
    </main>
  )
}

export default App
