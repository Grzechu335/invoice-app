import React from 'react'
import { Invoice } from '../../../../types/invoice'
import currencyFormatter from '../../../../utils/currencyFormatter'

type Props = {}

const InvoiceItems: React.FC<Invoice> = ({ items, total }) => {
    return (
        <div className="bg-[#F9FAFE] mt-12 dark:bg-color-4 rounded-[8px]">
            <div className="p-6">
                <div className="hidden grid-cols-5 md:grid md:mb-8 !text-color-7 body-variant dark:!text-color-5">
                    <p className="col-span-2">Item name</p>
                    <p className="text-center">QTY.</p>
                    <p className="text-end">Price</p>
                    <p className="text-end">Total</p>
                </div>
                <div className="flex flex-col space-y-6 md:space-y-8">
                    {items.map(({ name, price, quantity, total }, idx) => (
                        <React.Fragment key={idx}>
                            <div className="hidden grid-cols-5 md:grid heading-sm-variant">
                                <p className="md:col-span-2">{name}</p>
                                <p className="md:text-center text-color-7 dark:text-color-5">
                                    {quantity}
                                </p>
                                <p className="md:text-end text-color-7 dark:text-color-5">
                                    {currencyFormatter(price)}
                                </p>
                                <p className="md:text-end">
                                    {currencyFormatter(total)}
                                </p>
                            </div>
                            <div className="flex items-center justify-between md:hidden heading-sm-variant">
                                <div className="flex flex-col space-y-2">
                                    <p>{name}</p>
                                    <p className="text-color-7">
                                        {quantity} x {currencyFormatter(price)}
                                    </p>
                                </div>
                                <div>
                                    <p>{currencyFormatter(total)}</p>
                                </div>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="bg-[#373B53] dark:bg-black rounded-b-[8px] p-6 flex items-center w-full">
                <div className="flex items-center justify-between w-full text-[#fff] body-variant">
                    <p className="hidden md:inline">Amount Due</p>
                    <p className="md:hidden">Grand Total</p>
                    <p className="heading-md">{currencyFormatter(total)}</p>
                </div>
            </div>
        </div>
    )
}

export default InvoiceItems
