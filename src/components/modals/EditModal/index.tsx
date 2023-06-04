'use client'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'
import { Invoice } from '../../../../types/invoice'

type EditModalProps = {
    invoice: Invoice
}

const EditModal: React.FC<EditModalProps> = ({ invoice }) => {
    const { toggleEditModal } = useModalContext()
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
            onClick={toggleEditModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-1/2 h-screen bg-white dark:bg-color-12"
            ></div>
        </div>
    )
}

export default EditModal
