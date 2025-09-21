import React from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'
import * as actions from "@/actions";
import { todoProps } from '@/types';
import { FaCheck } from 'react-icons/fa';

const ChangeTodo = ({todo}: {todo: todoProps}) => {
  return (
    <Form action={actions.changeStatus}>
        <Input name='inputId' value={todo.id} type='hidden'></Input>
        <Button 
          type='submit' 
          text={<FaCheck className="text-sm"/>} 
          actionButton 
          bgColor={todo.isCompleted ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-600 hover:bg-gray-500'} 
        />
    </Form>
  )
}

export default ChangeTodo
