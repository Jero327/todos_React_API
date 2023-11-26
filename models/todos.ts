export interface newTodo {
  details: string
  priority: number
  completed: boolean
}

export interface todo extends newTodo {
  id: number
}

export interface updatedTodo {
  details: string
  priority: number
  completed: boolean
}
