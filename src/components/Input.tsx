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
    <div>
      <input name={name} type={type} placeholder={placeholder} value={value} className='bloc w-full p-4 mx-2 border rounded-lg text-base bg-gray-700 border-gray-600 placeholder:gray-400 text-white' title='input'/>
    </div>
  )
}

export default Input
