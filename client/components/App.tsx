import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

function App() {

  return (
    <>
      <div className="app p-4 max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold underline mb-4">Nothing to do</h1>
        <AddTodo />
        <TodoList />
      </div>
    </>
  )
}

export default App
