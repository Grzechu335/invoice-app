'use client'
import { CustomInput } from '@/components/atoms/CustomInput'
import GoBackButton from '@/components/atoms/GoBackButton'
import useModalContext from '@/hooks/useModalContext'
import React, { useEffect, useRef } from 'react'
import CustomDatePicker from '../CustomDatePicker'
import CustomSelect from '../CustomSelect'
import CustomButton from '@/components/atoms/CustomButton'
import Image from 'next/image'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'
import { FormData } from '../../../../types/form'
import { DevTool } from '@hookform/devtools'
import FormItem from '@/components/molecules/FormItem'
import { Invoice } from '@prisma/client'

type FormProps = {
    invoice?: Invoice
    form: UseFormReturn<FormData, any, undefined>
}

const Form: React.FC<FormProps> = ({ invoice, form }) => {
    const scrollDivRef = useRef<HTMLSpanElement>(null)
    const { register, control } = form
    const { closeAllModals } = useModalContext()
    const { fields, append, remove } = useFieldArray({ control, name: 'items' })

    useEffect(() => {
        const scrollToBottom = () => {
            scrollDivRef.current?.scrollIntoView({
                behavior: 'smooth',
            })
        }
        scrollToBottom()
    }, [fields])
    return (
        <div className="flex flex-col space-y-10 pb-52 md:pb-32">
            <GoBackButton
                onClick={closeAllModals}
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
                        {...register('senderAddress.street')}
                        label="Street Address"
                        className="grid-in-senderStreet"
                    />
                    <CustomInput
                        label="City"
                        className="grid-in-senderCity"
                        {...register('senderAddress.city')}
                    />
                    <CustomInput
                        {...register('senderAddress.postCode')}
                        label="Post Code"
                        className="grid-in-senderPostCode"
                    />
                    <CustomInput
                        {...register('senderAddress.country')}
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
                        {...register('clientName')}
                        label="Client's Name"
                        className="grid-in-clientName"
                    />
                    <CustomInput
                        {...register('clientEmail')}
                        label="Client's Email"
                        className="grid-in-clientEmail"
                    />
                    <CustomInput
                        {...register('clientAddress.street')}
                        label="Street Address"
                        className="grid-in-clientStreet"
                    />
                    <CustomInput
                        {...register('clientAddress.city')}
                        label="City"
                        className="grid-in-clientCity"
                    />
                    <CustomInput
                        {...register('clientAddress.postCode')}
                        label="Post Code"
                        className="grid-in-clientPostCode"
                    />
                    <CustomInput
                        {...register('clientAddress.country')}
                        label="Country"
                        className="grid-in-clientCountry"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <Controller
                    control={control}
                    name="createdAt"
                    render={({ field: { onChange, value } }) => (
                        <CustomDatePicker
                            onChange={onChange}
                            value={value}
                            label="Invoice Date"
                            className="md:col-span-1"
                        />
                    )}
                />
                <Controller
                    control={control}
                    name="paymentTerms"
                    render={({ field: { onChange, value } }) => (
                        <CustomSelect
                            label="Payment Terms"
                            className="md:grid-span-1"
                            onChange={onChange}
                            value={value}
                        />
                    )}
                />
                <CustomInput
                    {...register('description')}
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
                <div className="grid gap-10 md:gap-4">
                    {fields.map(({ id }, idx) => (
                        <FormItem
                            key={id}
                            idx={idx}
                            remove={remove}
                            register={register}
                            control={control}
                        />
                    ))}
                </div>
                <div>
                    <CustomButton
                        onClick={() => {
                            append({
                                name: 'Some item',
                                price: 1,
                                quantity: 1,
                            })
                        }}
                        variant={6}
                        className="flex items-center justify-center w-full mt-12 md:mt-4"
                    >
                        + Add New Item
                    </CustomButton>
                </div>
                <span
                    ref={scrollDivRef}
                    id="dummy span"
                />
            </div>
            <DevTool control={control} />
        </div>
    )
}

export default Form
