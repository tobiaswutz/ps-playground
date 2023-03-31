import type { PageLoad } from './$types';
import { VITE_BASE_URL } from '$env/static/private';

export const load = (async ({ params }) => {
	try {
		const response = await fetch(VITE_BASE_URL + 'api/users');
		const data = await response.json();

		return {
			props: {
				data
			}
		};
	} catch (error) {
		// console.error(error);
		return {
			props: {
				data: null
			}
		};
	}
}) satisfies PageLoad;
