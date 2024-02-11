import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            theme: 'vitesse-dark'
        },
        remarkPlugins: [
            'remark-math',
        ],
        rehypePlugins: [
            ['rehype-katex', {

            }]
        ]
    }
});