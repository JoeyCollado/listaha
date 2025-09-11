import Form from "./Form";
import Input from "./Input";
import Button from "./Button";




const AddTodo = () => {
  return (
    <div>
      <Form>
        <div className="flex gap-4 items-center">
          <Input name="input" type="text" placeholder="Add Todo Here..." />
          <Button type="submit" text="Add" bgColor="bg-blue-600" />
        </div>
      </Form>
    </div>
  );
};

export default AddTodo;