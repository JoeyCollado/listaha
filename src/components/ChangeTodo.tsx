import React from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'
import * as actions from "@/actions";
import { todoProps } from '@/types';
import { FaCheck } from 'react-icons/fa';

const ChangeTodo = ({todo}: todoProps) => {
  return (
    <Form action={actions.changeStatus}>
        <Input name='inputId' value={todo.id} type='hidden'></Input>
        <Button type='submit' text={<FaCheck/>} actionButton bgColor={todo.isCompleted? 'bg-green-400' : 'bg-blue-500'}></Button> {/* if completed checkmark is green if not blue */}
    </Form>
  )
}

export default ChangeTodo
