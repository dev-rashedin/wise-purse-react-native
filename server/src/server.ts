import app from './app';
import config from './app/config';
import { sql } from './app/config/db';

async function initDB() {
  try {
    await sql`CREATE TABLE IF NOT EXISTS transaction(
      id SERIAL PRIMARY KEY,
      user_id VARCHAR(255) NOT NULL,
      title VARCHAR(255) NOT NULL,
      amount DECIMAL(10,2) NOT NULL,
      category VARCHAR(255) NOT NULL,
      created_at DATE NOT NULL DEFAULT CURRENT_DATE
    )`;

    console.log("Database initialized successfully")
    

  } catch (error) {
    console.error("Error initializing DB", error);
    process.exit(1) 
  }
}

initDB().then(() => {
app.listen(config.port, () => {
  console.log(`Server listening on port http://localhost:${config.port}`);
});
})


