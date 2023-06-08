export const dynamic = 'force-dynamic'

import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { prisma } from '../../utils/prisma'

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
