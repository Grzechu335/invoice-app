import React from 'react'
import { Invoice } from '../../../../types/invoice'
import currencyFormatter from '../../../../utils/currencyFormatter'
import InvoiceStatus from '@/components/molecules/InvoiceStatus'
import InvoiceItem from '@/components/organisms/InvoiceItem'

type InvoicesLayoutProps = {
    invoices: Invoice[]
}

const InvoicesLayout: React.FC<InvoicesLayoutProps> = ({ invoices }) => {
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
