import { z } from "zod"

const languageSchema = z.object({
    code: z.string(),
    description: z.string()
})

export const categorySchema = z.object({
    id: z.string(),
    languageId: z.string(),
    name: z.string(),
    imageUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const brandSchema = z.object({
    id: z.string(),
    languageId: z.string(),
    name: z.string(),
    imageUrl: z.string().nullable(),
    createdAt: z.string(),
    updatedAt: z.string()
})

export const productsSchema = z.object({
    id: z.string(),
    model: z.string(),
    shortDescriptionEn: z.string(),
    shortDescriptionAr: z.string(),
    stock: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    isFeatured: z.boolean(),
    isLive: z.boolean(),
    price: z.number(),
    taxValue: z.number(),
    brand: brandSchema,
    category: categorySchema,

})

export const sliderCarouselWideSchema = z.object({
    id: z.string(),
    label: z.string(),
    imageUrl: z.string().url(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});