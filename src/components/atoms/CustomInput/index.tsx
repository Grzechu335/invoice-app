import React, { HTMLAttributes } from 'react'

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string
}

export const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
    (props, ref) => {
        const { label, className, ...rest } = props
        return (
            <label className={`${className}`}>
                <p className="mb-2 text-color-7 body-variant">{label}</p>
                <input
                    className={`rounded-[4px] bg-white heading-sm-variant dark:bg-color-3 border-[1px] w-full outline-none border-[#DFE3FA] dark:border-[#252945] px-5 py-4 `}
                    {...rest}
                    ref={ref}
                />
            </label>
        )
    }
)

CustomInput.displayName = 'CustomInput'
