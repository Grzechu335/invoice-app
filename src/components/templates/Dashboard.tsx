'use client'
import useFilterContext from '@/hooks/useFilterContext'
import React from 'react'
import InvoicesLayout from '../layouts/InvoicesLayout'
import InvoicesNavigation from '../organisms/InvoicesNavigation'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Invoice } from '@prisma/client'

type DashboardProps = {
    invoices: Invoice[]
}

const Dashboard: React.FC<DashboardProps> = ({ invoices }) => {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin')
        },
    })
    const { filters } = useFilterContext()
    const filtredData = [...invoices].filter(
        (invoice) => filters[invoice.status]
    )
    return (
        <>
            <InvoicesNavigation qty={filtredData.length} />
            <InvoicesLayout invoices={filtredData} />
        </>
    )
}

export default Dashboard
