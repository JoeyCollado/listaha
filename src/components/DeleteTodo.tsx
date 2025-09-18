import { todoProps } from "@/types";
import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-400"
        text={<FaTrash />}
      ></Button>
    </Form>
  );
};

export default DeleteTodo;
