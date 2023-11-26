import request from 'superagent'

const rootUrl = '/api/v1/todos'

export async function getTodos() {
  return await request.get(rootUrl).then((res) => {
    return res.body
  })
}

export async function deleteTodoItem(todoId: number) {
  await request.delete(`${rootUrl}/${todoId}`)
}
