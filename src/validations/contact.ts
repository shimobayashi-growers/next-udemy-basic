import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string()
    .min(1, {message: '名前を入力してください'})
    .max(20, {message: '名前は20文字以内で入力してください'}),
    email: z.string()
    .min(1, {message: 'メールアドレスは必須です'})
    .email({message: 'メールアドレスを入力してください'}),
})

// 型の定義
export type ContactType = z.infer<typeof ContactSchema>