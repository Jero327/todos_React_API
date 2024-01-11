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
      <button
        className="bg-blue-500 text-white p-2 rounded-md mr-2"
        onClick={handleForm}
      >
        Add
      </button>
      {form && (
        <form
          className="mt-4 max-w-md mx-auto p-4 bg-gray-100 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <label className="block mb-2 text-gray-700">
            New:
            <input
              className="w-full p-2 border rounded-md"
              name="details"
              placeholder="What's need to be done?"
              required
            />
          </label>
          <label className="block mb-2 text-gray-700">
            Priority:
            <select
              className="w-full p-2 border rounded-md"
              name="priority"
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </label>
          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      )}
    </>
  )
}

export default AddTodo
