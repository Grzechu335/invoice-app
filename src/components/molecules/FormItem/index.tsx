'use client'
import { CustomInput } from '@/components/atoms/CustomInput'
import Image from 'next/image'
import React from 'react'
import DeleteIcon from 'public/assets/icon-delete.svg'
import {
    Control,
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
}

const FormItem: React.FC<FormItemProps> = ({
    idx,
    remove,
    register,
    control,
}) => {
    const { items } = useWatch({ control })
    const { price, quantity } = items![idx]
    return (
        <div className="grid grid-cols-12 gap-4">
            <CustomInput
                {...register(`items.${idx}.name`)}
                labelOnSmallDevices
                label="Item name"
                className="col-span-full md:col-span-4"
            />
            <CustomInput
                {...register(`items.${idx}.quantity`)}
                type="number"
                labelOnSmallDevices
                label="Qty."
                className="col-span-3 md:col-span-2"
            />
            <CustomInput
                {...register(`items.${idx}.price`)}
                type="number"
                labelOnSmallDevices
                label="Price"
                className="col-span-4 md:col-span-2"
            />
            <CustomInput
                value={(price! * quantity!).toFixed(2)}
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
