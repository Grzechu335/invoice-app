import { NextRequest, NextResponse } from 'next/server'
import { updatedInvoice } from '../../../../types/invoice'
import addDaysToDate from '../../../../utils/addDaysToDate'
import { prisma } from '../../../../utils/prisma'

export async function POST(req: NextRequest) {
    const data: {
        updatedInvoice: updatedInvoice
    } = await req.json()

    try {
        await prisma.invoice.update({
            data: {
                ...data.updatedInvoice,
                paymentDue: addDaysToDate(
                    data.updatedInvoice.createdAt,
                    Number(data.updatedInvoice.paymentTerms)
                ),
            },
            where: {
                id: data.updatedInvoice.id,
            },
        })
        return NextResponse.json({ status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: 403,
            message: 'Failed while updating invoice',
        })
    }
}
