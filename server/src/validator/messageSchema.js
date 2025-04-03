import z from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(8, "content must be at least 8 characters")
    .max(300, "username must be no longer then 300 characters"),
});
