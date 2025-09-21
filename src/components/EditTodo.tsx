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
      if(todo.isCompleted){
        return;
      }
        setEditTodo(!editTodo); //when btn click set edit todo state to the opposite of current editTodo state, if its false turn true vice versa
    }

    const handleSubmit = () => { // wjen we click save it close the form of editing state
      setEditTodo(false);
    }
    
  return (
    <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-center'>
      <Button 
        onClick={handleEdit} 
        text={<MdEdit className="text-sm"/>} 
        actionButton 
        bgColor="bg-blue-500 hover:bg-blue-600"
      />
      {editTodo ? (
        <Form action={actions.editTodo} onSubmit={handleSubmit}>
          <Input name='inputId' value={todo.id} type='hidden'></Input>
          <div className='flex flex-col sm:flex-row gap-2 sm:gap-3 items-center'>
            <div className='flex-1 min-w-0'>
              <Input name='newTitle' type='text' placeholder='Edit task...'/>
            </div>
            <Button 
              type='submit' 
              text="Save" 
              bgColor="bg-green-500 hover:bg-green-600"
            />
          </div>
        </Form>) : null}
    </div>
  )
}

export default EditTodo;
