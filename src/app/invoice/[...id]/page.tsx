'use client'
import GoBackButton from '@/components/atoms/GoBackButton'
import Modals from '@/components/modals'
import InvoiceDetails from '@/components/organisms/InvoiceDetails'
import InvoiceSettings from '@/components/organisms/InvoiceSettings'
import { invoices } from '@data/data'
import { useSession } from 'next-auth/react'
import { redirect, useParams } from 'next/navigation'
export default function Page() {
    const { id: routeId } = useParams()
    const invoice = invoices.filter((invoice) => invoice.id === routeId)[0]
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        },
    })
    return (
        <main className="flex flex-col space-y-6 pb-[80px]">
            <GoBackButton />
            <InvoiceSettings status={invoice.status} />
            <InvoiceDetails invoice={invoice} />
            <Modals invoice={invoice} />
        </main>
    )
}
