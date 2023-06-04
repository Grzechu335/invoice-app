import { Item } from './invoice'

export interface FormData {
    sender: Address
    client: Address
    clientsName: string
    clientsEmail: string
    description: string
    items: Item[]
    invoiceDate: Date
    paymentsTerms: string
}

interface Address {
    street: string
    city: string
    postCode: number
    country: string
}
