import { get } from '../api/hotel';
import type { PageServerLoad } from './$types';
 
export const load = (async ({ params }) => {
  const response = await get();
  const hotels = response.body.hotels;

  return { props: { hotels } };
}) satisfies PageServerLoad;