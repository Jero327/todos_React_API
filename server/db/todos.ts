import connection from './connection.ts'
import { newTodo, todo } from '../../models/todos.ts'

export async function getAllTodos(db = connection): Promise<todo[]> {
  return db('todos').select()
}

export async function deleteTodoItem(todoId: number, db = connection) {
  await db('todos').where('id', todoId).del()
}

export async function addTodoItem(newTodo: newTodo, db = connection) {
  await db('todos').insert(newTodo)
}
