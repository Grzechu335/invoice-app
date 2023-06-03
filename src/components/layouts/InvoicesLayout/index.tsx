import InvoiceItem from '@/components/organisms/InvoiceItem'
import React from 'react'
import { Invoice } from '../../../../types/invoice'

type InvoicesLayoutProps = {
    invoices: Invoice[]
}

const InvoicesLayout: React.FC<InvoicesLayoutProps> = ({ invoices }) => {
    if (invoices.length === 0) return <h1>No invoices</h1>
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
