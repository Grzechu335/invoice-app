'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import Arrow from 'public/assets/icon-arrow-left.svg'
import Image from 'next/image'

const GoBackButton: React.FC = () => {
    const router = useRouter()
    return (
        <button
            className="heading-sm-variant text-color-8 dark:text-[#fff] flex items-center space-x-[22px]"
            onClick={() => router.back()}
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
