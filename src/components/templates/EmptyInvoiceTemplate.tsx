import Image from 'next/image'
import React from 'react'
import emptyImage from 'public/assets/illustration-empty.svg'

type Props = {}

const EmptyInvoiceTemplate = () => {
    return (
        <div className="fixed inset-0 grid mx-auto place-content-center -z-10 bg-color-11 dark:bg-color-12">
            <div className="w-[200px] space-y-[66px] relative top-[72px] md:top-[80px] xl:top-0">
                <Image
                    src={emptyImage}
                    alt="no invoices image"
                    className="mx-auto"
                />
                <div className="flex flex-col space-y-6 text-center">
                    <h2 className="heading-md">There is nothing here</h2>
                    <p className="body-variant">
                        {' '}
                        Create an invoice by clicking the <i>
                            New Invoice
                        </i>{' '}
                        button and get started
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EmptyInvoiceTemplate
