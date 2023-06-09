'use client'
import CustomButton from '@/components/atoms/CustomButton'
import { CustomInput } from '@/components/atoms/CustomInput'
import GoBackButton from '@/components/atoms/GoBackButton'
import FormItem from '@/components/molecules/FormItem'
import useDidMountEffect from '@/hooks/useDidMountEffect'
import useModalContext from '@/hooks/useModalContext'
import { Invoice } from '@prisma/client'
import React, { useRef } from 'react'
import { Controller, UseFormReturn, useFieldArray } from 'react-hook-form'
import { FormData } from '../../../../types/form'
import CustomDatePicker from '../CustomDatePicker'
import CustomSelect from '../CustomSelect'
type FormProps = {
    invoice?: Invoice
    form: UseFormReturn<FormData, any, undefined>
}

const Form: React.FC<FormProps> = ({ invoice, form }) => {
    const scrollDivRef = useRef<HTMLDivElement>(null)
    const {
        register,
        control,
        formState: { errors },
    } = form
    const { closeAllModals } = useModalContext()
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'items',
        rules: {
            required: 'Please append at least 1 item',
            validate: {},
        },
    })
    useDidMountEffect(() => {
        const scrollToBottom = () => {
            scrollDivRef?.current?.scrollIntoView()
        }
        scrollToBottom()
    }, [fields])

    const addNewItem = (e: React.MouseEvent) => {
        e.preventDefault()
        append({
            name: 'Some item',
            price: 1,
            quantity: 1,
        })
    }
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
                        {...register('senderAddress.street', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Street Address"
                        className="grid-in-senderStreet"
                        error={errors.senderAddress?.street}
                    />
                    <CustomInput
                        label="City"
                        className="grid-in-senderCity"
                        {...register('senderAddress.city', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        error={errors.senderAddress?.city}
                    />
                    <CustomInput
                        {...register('senderAddress.postCode', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Post Code"
                        className="grid-in-senderPostCode"
                        error={errors.senderAddress?.postCode}
                    />
                    <CustomInput
                        {...register('senderAddress.country', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Country"
                        className="grid-in-senderCountry"
                        error={errors.senderAddress?.country}
                    />
                </div>
            </div>
            <div>
                <h3 className="mb-6 text-color-1 heading-sm-variant">
                    Bill To
                </h3>
                <div className="grid grid-cols-2 grid-rows-5 gap-6 grid-areas-billToSmall md:grid-areas-billToWide md:grid-cols-3 md:grid-rows-4 ">
                    <CustomInput
                        {...register('clientName', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Client's Name"
                        className="grid-in-clientName"
                        error={errors.clientName}
                    />
                    <CustomInput
                        {...register('clientEmail', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                            pattern: {
                                value: /[a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                message: 'Wrong email address',
                            },
                        })}
                        label="Client's Email"
                        className="grid-in-clientEmail"
                        error={errors.clientEmail}
                    />
                    <CustomInput
                        {...register('clientAddress.street', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Street Address"
                        className="grid-in-clientStreet"
                        error={errors.clientAddress?.street}
                    />
                    <CustomInput
                        error={errors.clientAddress?.city}
                        {...register('clientAddress.city', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="City"
                        className="grid-in-clientCity"
                    />
                    <CustomInput
                        error={errors.clientAddress?.postCode}
                        {...register('clientAddress.postCode', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
                        label="Post Code"
                        className="grid-in-clientPostCode"
                    />
                    <CustomInput
                        error={errors.clientAddress?.country}
                        {...register('clientAddress.country', {
                            required: {
                                value: true,
                                message: 'Field cannot be empty',
                            },
                        })}
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
                            disabled={invoice ? true : false}
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
                    {...register('description', {
                        required: {
                            value: true,
                            message: 'Field cannot be empty',
                        },
                    })}
                    label="Project Description"
                    className="col-span-full"
                    error={errors.description}
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
                <div className="relative grid gap-10 md:gap-4">
                    {fields.map(({ id }, idx) => (
                        <React.Fragment key={id}>
                            <FormItem
                                idx={idx}
                                remove={remove}
                                register={register}
                                control={control}
                                errors={errors}
                            />
                        </React.Fragment>
                    ))}
                    {errors.items?.root?.message && (
                        <span className="absolute bottom-0 error">
                            {errors.items.root?.message}
                        </span>
                    )}
                </div>
                <div>
                    <CustomButton
                        onClick={(e) => addNewItem(e)}
                        variant={6}
                        className="flex items-center justify-center w-full mt-12 md:mt-4"
                    >
                        + Add New Item
                    </CustomButton>
                </div>
                <div
                    ref={scrollDivRef}
                    id="dummyDiv"
                    className="w-1 h-1"
                />
            </div>
        </div>
    )
}

export default Form
