import InvoicePersonalData from '@/components/molecules/InvoicePersonalData'
import React from 'react'
import InvoiceItems from '../InvoiceItems'
import { Invoice } from '@prisma/client'

const InvoiceDetails: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
    return (
        <div className="shadow-md rounded-[8px] py-6 px-8 bg-[#fff] dark:bg-color-3">
            <InvoicePersonalData {...invoice} />
            <InvoiceItems {...invoice} />
        </div>
    )
}

export default InvoiceDetails
