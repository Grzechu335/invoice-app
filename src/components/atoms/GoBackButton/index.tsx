'use client'
import { useRouter } from 'next/navigation'
import React, { MouseEventHandler } from 'react'
import Arrow from 'public/assets/icon-arrow-left.svg'
import Image from 'next/image'

type GoBackButtonProps = {
    className?: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const GoBackButton: React.FC<GoBackButtonProps> = ({ className, onClick }) => {
    const router = useRouter()
    return (
        <button
            type="button"
            className={`heading-sm-variant text-color-8 dark:text-[#fff] flex items-center space-x-[22px] ${className}`}
            onClick={
                onClick
                    ? onClick
                    : (e) => {
                          e.preventDefault()
                          router.back()
                      }
            }
        >
            <Image
                src={Arrow}
                alt="go back button logo"
            />
            <p>Go back</p>
        </button>
    )
}

export default GoBackButton
