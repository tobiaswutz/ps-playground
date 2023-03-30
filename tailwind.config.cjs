const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'bg-dark': '#141414',
				'bg-light': '#F9FAFB'
			}
		}
	},

	plugins: [require('@tailwindcss/forms')]
};

module.exports = config;
