import { getPlanetScaleConnection } from '$lib/database/planetscale';
import type { User } from '$lib/models/User';

export const GET = async () => {
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

export const DELETE = async ({ request }: any) => {
  const body = await request.json();
  try {
    const conn = await getPlanetScaleConnection();
    const results = await conn.execute('DELETE FROM user WHERE id = ?', [body.id]);
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error('Error deleting user:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete user' }), { status: 500 });
  }
};

export const PUT = async ({ request }: any) => {
  const body = await request.json();
  try {
    const conn = await getPlanetScaleConnection();
    const results = await conn.execute(
      `
        UPDATE user
        SET email = ?, name = ?, last_name = ?, phone_number = ?, location = ?, age = ?, alias_name = ?, avatar_url = ?
        WHERE id = ?
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
        body.id,
      ]
    );

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error('Error updating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to update user' }), { status: 500 });
  }
};

export const PATCH = async ({ request }: any) => {
  const body = await request.json();
  try {
    const conn = await getPlanetScaleConnection();
    const keys = Object.keys(body);
    const values = Object.values(body);

    const setString = keys.map((key, i) => `${key} = ?`).join(', ');
    values.push(body.id);

    const results = await conn.execute(`UPDATE user SET ${setString} WHERE id = ?`, values);

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error('Error partially updating user:', error);
    return new Response(JSON.stringify({ error: 'Failed to partially update user' }), { status: 500 });
  }
};