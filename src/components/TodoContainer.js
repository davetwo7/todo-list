import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 } from 'uuid'
import { Todo } from './Todo'

v4();

export const TodoContainer = () => {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todos, {id: v4(), task: todo,
      completed: false, isEditing: false}])
      console.log(todos)
  }
  return (
    <div className='TodoContainer'>
      <h1>Todo List.</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo, index) => (
        <Todo task={todo} key={index}/>
      ))}
    </div>
  )
}