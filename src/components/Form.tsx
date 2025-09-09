import { formProps } from '@/types'
import React from 'react'

const Form = ({children, action, className, onSubmit}: formProps) => {
  return (
    <form>{children}</form>
  )
}

export default Form
