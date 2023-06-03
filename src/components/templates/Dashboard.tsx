'use client'
import React, { useState } from 'react'
import { Invoice } from '../../../types/invoice'
import InvoicesLayout from '../layouts/InvoicesLayout'
import InvoicesNavigation from '../organisms/InvoicesNavigation'
import useFilterContext from '@/hooks/useFilterContext'

type DashboardProps = {
    invoices: Invoice[]
}

const Dashboard: React.FC<DashboardProps> = ({ invoices }) => {
    const { filters } = useFilterContext()
    const filtredData = [...invoices].filter(
        (invoice) => filters[invoice.status]
    )
    return (
        <div className="grid grid-cols-12 overflow-hidden">
            <div className="h-screen col-start-3 col-end-11 xl:mt-[77px] md:mt-[140px] mt-[104px] ">
                <InvoicesNavigation qty={filtredData.length} />
                <InvoicesLayout invoices={filtredData} />
            </div>
        </div>
    )
}

export default Dashboard
