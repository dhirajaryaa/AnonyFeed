import z from "zod";
// username check
export const usernameValidter = z
  .string()
  .min(2, "username must be at least 2 characters")
  .max(50, "username must be no more then 50 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "username must not contain special characters");

export const signUpSchema = z.object({
  username: usernameValidter,
  email: z.string().email({ message: "Email is not valid" }),
  password: z
    .string()
    .min(2, { message: "password must be at least 2 characters" }),
});
