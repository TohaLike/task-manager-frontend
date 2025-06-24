import { z } from "zod";

export const AuthSchema = z.object({
  email: z.string().email({message: "Неверный формат электронной почты"}),
  password: z.string().min(8, {message: "Пароль должен быть не менее 8 символов"}),
});
