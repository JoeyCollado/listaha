import React from 'react'
import ChangeTodo from './ChangeTodo'
import { todoProps } from '@/types'

const Todo = ({todo}: {todo: todoProps}) => {
  return (
    <div className='w-10/12 auto mx-auto flex items-center justify-between bg-slate-900 py-4 px-20 rounded-2xl'> 
      {/* Change todo */}
      <ChangeTodo todo={todo}/>
      {/* edit todo */}

      {/* delete todo */}
    </div>
  )
}

export default Todo
