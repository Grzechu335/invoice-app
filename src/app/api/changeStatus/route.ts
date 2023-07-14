import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../utils/prisma'

export async function POST(req: NextRequest) {
    const data: {
        id: string
        status: 'Draft' | 'Pending'
    } = await req.json()

    try {
        await prisma.invoice.update({
            data: {
                status: data.status === 'Draft' ? 'Pending' : 'Paid',
            },
            where: {
                id: data.id,
            },
        })
        return NextResponse.json({ status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: 403,
            message: 'Failed while updating invoice status',
        })
    }
}
