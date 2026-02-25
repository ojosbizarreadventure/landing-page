import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: ({ path }) => {
				// Ignore missing images — they'll be added later
				if (/\.(png|jpg|jpeg|svg|webp)$/.test(path)) return;
			}
		}
	}
};

export default config;
