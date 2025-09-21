import React from 'react'
import ChangeTodo from './ChangeTodo'
import { todoProps } from '@/types'
import EditTodo from './EditTodo'
import DeleteTodo from './DeleteTodo'

const Todo = ({todo}: {todo: todoProps}) => {

  return (
    <div 
      className={`
        group relative w-full flex items-center justify-between 
        bg-gradient-to-r from-gray-800/80 to-gray-700/80 
        backdrop-blur-sm border border-gray-600/50 
        py-4 px-4 sm:px-6 rounded-xl 
        shadow-lg hover:shadow-xl 
        transition-all duration-300 ease-in-out
        hover:border-gray-500/70 hover:scale-[1.02]
        ${todo.isCompleted ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-600/30 todo-completed' : 'todo-pending'}
      `}
    > 
      {/* Left section - Complete button */}
      <div className='flex-shrink-0 mr-3 sm:mr-4'>
        <ChangeTodo todo={todo}/>
      </div>
      
      {/* Center section - Todo title */}
      <div className='flex-1 min-w-0 px-2 sm:px-4'>
        <span className={`
          block text-sm sm:text-base font-medium text-white 
          truncate transition-colors duration-200
          ${todo.isCompleted ? 'text-gray-400' : 'text-white'}
        `}>
          {todo.title}
        </span>
      </div>
      
      {/* Right section - Action buttons */}
      <div className='flex items-center space-x-2 sm:space-x-3 flex-shrink-0'>
        {/* Edit button */}
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <EditTodo todo={todo}/>
        </div>
        
        {/* Delete button */}
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
          <DeleteTodo todo={todo}/>
        </div>
      </div>
    </div>
  )
}

export default Todo
