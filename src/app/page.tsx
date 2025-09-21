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
    <div className='min-h-screen w-full flex flex-col items-center text-white relative overflow-hidden'>
      {/* Background gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-90'></div>
      
      {/* Main content container */}
      <div className='relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        
        {/* Header section */}
        <div className='text-center mb-8 sm:mb-12 animate-fade-in-up'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
            Listaha
          </h1>
          <p className='text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto'>
            Organize your tasks with style. Add, edit, and manage your todos effortlessly.
          </p>
        </div>

        {/* Add todo section */}
        <div className='mb-8 sm:mb-12 animate-fade-in-up'>
          <div className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50 shadow-2xl'>
            <h2 className='text-xl sm:text-2xl font-semibold text-white mb-6 text-center'>
              Add New Task
            </h2>
            <Todos/>
          </div>
        </div>

        {/* Todo list section */}
        <div className='animate-fade-in-up'>
          <div className='bg-gray-800/30 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/30 shadow-xl'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl sm:text-2xl font-semibold text-white'>
                Your Tasks
              </h2>
              <span className='text-sm text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full'>
                {data.length} {data.length === 1 ? 'task' : 'tasks'}
              </span>
            </div>
            
            {/* Scrollable todo container */}
            <div className='max-h-[60vh] sm:max-h-[50vh] overflow-y-auto pr-2 space-y-3'>
              {data.length === 0 ? (
                <div className='text-center py-12'>
                  <div className='text-6xl mb-4'>📝</div>
                  <p className='text-gray-400 text-lg'>No tasks yet. Add one above to get started!</p>
                </div>
              ) : (
                data.map((todo, id) => (
                  <div key={id} className={`animate-fade-in-up ${id < 5 ? `animate-delay-${(id + 1) * 100}` : ''}`}>
                    <Todo todo={todo}/>
                  </div>
                ))
              )}
            </div>
          </div>
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