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

const Input = ({name, type, placeholder, value}: inputProps) => {
  return (
    <div>
      <input className='' title='input'/>
    </div>
  )
}

export default Input
