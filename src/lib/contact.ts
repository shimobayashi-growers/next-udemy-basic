import { prisma } from "@/lib/prisma"

// 全件取得
export async function getContacts() {
    return await prisma.contact.findMany({
        select: {
            id: true,
            name: true,
            email: true
        },
        orderBy: {
            createdAt: 'desc',
        }
    })
}

// １件のみ取得
export async function getContact(id: string) {
    return await prisma.contact.findFirst({
        select: {
            name: true,
            email: true
        }
    })
}

