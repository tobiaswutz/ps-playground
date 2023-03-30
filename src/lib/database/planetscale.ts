import { connect } from '@planetscale/database';

import { VITE_DATABASE_HOST, VITE_DATABASE_USERNAME, VITE_DATABASE_PASSWORD } from '$env/static/private';

const config = {
  host: VITE_DATABASE_HOST,
  username: VITE_DATABASE_USERNAME,
  password: VITE_DATABASE_PASSWORD
};

export async function getPlanetScaleConnection() {
  const conn = connect(config);
  return conn;
}
