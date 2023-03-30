import { getPlanetScaleConnection } from '$lib/database/planetscale';

export async function getAllUsers() {
  try {
    const conn = await getPlanetScaleConnection();
    const results = await conn.execute('SELECT * FROM user');

    return {
      status: 200,
      body: {
        users: results.rows
      }
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      status: 500,
      body: {
        error: 'Failed to fetch users'
      }
    };
  }
}