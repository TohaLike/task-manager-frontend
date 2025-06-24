import { z } from "zod";

export const AddUserSchema = z.object({
  email: z.string().email({message: "Неверный формат электронной почты"}),
});
