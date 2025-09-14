'use server';
//server actions
import {prisma} from "@/utils/prisma"
import { revalidatePath } from "next/cache";

//add todo
export async function createTodo(formData: FormData){
  const input = formData.get('input') as string; //get data from form input

  if(!input.trim()){
    return;
  }
  await prisma.todo.create({
    data: {
        title: input,
    }
  })

  //refresh path
  revalidatePath('/');
}

export async function changeStatus(formData: FormData){ //find todo and update status by getting inputId
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    }
  });

  const updateStatus = !todo?.isCompleted; //get status

await prisma.todo.update({ //update database
  where: {
    id: inputId,
  },
  data: {
    isCompleted: updateStatus
  }
})

revalidatePath("/");
}