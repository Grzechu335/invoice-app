import InvoiceItem from '@/components/organisms/InvoiceItem'
import EmptyInvoiceTemplate from '@/components/templates/EmptyInvoiceTemplate'
import { Invoice } from '@prisma/client'
import React from 'react'

type InvoicesLayoutProps = {
    invoices: Invoice[]
}

const InvoicesLayout: React.FC<InvoicesLayoutProps> = ({ invoices }) => {
    if (invoices.length === 0) return <EmptyInvoiceTemplate />
    return (
        <div className="xl:pt-[64px] md:pt-[55px] pt-[32px] flex flex-col space-y-[16px]">
            {invoices.map((invoice) => (
                <InvoiceItem
                    key={invoice.id}
                    {...invoice}
                />
            ))}
        </div>
    )
}

export default InvoicesLayout
