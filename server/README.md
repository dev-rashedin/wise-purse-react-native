# Wise Purse Backend

## Tech Stack
- Node.js 
- Express.js
- TypeScript
- PostgreSQL
- Neon DB


## folder structure

src /
 - app/
    - config /
        - db.ts
        - index.ts
    - modules/
        - transaction/ 
           - transaction.controller.ts
           - transaction.interface.ts
           - transaction.route.ts
           - transaction.service.ts
    - utils/
        - sendSuccessResponse.ts
 - app.ts
 - server.ts

## Example environment variables

```env
PORT=3000
NODE_ENV=development

# Database connection URL
DATABASE_URL=Your_Neon_DB_Database URL

EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=Clerk_Publishable_Key_For_React_Native
```

