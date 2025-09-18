import React from 'react'
import ChangeTodo from './ChangeTodo'
import { todoProps } from '@/types'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}: {todo: todoProps}) => {
  return (
    <div className='w-10/12 auto mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'> 
      {/* Change todo */}
      <ChangeTodo todo={todo}/>
      <span className='text-center font-bold uppercase grow text-white'>{todo.title}</span>
      <div className='flex items-center mx-2'>
      {/* edit todo */}
      <EditTodo todo={todo}/>
      </div>
      <div className='flex items-center mx-2'>
      {/* delete todo */}
      <DeleteTodo todo={todo}/>
      </div>
      
    </div>
  )
}

export default Todo
