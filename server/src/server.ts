import app from './app';
import config from './app/config';
import { initDB } from './app/config/db';

initDB();

app.listen(config.port, () => {
  console.log(`Server listening on port http://localhost:${config.port}`);
});





