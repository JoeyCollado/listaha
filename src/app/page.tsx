import React from 'react'

const page = () => {
  return (
    <div className='w-screen py-20 flex justify-center flex-col items-center'>
      <span className='text-4xl font-extrabold uppercase'>Listaha App</span>
      <h1 className='text-5xl font-extrabold uppercase mb-5 text-center'>
        <span className='lowercase'>w</span>Server Actions
      </h1>

      <div className='flex justify-center flex-col items-center'>
        {/* add todo items*/}
        {/* map todos */}
      </div>
    </div>
  )
}

export default page

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