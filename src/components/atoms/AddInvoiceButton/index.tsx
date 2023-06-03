import React from 'react'
import PlusIcon from 'public/assets/icon-plus.svg'
import Image from 'next/image'

const AddInvoiceButton: React.FC = () => {
    return (
        <button className="bg-color-1 hover:bg-color-2 rounded-full !text-white h-11 md:h-12 w-full flex items-center gap-2 md:gap-4 cursor-pointer p-[6px] md:p-[8px] md:w-[150px] ">
            <div className="grid w-8 h-8 bg-white rounded-full place-content-center">
                <Image
                    src={PlusIcon}
                    alt="add invoice icon"
                />
            </div>
            <p className="heading-sm-variant">
                <span className="hidden md:inline ">New </span>
                Invoice
            </p>
        </button>
    )
}

export default AddInvoiceButton
