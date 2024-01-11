import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

function App() {

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">Nothing to do</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
