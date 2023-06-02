'use client'
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
            {children}
        </ThemeProvider>
    )
}

export default Providers
