'use client'
import { FilterContextProvider } from '@/context/FilterContext'
import { ModalContextProvider } from '@/context/ModalContext'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    // TODO: Add skeleton
    if (!mounted) return <div>Skeleton...</div>
    return (
        <ThemeProvider
            enableSystem
            defaultTheme="system"
            attribute="class"
        >
            <SessionProvider>
                <FilterContextProvider>
                    <ModalContextProvider>{children}</ModalContextProvider>
                </FilterContextProvider>
            </SessionProvider>
        </ThemeProvider>
    )
}

export default Providers
