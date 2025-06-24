import { z } from "zod";

export const AddProjectSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Название проекта не может быть пустым" }),
  description: z.string().optional(),
});
