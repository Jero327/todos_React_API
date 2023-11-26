import connection from './connection.ts'
import { todo } from '../../models/todos.ts'

export async function getAllTodos(db = connection): Promise<todo[]> {
  return db('todos').select()
}

export async function deleteTodoItem(todoId: number, db = connection) {
  await db('todos').where('id', todoId).del()
}
