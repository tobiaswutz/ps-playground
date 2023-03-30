import { getPlanetScaleConnection } from '$lib/database/planetscale';

export async function get() {
  try {
    const conn = await getPlanetScaleConnection();
    const results = await conn.execute('SELECT * FROM hotels');

    return {
      status: 200,
      body: {
        hotels: results.rows
      }
    };
  } catch (error) {
    console.error('Error fetching hotels:', error);
    return {
      status: 500,
      body: {
        error: 'Failed to fetch hotels'
      }
    };
  }
}
