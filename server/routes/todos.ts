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

export default router
