import { Router } from 'express'

import * as db from '../db/todos'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const todos = await db.getAllTodos()

    res.sendStatus(200).json(todos)
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

router.post('/', async (req, res) => {
  try {
    const newTodo = req.body
    await db.addTodoItem(newTodo)

    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.put('/:todoId', async (req, res) => {
  try {
    const todoId = Number(req.params.todoId)
    const updatedTodo = req.body
    await db.editTodoItem(todoId, updatedTodo)

    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
