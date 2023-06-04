import React from 'react'
import { Invoice } from '../../../../types/invoice'

const InvoicePersonalData: React.FC<Invoice> = ({
    id,
    clientEmail,
    description,
    senderAddress,
    createdAt,
    paymentDue,
    clientAddress,
    clientName,
}) => {
    return (
        <div className="grid md:grid-cols-4 md:grid-rows-3 gap-2 md:gap-4 grid-cols-2 grid-rows-[1fr_2fr_1fr_1fr_1fr] grid-areas-invoiceDetailsSmall md:grid-areas-invoiceDetailsWide">
            <div className="flex flex-col space-y-2 grid-in-id">
                <p className="text-color-8 dark:text-[#fff] heading-sm">
                    <span className="text-color-6">#</span>
                    {id}
                </p>
                <p className="text-color-7 dark:text-color-5 body-variant">
                    {description}
                </p>
            </div>
            <div className="flex flex-col grid-in-sender text-color-7 text-start md:text-end dark:text-color-5 body-variant">
                <p>{senderAddress.street}</p>
                <p>{senderAddress.city}</p>
                <p>{senderAddress.postCode}</p>
                <p>{senderAddress.country}</p>
            </div>
            <div className="flex flex-col space-y-3 grid-in-invoiceDate">
                <p className="text-color-7 dark:text-color-5 body-variant">
                    Invoice Date
                </p>
                <p className="text-color-8 dark:text-[#fff] heading-sm">
                    {createdAt}
                </p>
            </div>
            <div className="flex flex-col space-y-3 grid-in-paymentDue">
                <p className="text-color-7 dark:text-color-5 body-variant">
                    Payment Due
                </p>
                <p className="text-color-8 dark:text-[#fff] heading-sm">
                    {paymentDue}
                </p>
            </div>
            <div className="flex flex-col grid-in-client text-end md:text-start">
                <p className="text-color-7 dark:text-color-5 body-variant">
                    Bill to
                </p>
                <p className="text-color-8 dark:text-[#fff] heading-sm mt-3">
                    {clientName}
                </p>
                <div className="mt-2">
                    <p>{clientAddress.street}</p>
                    <p>{clientAddress.city}</p>
                    <p>{clientAddress.postCode}</p>
                    <p>{clientAddress.country}</p>
                </div>
            </div>
            <div className="grid-in-mail">
                <p className="text-color-7 dark:text-color-5 body-variant">
                    Sent to
                </p>
                <p className="text-color-8 dark:text-[#fff] heading-sm mt-3">
                    {clientEmail}
                </p>
            </div>
        </div>
    )
}

export default InvoicePersonalData
