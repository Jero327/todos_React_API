import { useMutation, useQueryClient } from '@tanstack/react-query'
import { todo, updatedTodo } from '../../models/todos'
import { deleteTodoItem, editTodoItem } from '../apis/todos'
import { useState } from 'react'

function TodoItem(prop: todo) {
  const [isEdit, setIsEdit] = useState(false)

  const queryClient = useQueryClient()

  const deleteTodoItemMutation = useMutation({
    mutationFn: () => deleteTodoItem(prop.id),
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  const editTodoItemMutation = useMutation({
    mutationFn: (updatedTodo: updatedTodo) =>
      editTodoItem(prop.id, updatedTodo),
    onSuccess: () => queryClient.invalidateQueries(['todos']),
  })

  function handleDelete(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    deleteTodoItemMutation.mutate()
  }

  function handleEdit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsEdit(true)
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = new FormData(e.currentTarget)
    const details = form.get('details') as string
    const priority = Number(form.get('priority')) as number
    const updatedTodo = {
      details: details,
      priority: priority,
      completed: prop.completed,
    }
    editTodoItemMutation.mutate(updatedTodo)

    setIsEdit(false)
  }

  function handleCompleted(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    const updatedTodo = {
      details: prop.details,
      priority: prop.priority,
      completed: !prop.completed,
    }
    editTodoItemMutation.mutate(updatedTodo)
  }

  return (
    <li className="mb-2">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="todo-item">
          <label className="block mb-2 text-gray-700">
            Details:
            <input
              className="w-full p-2 border rounded-md"
              name="details"
              placeholder="What's need to be done?"
              defaultValue={prop.details}
              required
            />
          </label>
          <label className="block mb-2 text-gray-700">
            Priority:
            <select
              className="w-full p-2 border rounded-md"
              name="priority"
              defaultValue={prop.priority}
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
            Save
          </button>
        </form>
      ) : (
        <div className="todo-item">
          <button
            className={`details-btn ${prop.completed ? 'completed' : ''}`}
            onDoubleClick={handleCompleted}
          >
            <div>{prop.details}</div>
          </button>
          <div className="delete-btn-container space-x-2">
            <div className={`priority ${prop.completed ? 'completed' : ''}`}>
              {prop.priority}
            </div>
            <button
              onClick={handleEdit}
              className="bg-blue-500 text-white px-1 py-1 rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-1 py-1 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </li>
  )
}

export default TodoItem
