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