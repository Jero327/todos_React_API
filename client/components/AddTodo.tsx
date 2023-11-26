import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"
import { newTodo } from "../../models/todos"
import { addTodoItem } from "../apis/todos"

function AddTodo() {
  const [form, setForm] = useState(false)

  function handleForm() {
    setForm(!form)
  }

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newTodo: newTodo) => addTodoItem(newTodo),
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const details = form.get('details') as string
    const priority = Number(form.get('priority')) as number
    const newTodo = {
      details: details,
      priority: priority,
      completed: false,
    }
    mutation.mutate(newTodo)
    e.currentTarget.reset()
  }

  return (
    <>
      <button onClick={handleForm}>Add</button>
      {form && (
        <form onSubmit={handleSubmit}>
          <label>New:
            <input name="details" placeholder="What's need to be done?" required></input>
          </label>
          <label>Priority:
            <select name="priority" required>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <input type="submit"></input>
        </form>)
      }
    </>
  )
}

export default AddTodo
