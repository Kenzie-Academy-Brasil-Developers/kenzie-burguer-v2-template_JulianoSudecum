import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, {message: "Nome é obrigatorio"}),
  email: z.string().min(1, {message: "E-mail é obrigatório"}).email("Insira um email valido"),
  password: z.string().min(6, {message: "Insira uma senha de no minimo 6 caracteres"}),
  confirm: z.string().min(6, {message: "Insira uma senha igual"})
}).refine(({password, confirm})=> confirm === password, {
  message: "As senhas não correspondem",
  path: ["confirm"]
})

export type TRegisterValues = z.infer<typeof registerFormSchema>