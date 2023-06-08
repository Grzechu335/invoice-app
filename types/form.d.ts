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

interface Item {
    name: string
    quantity: number
    price: number
}
interface Address {
    street: string
    city: string
    postCode: string
    country: string
}
