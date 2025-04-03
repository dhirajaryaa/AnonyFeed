import z from "zod";

export const allowMessageSchema = z.object({
    isMessageAccepting: z.boolean()
});
