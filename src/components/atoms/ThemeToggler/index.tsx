'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import DarkThemeIcon from 'public/assets/icon-moon.svg'
import LightThemeIcon from 'public/assets/icon-sun.svg'
import Image from 'next/image'

type Props = {}

const ThemeToggler: React.FC = (props: Props) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounded] = useState(false)
    useEffect(() => {
        setMounded(true)
    }, [])

    if (!mounted) return null
    return (
        <button className="w-[20px] h-[20px] relative my-auto xl:mx-auto">
            {theme === 'light' ? (
                <Image
                    fill
                    src={DarkThemeIcon}
                    alt="dark theme icon"
                    onClick={() => setTheme('dark')}
                />
            ) : (
                <Image
                    fill
                    src={LightThemeIcon}
                    alt="light theme icon"
                    onClick={() => setTheme('light')}
                />
            )}
        </button>
    )
}

export default ThemeToggler
