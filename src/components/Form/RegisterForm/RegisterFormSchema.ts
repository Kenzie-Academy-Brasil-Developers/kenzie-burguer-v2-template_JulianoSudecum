import { z } from "zod";

export const registerFormSchema = z.object({
  name: z.string().min(1, {message: "Nome é obrigatorio"}),
  email: z.string().min(1, {message: "E-mail é obrigatório"}).email("Insira um email valido"),
  password: z
  .string()
  .min(7, {message: "Insira uma senha de no minimo 7 caracteres"})
  .regex(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caracter especial")
  .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
  .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
  .regex(/(?=.*?[0-9])/, "É necessário pelo menos um numero"),
  confirm: z.string().min(6, {message: "Insira uma senha igual"})
}).refine(({password, confirm})=> confirm === password, {
  message: "As senhas não correspondem",
  path: ["confirm"]
})

export type TRegisterValues = z.infer<typeof registerFormSchema>