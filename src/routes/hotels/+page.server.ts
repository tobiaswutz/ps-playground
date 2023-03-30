import { getAllHotels } from '../api/hotel';
import { getAllUsers } from '../api/users';
import type { Actions, PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  const responseHotels = await getAllHotels();
  const responseUsers = await getAllUsers();
  const hotels = responseHotels.body.hotels;
  const users = responseUsers.body.users;

  return { props: { hotels, users } };
}) satisfies PageServerLoad;


export const actions = {
  default: async (event) => {
    console.log('default action', event);
  }
} satisfies Actions;
