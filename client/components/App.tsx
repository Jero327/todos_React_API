import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

function App() {

  return (
    <>
      <div className="app">
        <h1>todos</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
