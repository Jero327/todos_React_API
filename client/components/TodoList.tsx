import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../apis/todos";
import { todo } from "../../models/todos";
import TodoItem from "./TodoItem";
import Title from "./Title";

function TodoList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: getTodos
  })

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Something wrong!</div>

  return (
    <>
      <div className="todo-lists">
        <ul>
          <Title />
          {data && data.map((todo: todo) => <TodoItem key={todo.id} {...todo} />)}
        </ul>
      </div>
    </>
  )
}

export default TodoList
