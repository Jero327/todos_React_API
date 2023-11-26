import { useMutation, useQueryClient } from "@tanstack/react-query";
import { todo } from "../../models/todos";
import { deleteTodoItem } from "../apis/todos";

function TodoItem(prop: todo) {
  const queryClient = useQueryClient()
  const deleteTodoItemMutation = useMutation({
    mutationFn: () => deleteTodoItem(prop.id),
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    deleteTodoItemMutation.mutate()
  }

  return (
    <li>
      <div className="todo-item">
        <div>{prop.details}</div>
        <div className="delete-btn-container">
          <div>{prop.priority}</div>
          <button onClick={handleDelete}>DELETE</button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
