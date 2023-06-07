import { Invoice } from '@prisma/client'

export type newInvoice = Omit<
    Invoice,
    'id' | 'paymentDue' | 'status' | 'userId'
>
