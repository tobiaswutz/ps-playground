import { PUBLIC_BASE_URL } from '$env/static/public';

export const load = (async ({ params }) => {
	try {
		const response = await fetch(PUBLIC_BASE_URL + 'api/users');
		const data = await response.json();

		return {
			props: {
				data
			}
		};
	} catch (error) {
		return {
			props: {
				data: null
			}
		};
	}
})