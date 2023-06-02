import React from 'react'

type InvoicesNavigationProps = { qty: number }

const InvoicesNavigation: React.FC<InvoicesNavigationProps> = ({ qty }) => {
    return (
        <div className="flex items-center justify-between">
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
        </div>
    )
}

export default InvoicesNavigation
