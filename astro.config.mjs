import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
export default defineConfig({
  trailingSlash: 'always',
  site: process.env.SITE_URL || 'https://example.com',
  base: process.env.BASE_PATH || '/',
  markdown: { processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }) }
});
