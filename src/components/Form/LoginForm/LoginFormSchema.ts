import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().min(1, {message: "E-mail é obrigatório"}).email("Insira um email valido"),
  password: z.string().min(1, { message: "Senha é obrigatória"})
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>