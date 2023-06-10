import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../utils/prisma'

// There is problem with delete method, so im using post
export async function POST(req: NextRequest) {
    const data: {
        id: string
    } = await req.json()

    try {
        await prisma.invoice.delete({
            where: {
                id: data.id,
            },
        })
        return NextResponse.json({ status: 200 })
    } catch (err) {
        return NextResponse.json({
            status: 404,
            message: 'Failed while deleting invoice',
        })
    }
}
