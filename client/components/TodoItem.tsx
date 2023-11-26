import { todo } from "../../models/todos";

function TodoItem(prop: todo) {
  return <li>{prop.details}</li>
}

export default TodoItem
