import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import prisma from '../../utils/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'

export default async function Home() {
    const session = await getServerSession(authOptions)
    const invoices = await prisma.invoice.findMany({
        where: {
            userId: session?.user.id,
        },
    })
    return (
        <>
            <Dashboard invoices={invoices} />
            <Modals />
        </>
    )
}
