import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://convelations.vercel.app/',
  integrations: [
    starlight({
      title: 'Convelations',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en'
        },
        'hi': {
          label: 'हिंदी',
          lang: 'hi'
        }
      },
      head: [
        {
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com',
            rel: 'preconnect',
          },
          tag: 'link',
          attrs: {
            href: 'https://fonts.gstatic.com',
            rel: 'preconnect',
            crossorigin: true,
          },
          tag: 'link',
          attrs: {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
            rel: 'stylesheet',
          },
        },
      ],
      components:{
        Head: './src/components/Head.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/tailwind.css',
      ],
      social: {
        'x.com': 'https://x.com/at_the_vr',
      },
      sidebar: [
        {
          label: 'Discord',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Key Points around Discord',
              link: '/discord/key-points/',
            },
            {
              label: 'First Steps',
              link: '/discord/first-steps/',
            },
            {
              label: 'Support Guy',
              link: '/discord/support-guy/',
            },
          ],
        },
        {
          label: 'GitHub',
          items: [
            {
              label: 'Key Points around GitHub',
              link: '/github/key-points/',
            },
            {
              label: 'First Steps',
              link: '/github/first-steps/',
            },
          ],
        },
      ],
    }),
    tailwind({
      // Disable the default base styles:
      applyBaseStyles: false,
    }),
  ],
});
