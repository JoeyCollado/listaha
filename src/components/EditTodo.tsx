'use client';
import React, { useState } from 'react'
import Button from './Button';
import { MdEdit } from 'react-icons/md';

const EditTodo = () => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEdit = () => {
        setEditTodo(!editTodo); //when btn click set edit todo state to the opposite of current editTodo state, if its false turn true vice versa
    }
  return (
    <div className='flex gap-5 items-center'>
      <Button onClick={handleEdit} text={<MdEdit/>} actionButton />
    </div>
  )
}

export default EditTodo
