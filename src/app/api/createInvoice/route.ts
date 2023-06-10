import { authOptions } from '@/lib/authOptions'
import { Invoice } from '@prisma/client'
import { getServerSession } from 'next-auth'
import { NextRequest, NextResponse } from 'next/server'
import addDaysToDate from '../../../../utils/addDaysToDate'
import { prisma } from '../../../../utils/prisma'
import { newInvoice } from './../../../../types/invoice.d'

export async function POST(req: NextRequest) {
    const data: { newInvoice: newInvoice; type: 'new' | 'draft' } =
        await req.json()
    const session = await getServerSession(authOptions)
    if (session) {
        const invoiceToSend: Omit<Invoice, 'id'> = {
            ...data.newInvoice,
            status: data.type === 'new' ? 'Pending' : 'Draft',
            paymentDue: addDaysToDate(
                data.newInvoice.createdAt,
                Number(data.newInvoice.paymentTerms)
            ),
            authorId: session?.user.id,
        }
        try {
            const res = await prisma.invoice.create({
                data: invoiceToSend,
            })
            if (res) {
                return NextResponse.json({ status: 200 })
            }
        } catch (err) {
            return NextResponse.json({
                status: 404,
                error: 'Failed while fetching invoices',
            })
        }
    }
}
