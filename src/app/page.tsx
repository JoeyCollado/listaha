import React from 'react'

const page = () => {
  return (
    <div>
      Listaha
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