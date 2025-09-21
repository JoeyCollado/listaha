import React from 'react'
import { inputProps } from '@/types' //types in a separate file, along with this you can mix in same file like the below

/*
export interface inputProps{
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
}
*/

const Input = ({name, type, placeholder, value}: inputProps) => { //props
  return (
    <div className='w-full'>
      <input 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value} 
        className='
          block w-full p-3 sm:p-4 
          bg-gray-800/80 backdrop-blur-sm 
          border border-gray-600/50 rounded-xl 
          text-base text-white placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500/50 
          focus:border-blue-500/50 focus:bg-gray-800/90
          transition-all duration-200 ease-in-out
          hover:border-gray-500/70 hover:bg-gray-800/90
          shadow-lg
        ' 
        title='input'
      />
    </div>
  )
}

export default Input
