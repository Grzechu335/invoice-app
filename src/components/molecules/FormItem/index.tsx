'use client'
import { CustomInput } from '@/components/atoms/CustomInput'
import Image from 'next/image'
import DeleteIcon from 'public/assets/icon-delete.svg'
import React from 'react'
import {
    Control,
    FieldErrors,
    UseFieldArrayRemove,
    UseFormRegister,
    useWatch,
} from 'react-hook-form'
import { FormData } from '../../../../types/form'

interface FormItemProps {
    idx: number
    remove: UseFieldArrayRemove
    register: UseFormRegister<FormData>
    control: Control<FormData, any>
    errors?: FieldErrors<FormData>
}

const FormItem: React.FC<FormItemProps> = ({
    idx,
    remove,
    register,
    control,
    errors,
}) => {
    const { items } = useWatch({ control })
    const { price, quantity } = items![idx]
    return (
        <div className="grid grid-cols-12 gap-4">
            <CustomInput
                {...register(`items.${idx}.name`, {
                    required: {
                        value: true,
                        message: 'Field cannot be empty',
                    },
                })}
                isFieldArray
                labelOnSmallDevices
                label="Item name"
                className="col-span-full md:col-span-4"
                error={errors?.items?.[idx]?.name}
            />
            <CustomInput
                {...register(`items.${idx}.quantity`, {
                    required: {
                        value: true,
                        message: 'Field cannot be empty',
                    },
                    pattern: {
                        value: /^\d+$/,
                        message: 'NaN',
                    },
                })}
                type="number"
                isFieldArray
                labelOnSmallDevices
                label="Qty."
                className="col-span-3 md:col-span-2"
                error={errors?.items?.[idx]?.quantity}
            />
            <CustomInput
                {...register(`items.${idx}.price`, {
                    required: {
                        value: true,
                        message: 'Field cannot be empty',
                    },
                })}
                isFieldArray
                type="number"
                labelOnSmallDevices
                label="Price"
                className="col-span-4 md:col-span-2"
                error={errors?.items?.[idx]?.price}
            />
            <CustomInput
                value={
                    (Number(price) * Number(quantity)).toString() !== 'NaN'
                        ? (Number(price) * Number(quantity)).toFixed(2)
                        : ''
                }
                labelOnSmallDevices
                disabled
                label="Total"
                className="col-span-4 md:col-span-3"
            />
            <Image
                onClick={() => remove(idx)}
                src={DeleteIcon}
                alt="delete item icon"
                className="relative w-[18px] cursor-pointer mx-auto my-auto md:static top-3"
            />
        </div>
    )
}

export default FormItem
