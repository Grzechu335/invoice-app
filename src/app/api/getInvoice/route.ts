import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../utils/prisma'

export default async function getInvoice(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const invoiceId: string = req.body.id
    console.log(invoiceId)
}
