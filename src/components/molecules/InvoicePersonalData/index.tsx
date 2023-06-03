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
}) => {
    return (
        <div className="grid md:grid-cols-4 md:grid-rows-3 grid-cols-2 grid-rows-[1fr_2fr_1fr_1fr_1fr] grid-areas-invoiceDetailsSmall md:grid-areas-invoiceDetailsWide">
            <div className="grid-in-id">
                <p>
                    <span>#</span>
                    {id}
                </p>
                <p>{description}</p>
            </div>
            <div className="flex flex-col grid-in-sender">
                <p>{senderAddress.street}</p>
                <p>{senderAddress.city}</p>
                <p>{senderAddress.postCode}</p>
                <p>{senderAddress.country}</p>
            </div>
            <div className="grid-in-invoiceDate">
                <p>Invoice Date</p>
                <p>{createdAt}</p>
            </div>
            <div className="grid-in-paymentDue">
                <p>Payment Due</p>
                <p>{paymentDue}</p>
            </div>
            <div className="grid-in-client">
                <p>Bill to</p>
                <p>{clientAddress.street}</p>
                <p>{clientAddress.city}</p>
                <p>{clientAddress.postCode}</p>
                <p>{clientAddress.country}</p>
            </div>
            <div className="grid-in-mail">
                <p>Sent to</p>
                <p>{clientEmail}</p>
            </div>
        </div>
    )
}

export default InvoicePersonalData
