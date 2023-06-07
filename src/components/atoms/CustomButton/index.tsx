import Image from 'next/image'
import PlusIcon from 'public/assets/icon-plus.svg'
import React, { MouseEventHandler } from 'react'

type CustomButtonProps = {
    children?: React.ReactNode
    variant: 1 | 2 | 3 | 4 | 5 | 6
    className?: string
    onClick?: MouseEventHandler
    smallFont?: boolean
    submit?: boolean
    id?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({
    children,
    variant,
    className,
    onClick,
    smallFont = false,
    submit,
    id,
}) => {
    const Variants: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
        1: 'bg-color-1 text-[#fff] hover:bg-color-2 !p-2',
        2: 'bg-color-1 text-[#fff] hover:bg-color-2',
        3: 'bg-[#F9FAFE] dark:bg-color-4 hover:bg-[#DFE3FA] dark:hover:bg-[#fff] text-color-7 dark:text-color-5',
        4: 'bg-[#373B53] hover:bg-color-8 dark:hover:bg-color-3 text-color-6 dark:text-color-5',
        5: 'bg-color-9 hover:bg-color-10 text-[#fff]',
        6: 'bg-[#F9FAFE] hover:bg-[#DFE3FA] text-color-7',
    }
    return (
        <button
            id={id ? id : ''}
            type={submit ? 'submit' : undefined}
            onClick={onClick}
            className={`md:heading-sm-variant py-4 px-6 flex items-center rounded-full ${
                smallFont ? 'text-[12px] leading-[12px]' : 'heading-sm-variant'
            } ${Variants[variant]} ${className}`}
        >
            {variant === 1 ? (
                <div className="grid w-8 h-8 mr-4 bg-white rounded-full place-content-center">
                    <Image
                        src={PlusIcon}
                        alt=""
                    />
                </div>
            ) : null}
            {children}
        </button>
    )
}

export default CustomButton
