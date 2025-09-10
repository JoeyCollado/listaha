import { buttonProps } from '@/types'
import React from 'react'

const Button = ({type, text, onClick, actionButton, bgColor, ...props}: buttonProps) => {
  return (
    <div>
      <button onClick={onClick} type={type} className=''>
        {text}
      </button>
    </div>
  )
}

export default Button
