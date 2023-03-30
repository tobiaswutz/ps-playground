import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const response = await fetch(`https://ps-playground.vercel.app/api/users`);
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
