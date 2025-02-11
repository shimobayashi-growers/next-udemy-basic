'use server'

import { ContactSchema } from "@/validations/contact"
import { redirect } from "next/navigation"

// ActionStateの型定義
type ActionState = {
    success: boolean
    errors: {
        name?: string[]
        email?: string[]
    };
    serverErrors?: string
}


export async function submitContactForm(
    prevState: ActionState,
    formData: FormData
): Promise<ActionState> 
{
    const name = formData.get('name')
    const email = formData.get('email')

    // バリデーション
    const validationResult = ContactSchema.safeParse({
        name,
        email
    })
    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors
        console.log(errors)
        return {
            success: false,
            errors: {
                name: errors.name || [],
                email: errors.email || []
            }
        }
    }
    // DB登録

    console.log(name, email)
    redirect('/contacts/complete')
}