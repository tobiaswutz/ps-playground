import { connect } from '@planetscale/database';

import { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD } from '$env/static/private';

const config = {
	host: DATABASE_HOST,
	username: DATABASE_USERNAME,
	password: DATABASE_PASSWORD
};

export async function getPlanetScaleConnection() {
	const conn = connect(config);
	return conn;
}
