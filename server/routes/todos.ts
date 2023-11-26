import { Router } from 'express'

import * as db from '../db/todos'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()

    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:todoId', async (req, res) => {
  try {
    const todoId = Number(req.params.todoId)
    await db.deleteTodoItem(todoId)

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
