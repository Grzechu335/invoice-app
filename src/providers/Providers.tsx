'use client'
import { FilterContextProvider } from '@/context/FilterContext'
import { ThemeProvider } from 'next-themes'
import React from 'react'

type ProvidersProps = {
    children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
    return (
        <ThemeProvider
            enableSystem
            defaultTheme="system"
            attribute="class"
        >
            <FilterContextProvider>{children}</FilterContextProvider>
        </ThemeProvider>
    )
}

export default Providers
