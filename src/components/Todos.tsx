import React from "react";
import Input from "./Input";
import Form from "./Form";
import Button from "./Button";

const Todos = () => {
  return (
    <div>
      <Form>
        <div className="flex gap-2">
          <Input name="input" type="text" placeholder="Add Todo Here">
            <Button type="submit" text="Add" bgColor="bg-blue-600"/>
          </Input>
        </div>
      </Form>
    </div>
  );
};

export default Todos;
