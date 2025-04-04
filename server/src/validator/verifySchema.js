import z from "zod";

export const verifySchema = z.object({
  code: z.number().min(6, "Verfication code must be 6 digts"),
  username: z.string().min(2, "Verfication code must be 2 cheracters"),
});
