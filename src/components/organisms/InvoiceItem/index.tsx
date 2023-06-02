import React from 'react'
import { Invoice } from '../../../../types/invoice'
import InvoiceStatus from '@/components/molecules/InvoiceStatus'
import currencyFormatter from '../../../../utils/currencyFormatter'

type Props = {}

const InvoiceItem: React.FC<Invoice> = ({
    id,
    clientName,
    total,
    status,
    paymentDue,
}) => {
    return (
        <div className="shadow-md body-variant grid grid-cols-12 p-[32px] bg-white dark:bg-color-3 rounded-[8px]">
            <p className="font-bold uppercase text-color-8 dark:text-white">
                <span className="text-color-7">#</span>
                {id}
            </p>
            <p className="!text-[#858BB2] dark:text-white">Due {paymentDue}</p>
            <p>{clientName}</p>
            <p className="font-bold text-black dark:text-white">
                {currencyFormatter(total)}
            </p>
            {/* @ts-ignore */}
            <InvoiceStatus status={status} />
        </div>
    )
}

export default InvoiceItem
