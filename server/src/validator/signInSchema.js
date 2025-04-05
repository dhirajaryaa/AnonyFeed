import z from "zod";

export const signInSchema = z.object({
  identifier: z.union([
    z.string().email({ message: "Invalid email address" }),
    z.string().min(3, { message: "Username must be at least 3 characters" }),
  ]),
  password: z
    .string()
    .min(2, { message: "password must be at least 2 characters" }),
});
