'use client';
import React, { useState } from 'react'
import Button from './Button';
import { MdEdit } from 'react-icons/md';
import Input from './Input';
import Form from './Form';
import { todo } from 'node:test';
import { todoProps } from '@/types';

const EditTodo = ({todo}: {todo: todoProps}) => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEdit = () => {
        setEditTodo(!editTodo); //when btn click set edit todo state to the opposite of current editTodo state, if its false turn true vice versa
    }
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit/>} actionButton />
      {editTodo ? (
        <Form>
        <div className='flex justify-center'>
        <Input name='inputId' value={todo.id} type='hidden'/>
        <Button type='submit' text="Save"></Button>
        </div>
        </Form>) : null}
    </div>
  )
}

export default EditTodo
