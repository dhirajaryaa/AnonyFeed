import z from "zod";

export const signInSchema = z.object({
  identifier: z.string(),
  password: z
    .string()
    .min(2, { message: "password must be at least 2 characters" }),
});
