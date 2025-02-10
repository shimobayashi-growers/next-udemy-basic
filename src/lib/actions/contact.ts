'use server'

import { ContactSchema } from "@/validations/contact"
import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')

    // バリデーション
    const validationResult = ContactSchema.safeParse({
        name,
        email
    })
    if (!validationResult.success) {
        const errors = validationResult.error.flatten()
        console.log(errors)
        return {}
    }
    // DB登録

    console.log(name, email)
    redirect('/contacts/complete')
}