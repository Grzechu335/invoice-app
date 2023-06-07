import { NextRequest } from 'next/server'
import prisma from '../../../../utils/prisma'

// There is problem with delete method, so im using post
export async function POST(req: NextRequest) {
    const data: {
        id: string
    } = await req.json()
    await prisma.invoice.delete({
        where: {
            id: data.id,
        },
    })
}
