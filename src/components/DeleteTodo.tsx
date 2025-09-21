import { todoProps } from "@/types";
import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { FaTrash } from "react-icons/fa";
import * as actions from "@/actions";

const DeleteTodo = ({ todo }: { todo: todoProps }) => {
  return (
    <Form action={actions.deleteTodo}>
      <Input type="hidden" name="inputId" value={todo.id}></Input>
      <Button
        actionButton
        type="submit"
        bgColor="bg-red-500 hover:bg-red-600"
        text={<FaTrash className="text-sm" />}
      />
    </Form>
  );
};

export default DeleteTodo;
