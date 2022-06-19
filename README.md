This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The purpose of this repo is to test Next.JS middleware functionality. Specific use case is user-authentication. I set up a sqlite database, with prisma ORM to serve as a light-weight database and query layer to manage the authenticated users.

## Getting Started

Before running the Next.js development server, you need to run the migrations:

```bash
npx prisma migrate dev
```

Seed the database for some test users if you want to confirm the database is running correctly:
```bash
npx prisma db seed
```

Then, you can run the following series of commands in your terminal to access the database:
```bash
# start the sqlite3 cli
sqlite3
# open the dev db
.open dev.db
# sql command
SELECT * from User;
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
