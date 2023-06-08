import { Invoice } from '@prisma/client'

export type newInvoice = Omit<
    Invoice,
    'id' | 'paymentDue' | 'status' | 'authorId'
>

export type updatedInvoice = Omit<Invoice, 'paymentDue'>

export type dashboardInvoice = Pick<
    Invoice,
    'id' | 'clientName' | 'status' | 'paymentDue' | 'items'
>
