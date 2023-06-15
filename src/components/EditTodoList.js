import React, {useState} from 'react'

export let EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task)
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(value, task.id)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input class='text' className='todo-input' value={value}
      placeholder='Change Task' onChange=
      {(event) => setValue(event.target.value)}/>
      <button type='submit' className='todo-btn'>Edit task</button>
    </form>
  )
}