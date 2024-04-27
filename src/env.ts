import { z } from "zod";

const envSchema = z.object({
  NEXT_DEV_API_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
