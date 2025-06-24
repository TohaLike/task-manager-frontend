import { z } from "zod";

export const AddTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Название проекта не может быть пустым" }),

  description: z.string().optional(),
});
