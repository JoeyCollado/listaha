import Todos from '@/components/Todos'
import React from 'react'
import {prisma} from "@/utils/prisma" //grab data
import Todo from '@/components/Todo';

async function getData(){ //function to fetch the grabbed data
  const data = await prisma.todo.findMany({
    select:  {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: 'desc',
    }
  })

  return data;
}

export default async function Home(){

  const data = await getData(); //grab data using async function  

  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center text-white h-screen bg-black'>
      <span className='text-4xl font-extrabold uppercase'>Listaha App</span>
      <h1 className='text-5xl font-extrabold uppercase mb-5 text-center'>
        <span className='lowercase'>w</span>Server Actions
      </h1>

      <div className='flex justify-center flex-col items-center'>
        {/* add todo items*/} 
        <Todos/>
        {/* map todos */}
        <div className='flex flex-col gap-5 items-center justify-center mt-10 w-screen'>
           {data.map((todo,id) => (
            <div key={id}><Todo todo={todo}/></div>
           ))}
        </div>
      </div>
    </div>
  )
}


//prisma install
//npm i prisma 
//npx prisma init --datasource-provider mongodb 
/*
Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no collections yet, read https://pris.ly/d/getting-started
2. Define models in the schema.prisma file.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and a managed serverless Postgres database. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
*/

//https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb/connect-your-database-node-mongodb

//to inject data to mongo db
//we have to create a form
//create a server action file and create a function