'use client'
import React from 'react'
import InvoiceStatus from '@/components/molecules/InvoiceStatus'
import currencyFormatter from '../../../../utils/currencyFormatter'
import { useRouter } from 'next/navigation'
import { Invoice } from '@prisma/client'
import dateFormatter from '../../../../utils/dateFormatter'

const InvoiceItem: React.FC<Invoice> = ({
    id,
    clientName,
    status,
    paymentDue,
    items,
}) => {
    const router = useRouter()
    const total = items.reduce((acc, cur) => {
        acc += cur.price * cur.quantity
        return acc
    }, 0)
    return (
        <div
            onClick={() => router.push(`invoice/${id}`)}
            className="shadow-md body-variant grid p-[32px] bg-white dark:bg-color-3 rounded-[8px] cursor-pointer grid-areas-invoiceListSmall md:grid-areas-invoiceListWide grid-cols-[1fr_1fr] grid-rows-[1fr_1fr_1fr] md:grid-rows-1 md:grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-[9px] md:gap-[65px]"
        >
            <p className="flex items-center font-bold uppercase text-color-8 dark:text-white grid-in-id">
                <span className="text-color-7">#</span>
                {id}
            </p>
            <p className="!text-[#858BB2] dark:text-white grid-in-date flex items-center">
                Due {dateFormatter(paymentDue)}
            </p>
            <p className="flex items-center justify-end md:justify-start grid-in-name">
                {clientName}
            </p>
            <p className="flex items-center justify-start font-bold text-black md:justify-end dark:text-white grid-in-total">
                {currencyFormatter(total)}
            </p>
            {/* @ts-ignore */}
            <InvoiceStatus status={status} />
        </div>
    )
}

export default InvoiceItem
