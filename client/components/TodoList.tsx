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
      <div className="todo-lists mt-4 max-w-screen-lg mx-auto">
        <ul>
          {data.length > 0 ? (
            <>
              <Title />
              {data.map((todo: todo) => (
                <TodoItem key={todo.id} {...todo} />
              ))}
              <div className="text-gray-400 mt-2">
                Double click to mark as completed...
              </div>
            </>
          ) : (
            <div className="text-gray-400 mt-2">Please add your first todo</div>
          )}
        </ul>
      </div>
    </>
  )
}

export default TodoList
