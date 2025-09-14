import React from 'react'
import Form from './Form'
import Input from './Input'
import Button from './Button'
import * as actions from "@/actions";
import { todoProps } from '@/types';

const ChangeTodo = ({todo}: todoProps) => {
  return (
    <Form action={}>
        <Input name='inputId' value={todo.id} type='hidden'></Input>
        <Button></Button>
    </Form>
  )
}

export default ChangeTodo
