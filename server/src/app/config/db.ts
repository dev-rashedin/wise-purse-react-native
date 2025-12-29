import {neon} from '@neondatabase/serverless';

// Creating a SQL connection using our DB URL
export const sql = neon(process.env.DB_URL || '');