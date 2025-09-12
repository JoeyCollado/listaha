import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import { createTodo } from "@/actions";

//how this works
//when we click the button the form will start working
//and after that the serveraction createTodo will grab the input via the formData which is the same props we use on our actions file, then we use the prisma to inject data to our mongodb


const AddTodo = () => {
  return (
    <div>
      <Form action={createTodo}>
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;