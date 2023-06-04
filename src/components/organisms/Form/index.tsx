'use client'
import { CustomInput } from '@/components/atoms/CustomInput'
import GoBackButton from '@/components/atoms/GoBackButton'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'
import CustomDatePicker from '../CustomDatePicker'
import { Invoice } from '../../../../types/invoice'
import CustomSelect from '../CustomSelect'
import CustomButton from '@/components/atoms/CustomButton'
import DeleteIcon from 'public/assets/icon-delete.svg'
import Image from 'next/image'

type FormProps = {
    invoice?: Invoice
}

const Form: React.FC<FormProps> = ({ invoice }) => {
    const { toggleNewModal } = useModalContext()
    return (
        <div className="flex flex-col space-y-10 pb-52 md:pb-32">
            <GoBackButton
                onClick={toggleNewModal}
                className="md:hidden"
            />
            <h2 className="heading-md">
                {invoice ? (
                    <p>
                        Edit<span className="text-color-6">#</span>
                        {invoice.id}
                    </p>
                ) : (
                    'New Invoice'
                )}
            </h2>
            <div>
                <h3 className="mb-6 text-color-1 heading-sm-variant">
                    Bill from
                </h3>
                <div className="grid grid-cols-2 grid-rows-3 gap-6 grid-areas-billFromSmall md:grid-areas-billFromWide md:grid-cols-3 md:grid-rows-2">
                    <CustomInput
                        label="Street Address"
                        className="grid-in-senderStreet"
                    />
                    <CustomInput
                        label="City"
                        className="grid-in-senderCity"
                    />
                    <CustomInput
                        label="Post Code"
                        className="grid-in-senderPostCode"
                    />
                    <CustomInput
                        label="Country"
                        className="grid-in-senderCountry"
                    />
                </div>
            </div>
            <div>
                <h3 className="mb-6 text-color-1 heading-sm-variant">
                    Bill To
                </h3>
                <div className="grid grid-cols-2 grid-rows-5 gap-6 grid-areas-billToSmall md:grid-areas-billToWide md:grid-cols-3 md:grid-rows-4 ">
                    <CustomInput
                        label="Client's Name"
                        className="grid-in-clientName"
                    />
                    <CustomInput
                        label="Client's Email"
                        className="grid-in-clientEmail"
                    />
                    <CustomInput
                        label="Street Address"
                        className="grid-in-clientStreet"
                    />
                    <CustomInput
                        label="City"
                        className="grid-in-clientCity"
                    />
                    <CustomInput
                        label="Post Code"
                        className="grid-in-clientPostCode"
                    />
                    <CustomInput
                        label="Country"
                        className="grid-in-clientCountry"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <CustomDatePicker
                    label="Invoice Date"
                    className="md:col-span-1"
                />
                <CustomSelect
                    label="Payment Terms"
                    className="md:grid-span-1"
                />
                <CustomInput
                    label="Project Description"
                    className="col-span-full"
                />
            </div>
            <div>
                <h4 className="font-bold text-[18px] leading-[32px] tracking-[-0.375px] text-[#777F98] mb-4">
                    Item List
                </h4>
                <div className="hidden grid-cols-12 gap-4 mb-4 body-variant text-color-7 md:grid">
                    <p className="col-span-4">Item name</p>
                    <p className="col-span-2">Qty.</p>
                    <p className="col-span-2">Price</p>
                    <p className="col-span-3">Total</p>
                </div>
                <div className="grid grid-cols-12 gap-4">
                    <CustomInput
                        labelOnSmallDevices
                        label="Item name"
                        className="col-span-full md:col-span-4"
                    />
                    <CustomInput
                        labelOnSmallDevices
                        label="Qty."
                        className="col-span-3 md:col-span-2"
                    />
                    <CustomInput
                        labelOnSmallDevices
                        label="Price"
                        className="col-span-4 md:col-span-2"
                    />
                    <CustomInput
                        labelOnSmallDevices
                        disabled
                        label="Total"
                        className="col-span-4 md:col-span-3"
                    />
                    <Image
                        src={DeleteIcon}
                        alt="delete item icon"
                        className="relative w-[18px] mx-auto my-auto md:static top-3"
                    />
                </div>
                <div>
                    <CustomButton
                        variant={6}
                        className="flex items-center justify-center w-full mt-12 md:mt-4"
                    >
                        + Add New Item
                    </CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Form
