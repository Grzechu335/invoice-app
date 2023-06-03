'use client'
import useFilterContext from '@/hooks/useFilterContext'
import React from 'react'
import { Invoice } from '../../../types/invoice'
import InvoicesLayout from '../layouts/InvoicesLayout'
import InvoicesNavigation from '../organisms/InvoicesNavigation'

type DashboardProps = {
    invoices: Invoice[]
}

const Dashboard: React.FC<DashboardProps> = ({ invoices }) => {
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
