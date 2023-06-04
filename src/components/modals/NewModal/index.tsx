'use client'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'

const NewModal: React.FC = () => {
    const { toggleNewModal } = useModalContext()
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
            onClick={toggleNewModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-1/2 h-screen bg-white dark:bg-color-12"
            ></div>
        </div>
    )
}

export default NewModal
