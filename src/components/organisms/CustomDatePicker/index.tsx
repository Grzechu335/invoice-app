'use client'

import * as React from 'react'
import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/library/ui/button'
import { Calendar } from '@/components/library/ui/calendar'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/library/ui/popover'

interface CustomDatePickerProps {
    label: string
    className?: string
    disabled?: boolean
    onChange: () => void
    value: Date
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
    label,
    className,
    disabled = false,
    value,
    onChange,
}) => {
    return (
        <div className={`${className}`}>
            <p className="mb-2 text-color-7 body-variant">{label}</p>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        disabled={disabled}
                        variant={'outline'}
                        className={cn(
                            'w-full justify-between text-left heading-sm-variant px-5 py-4 h-12 dark:bg-color-3',
                            !value && 'text-muted-foreground'
                        )}
                    >
                        {value ? (
                            format(value, 'dd MMM yyyy')
                        ) : (
                            <span className="body-variant text-color-7">
                                Pick a date
                            </span>
                        )}
                        <CalendarIcon className="w-4 h-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={onChange}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default CustomDatePicker
