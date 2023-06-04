import React, { HTMLAttributes } from 'react'

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string
    labelOnSmallDevices?: boolean
    disabled?: boolean
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
        const {
            label,
            className,
            disabled = false,
            labelOnSmallDevices = false,
            ...rest
        } = props
        return (
            <label className={`${className}`}>
                <p
                    className={`mb-2 text-color-7 body-variant ${
                        labelOnSmallDevices ? 'md:hidden' : ''
                    }`}
                >
                    {label}
                </p>
                <input
                    className={`rounded-[4px] bg-white heading-sm-variant  border-[1px] w-full outline-none border-[#DFE3FA] dark:border-[#252945] px-5 py-4 ${
                        disabled
                            ? 'border-none text-color-6 px-0 dark:bg-color-12'
                            : 'dark:bg-color-3 px-5'
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
