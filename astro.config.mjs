import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://convelations.vercel.app/',
	integrations: [
		starlight({
			title: 'Convelations',
			social: {
				github: 'https://github.com/at-the-vr',
				'x.com': 'https://x.com/at_the_vr',
			},
			sidebar: [
				{
					label: 'Discord',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Key Points', link: '/discord/key-points/' },
					],
				},
				{
					label: 'GitHub',
					autogenerate: { directory: 'github' },
				},
			],
		}),
	],
});
