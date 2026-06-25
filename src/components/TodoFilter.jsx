// Three buttons to filter the todo list.
// `current` is the active filter; onChange sets a new one.
const FILTERS = ['all', 'active', 'completed']

function TodoFilter({ current, onChange }) {
  return (
    <div className="todo-filter">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          className={
            filter === current
              ? 'todo-filter__button todo-filter__button--active'
              : 'todo-filter__button'
          }
          onClick={() => onChange(filter)}
        >
          {filter[0].toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default TodoFilter
