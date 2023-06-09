import React, { HTMLAttributes, HTMLInputTypeAttribute } from 'react'
import { FieldError } from 'react-hook-form'

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string
    labelOnSmallDevices?: boolean
    disabled?: boolean
    value?: string
    type?: HTMLInputTypeAttribute
    error?: FieldError
    isFieldArray?: boolean
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
        const {
            label,
            className,
            disabled = false,
            labelOnSmallDevices = false,
            value,
            type = 'text',
            error,
            isFieldArray = false,
            ...rest
        } = props
        return (
            <label className={`${className} relative`}>
                {error && !isFieldArray && (
                    <span className="absolute top-0 right-0 error">
                        {error.message}
                    </span>
                )}
                <p
                    className={`mb-2 text-color-7 body-variant ${
                        labelOnSmallDevices ? 'md:hidden' : ''
                    }`}
                >
                    {label}
                </p>
                <input
                    value={value}
                    className={`rounded-[4px] bg-white heading-sm-variant  border-[1px] w-full outline-none border-[#DFE3FA] dark:border-[#252945] px-5 py-4 ${
                        disabled
                            ? 'border-none text-color-6 px-0 dark:bg-color-12'
                            : 'dark:bg-color-3 px-5'
                    } ${
                        (isFieldArray && error) || error
                            ? '!border-color-9'
                            : ''
                    } `}
                    disabled={disabled}
                    {...rest}
                    ref={ref}
                />
            </label>
        )
    }
)

CustomInput.displayName = 'CustomInput'
