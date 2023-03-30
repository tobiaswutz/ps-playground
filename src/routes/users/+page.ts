import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const response = await fetch(`http://localhost:5173/api/users`);
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
