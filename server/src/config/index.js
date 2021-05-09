import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const config = cleanEnv(process.env, {
  PORT: num({ default: 9000 }),
  DATABASE_URL: str(),
  REFRESH_SECRET: str(),
  REFRESH_EXPIRES_IN: str(),
  ACCESS_SECRET: str(),
  ACCESS_EXPIRES_IN: str(),
  YANDEX_KEY: str(),
});

export default config;
