'use client'
import Image from 'next/image'
import React from 'react'
import logo from 'public/assets/logo.svg'
import ThemeToggler from '@/components/atoms/ThemeToggler'
import UserAvatar from '@/components/atoms/UserAvatar'
import Link from 'next/link'
import useModalContext from '@/hooks/useModalContext'
import { usePathname } from 'next/navigation'

const Sidebar: React.FC = () => {
    const path = usePathname()
    const { closeAllModals } = useModalContext()
    if (path === '/api/auth/signin') return null
    return (
        <aside className="fixed  left-0 z-[999] xl:flex-col flex-row flex justify-between top-0 xl:rounded-r-[20px] bg-color-3 xl:h-screen xl:w-[103px] w-screen h-[72px] md:h-[80px] ">
            <Link
                href="/"
                onClick={closeAllModals}
                className="bg-color-1 overflow-hidden xl:h-[103px] xl:w-full w-[72px] md:h-[80px] md:w-[80px] h-[72px] grid place-content-center relative rounded-r-[20px] after:absolute after:transform  after:bg-color-2 after:w-full after:h-full after:left-0 after:top-1/2 after:rounded-tl-[20px] after:z-10"
            >
                <Image
                    className="z-20"
                    src={logo}
                    alt="logo image"
                />
            </Link>
            <div className="flex xl:flex-col gap-[32px]">
                <ThemeToggler />
                <UserAvatar />
            </div>
        </aside>
    )
}

export default Sidebar
