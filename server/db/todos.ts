import connection from './connection.ts'
import { todo } from '../../models/todos.ts'

export async function getAllTodos(db = connection): Promise<todo[]> {
  return db('todos').select()
}
