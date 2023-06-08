import { NextRequest } from 'next/server'
import { prisma } from '../../../../utils/prisma'

export async function POST(req: NextRequest) {
    const data: {
        id: string
    } = await req.json()
    await prisma.invoice.update({
        data: {
            status: 'Paid',
        },
        where: {
            id: data.id,
        },
    })
}
