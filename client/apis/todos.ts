import request from 'superagent'
import { newTodo, updatedTodo } from '../../models/todos'

const rootUrl = 'http://localhost:5258/api/TodoApp/'

export async function getTodos() {
  return await request.get(`${rootUrl}GetTodos`).then((res) => {
    return res.body
  })
}

export async function deleteTodoItem(todoId: number) {
  await request.delete(`${rootUrl}DeleteTodo?id=${todoId}`)
}

export async function addTodoItem(newTodo: newTodo) {
  await request.post(`${rootUrl}AddTodo`).send(newTodo)
}

export async function editTodoItem(todoId: number, updatedTodo: updatedTodo) {
  await request.put(`${rootUrl}UpdateTodo?id=${todoId}`).send(updatedTodo)
}
