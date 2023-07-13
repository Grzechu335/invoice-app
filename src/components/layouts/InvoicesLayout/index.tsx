import InvoiceItem from '@/components/organisms/InvoiceItem'
import EmptyInvoiceTemplate from '@/components/templates/EmptyInvoiceTemplate'
import React from 'react'
import { dashboardInvoice } from '../../../../types/invoice'
import { motion as m } from 'framer-motion'

type InvoicesLayoutProps = {
    invoices: dashboardInvoice[]
}

const InvoicesLayout: React.FC<InvoicesLayoutProps> = ({ invoices }) => {
    if (invoices.length === 0) return <EmptyInvoiceTemplate />
    return (
        <m.div
            layout
            transition={{
                duration: 0.1,
            }}
            className="xl:pt-[64px] md:pt-[55px] pt-[32px] flex flex-col space-y-[16px] relative -z-10"
        >
            {invoices.map((invoice) => (
                <InvoiceItem
                    key={invoice.id}
                    {...invoice}
                />
            ))}
        </m.div>
    )
}

export default InvoicesLayout
