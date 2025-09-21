import Form from "./Form";
import Input from "./Input";
import Button from "./Button";
import * as actions from "@/actions";

//how this works
//when we click the button the form will start working
//and after that the serveraction createTodo will grab the input via the formData which is the same props we use on our actions file, then we use the prisma to inject data to our mongodb


const AddTodo = () => {
  return (
    <div className="w-full">
      <Form action={actions.createTodo}>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <div className="flex-1">
            <Input name="input" type="text" placeholder="What needs to be done?" />
          </div>
          <div className="flex-shrink-0">
            <Button 
              type="submit" 
              text="Add Task" 
              bgColor="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;