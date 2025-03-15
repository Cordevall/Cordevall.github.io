import { z, defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
	schema: z.object({
		title: z.string(),
		author: reference('authors'),
		date: z.date(),
		desc: z.date(),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: 'src/content/news' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		desc: z.string(),
	}),
})

const author = defineCollection({
	loader: glob({ pattern: '**/*.json', base: 'src/content/authors' }),
	schema: z.object({
		name: z.string(),
		role: z.string(),
		img: z.string(),
	}),
});


export const collections = { blog, news, author };
