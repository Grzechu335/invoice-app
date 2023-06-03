import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/assets/illustration-empty.svg'

type Props = {}

const EmptyInvoiceTemplate = (props: Props) => {
    return (
        <div className="grid place-content-center mx-auto gap-[66px] overflow-hidden w-[200px] h-[calc(100vh-55px-100px)] md:h-[calc(100vh-55px-140px)] xl:h-[calc(100vh-55px-77px)]">
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
