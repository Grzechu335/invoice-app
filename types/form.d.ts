import { Item } from './invoice'

export interface FormData {
    senderAddress: Address
    clientAddress: Address
    clientName: string
    clientEmail: string
    description: string
    items: Item[]
    createdAt: Date
    paymentTerms: string
}

interface Address {
    street: string
    city: string
    postCode: string
    country: string
}
