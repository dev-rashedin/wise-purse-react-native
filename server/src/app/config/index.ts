import 'dotenv/config';
interface Config {
  port: number;
  databaseUrl?: string;
  jwtSecret?: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
};

export default config;
