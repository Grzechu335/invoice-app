import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/library/ui/select'

type CustomSelectProps = {
    label: string
    className?: string
    onChange: () => void
    value: string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
    label,
    className,
    onChange,
    value,
}) => {
    const values: Record<number, string> = {
        1: 'Net 1 Day',
        7: 'Net 7 Days',
        14: 'Net 14 Days',
        30: 'Net 30 Days',
    }
    return (
        <div className={`${className}`}>
            <p className="mb-2 text-color-7 body-variant">{label}</p>
            <Select
                defaultValue={value}
                onValueChange={onChange}
            >
                <SelectTrigger className="w-full h-12 bg-white outline-none dark:bg-color-3 heading-sm-variant  rounded-[8px]">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent className="shadow-md rounded-[8px] bg-white dark:bg-color-4 heading-sm-variant text-color-8 dark:text-white ">
                    <SelectItem value={'1'}>Net 1 Day</SelectItem>
                    <SelectItem value={'7'}>Net 7 Days</SelectItem>
                    <SelectItem value={'14'}>Net 14 Days</SelectItem>
                    <SelectItem value={'30'}>Net 30 Days</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default CustomSelect
