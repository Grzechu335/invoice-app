import React from 'react'
import { Invoice } from '../../../../types/invoice'
import currencyFormatter from '../../../../utils/currencyFormatter'
import InvoicePersonalData from '@/components/molecules/InvoicePersonalData'
import InvoiceItems from '../InvoiceItems'

const InvoiceDetails: React.FC<{ invoice: Invoice }> = ({ invoice }) => {
    return (
        <div className="shadow-md rounded-[8px] py-6 px-8 bg-[#fff] dark:bg-color-3">
            <InvoicePersonalData {...invoice} />
            <InvoiceItems {...invoice} />
        </div>
    )
}

export default InvoiceDetails
