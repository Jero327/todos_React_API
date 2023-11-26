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
          {data.length>0 ? (
            <>
              <Title />
              {data.map((todo: todo) => <TodoItem key={todo.id} {...todo} />)}
              <div>Double click to mark as completed..</div>
            </>
            )
          :
            (<div>Please add your first todo</div>)
          }
        </ul>
      </div>
    </>
  )
}

export default TodoList
