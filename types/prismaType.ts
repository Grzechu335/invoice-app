import type { Invoice } from '@prisma/client'

declare global {
    namespace PrismaJson {
        export type Item = {
            name: string
            quantity: number
            price: number
        }
        export type Address = {
            street: string
            city: string
            postCode: string
            country: string
        }
    }
}

// To generate this types run npx prisma generate!!!!
