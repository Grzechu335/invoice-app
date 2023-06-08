import GoBackButton from '@/components/atoms/GoBackButton'
import Modals from '@/components/modals'
import InvoiceDetails from '@/components/organisms/InvoiceDetails'
import InvoiceSettings from '@/components/organisms/InvoiceSettings'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/authOptions'
import { redirect } from 'next/navigation'
import { prisma } from '../../../../utils/prisma'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: { id: string } }) {
    const session = await getServerSession(authOptions)

    if (!session) redirect('/api/auth/signin')

    const invoice = await prisma.invoice.findUnique({
        where: {
            id: `${params.id}`,
        },
    })

    if (invoice)
        return (
            <main className="flex flex-col space-y-6 pb-[80px]">
                <GoBackButton />
                <InvoiceSettings
                    status={invoice.status}
                    id={invoice.id}
                />
                <InvoiceDetails invoice={invoice} />
                <Modals invoice={invoice} />
            </main>
        )
}
