import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import prisma from '../../utils/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'

export default async function Home() {
    const session = await getServerSession(authOptions)

    if (!session) redirect('/api/auth/signin')
    const invoices = await prisma.invoice.findMany({
        where: {
            authorId: session.user.id,
        },
    })

    return (
        <>
            <Dashboard invoices={invoices} />
            <Modals />
        </>
    )
}
