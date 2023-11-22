import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../apis/todos"
import { todo } from "../../models/todos"

function App() {
  const { data } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })

  return (
    <>
      <div className="app">
        <h1>todos</h1>
        <ul>{data && data.map((todo: todo) => <li key={todo.id}>{todo.details}</li>)}</ul>
      </div>
    </>
  )
}

export default App
