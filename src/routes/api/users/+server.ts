import { getPlanetScaleConnection } from '$lib/database/planetscale';

export const GET = async ({ request, url }: any) => {
  try {
    const conn = await getPlanetScaleConnection();
    const results = await conn.execute('SELECT * FROM user');
    return new Response(JSON.stringify(results.rows), { status: 200 })
  } catch (error) {
    console.error('Error fetching users:', error);
    return new Response(JSON.stringify({error: 'Failed to fetch users'}), { status: 500 })
  }
}

export const POST = async ({ request }: any) => {
  const body = await request.json();
  try {
    const conn = await getPlanetScaleConnection();
    console.log('body', body);
    const results = await conn.execute(
      `
        INSERT INTO user (email, name, last_name, phone_number, location, age, alias_name, avatar_url)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        body.email,
        body.name,
        body.last_name,
        body.phone_number,
        body.location,
        body.age,
        body.alias_name,
        body.avatar_url,
      ]
    );

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error('Error inserting user:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to insert user' }),
      { status: 500 }
    );
  }
};
