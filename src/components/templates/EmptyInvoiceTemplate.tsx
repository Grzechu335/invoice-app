import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/assets/illustration-empty.svg'

type Props = {}

const EmptyInvoiceTemplate = (props: Props) => {
    return (
        <div className="fixed inset-0 grid place-content-center mx-auto gap-[66px]">
            <Image
                src={emptyImage}
                alt="no invoices image"
                className="mx-auto"
            />
            <div className="flex flex-col space-y-6 text-center">
                <h2 className="heading-md">There is nothing here</h2>
                <p className="body-variant">
                    {' '}
                    Create an invoice by clicking the New Invoice button and get
                    started
                </p>
            </div>
        </div>
    )
}

export default EmptyInvoiceTemplate
