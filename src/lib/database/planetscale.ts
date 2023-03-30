import { connect } from '@planetscale/database';

const config = {
  host: import.meta.env.VITE_DATABASE_HOST,
  username: import.meta.env.VITE_DATABASE_USERNAME,
  password: import.meta.env.VITE_DATABASE_PASSWORD
};

export async function getPlanetScaleConnection() {
  const conn = await connect(config);
  return conn;
}
