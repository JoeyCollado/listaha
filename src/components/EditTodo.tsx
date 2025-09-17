'use client';
import React, { useState } from 'react'
import Button from './Button';
import { MdEdit } from 'react-icons/md';
import Input from './Input';
import Form from './Form';
import { todo } from 'node:test';
import { todoProps } from '@/types';
import * as actions from "@/actions";

const EditTodo = ({todo}: {todo: todoProps}) => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEdit = () => {
        setEditTodo(!editTodo); //when btn click set edit todo state to the opposite of current editTodo state, if its false turn true vice versa
    }

    const handleSubmit = () => { // wjen we click save it close the form of editing state
      setEditTodo(false);
    }
    
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit/>} actionButton />
      {editTodo ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name='inputId' value={todo.id} type='hidden'></Input>
        <div className='flex justify-center'>
        <Input name='newTitle' type='text' placeholder='Edit Todo...'/>
        <Button type='submit' text="Save"></Button>
        </div>
        </Form>) : null}
    </div>
  )
}

export default EditTodo;
