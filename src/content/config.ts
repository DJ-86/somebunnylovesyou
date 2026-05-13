import { defineCollection, z } from 'astro:content';

const rabbitsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    breed: z.string(),
    age: z.string(),
    gender: z.string(),
    temperament: z.string(),
    price: z.number(),
    status: z.enum(['Available', 'Reserved', 'Sold']),
    mainPhoto: z.string().optional(),
    photos: z.array(z.string()).optional(),
  }),
});

const accessoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    price: z.number(),
    photo: z.string().optional(),
    inStock: z.boolean().default(true),
  }),
});

const careCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    summary: z.string(),
    date: z.date().optional(),
  }),
});

export const collections = {
  rabbits: rabbitsCollection,
  accessories: accessoriesCollection,
  care: careCollection,
};