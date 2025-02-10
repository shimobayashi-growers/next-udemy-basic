'use server'

import { redirect } from "next/navigation"

export async function submitContactForm(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')

    // バリデーション
    // DB登録

    console.log(name, email)
    redirect('/contacts/complete')
}