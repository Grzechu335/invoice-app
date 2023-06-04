'use client'
import CustomButton from '@/components/atoms/CustomButton'
import FilterInvoice from '@/components/molecules/FilterInvoice'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'

type InvoicesNavigationProps = { qty: number }

const InvoicesNavigation: React.FC<InvoicesNavigationProps> = ({ qty }) => {
    const { toggleNewModal } = useModalContext()
    return (
        <div className="flex items-center justify-between h-[55px]">
            <div className="text-color-6 text-[13px] flex flex-col space-y-[6px] leading-[15px] tracking-[-0.1px]">
                <h1 className="heading-lg">Invoices</h1>
                {qty !== 0 ? (
                    <>
                        <p className="hidden md:inline">
                            There are total {qty} invoices
                        </p>
                        <p className="md:hidden">{qty} invoices</p>{' '}
                    </>
                ) : (
                    <p>No invoices</p>
                )}
            </div>
            <div className="flex space-x-[40px]">
                <div className="relative flex items-center">
                    <FilterInvoice />
                </div>
                <CustomButton
                    variant={1}
                    onClick={toggleNewModal}
                >
                    <p className="mr-2 heading-sm-variant">
                        <span className="hidden md:inline ">New </span>
                        Invoice
                    </p>
                </CustomButton>
            </div>
        </div>
    )
}

export default InvoicesNavigation
