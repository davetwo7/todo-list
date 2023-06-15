import React, {useState} from 'react'

export let TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(value)
    setValue('')
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input class='text' className='todo-input' value={value}
      placeholder='Enter a task' onChange=
      {(event) => setValue(event.target.value)}/>
      <button type='submit' className='todo-btn'>Add new task</button>
    </form>
  )
}