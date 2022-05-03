   !!!after cloning you should do:
   CLI: Arman\Backend>
   npx prisma init /-/
   npx prisma studio /-/ start prisma-client server or start db server on PORT 5555
   npx prisma migrate dev /-/ migrate prisma-db
   npx prisma generate /-/ generated prisma-db
   
   CLI: Arman\Backend> npm run dev // to run server
   CLI: Arman\Backend> npx prisma studio // to run client prisma UI, you may see on localhost:5555
   CLI: Arman\frontkend> npm run dev // to run next.js

   .env file for backend: 
   DATABASE_URL="file:./dev"
   PORT=3001
