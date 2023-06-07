'use client'
import CustomButton from '@/components/atoms/CustomButton'
import InvoiceStatus from '@/components/molecules/InvoiceStatus'
import useModalContext from '@/hooks/useModalContext'
import { useRouter } from 'next/navigation'
import React from 'react'

type InvoiceSettingsProps = {
    status: 'Paid' | 'Pending' | 'Draft'
    id: string
}

const InvoiceSettings: React.FC<InvoiceSettingsProps> = ({ status, id }) => {
    const { toggleDeleteModal, toggleEditModal } = useModalContext()
    const router = useRouter()
    const markAsPaid = async () => {
        await fetch('/api/markAsPaid', {
            method: 'POST',
            body: JSON.stringify({ id }),
        })
        router.push('/')
        router.refresh()
    }

    return (
        <div className="flex items-center justify-between bg-[#fff] dark:bg-color-3 rounded-[8px] py-6 px-8 shadow-md">
            <div className="flex items-center justify-between flex-grow md:space-x-5 md:flex-grow-0">
                <p className="body-variant">Status</p>
                <InvoiceStatus status={status} />
            </div>
            <div className="fixed w-screen md:w-auto bottom-0 left-0 flex items-center space-x-2 md:static bg-gray-100 md:bg-[#fff] dark:bg-color-3 p-6 md:p-0 justify-center md:justify-start">
                <CustomButton
                    variant={3}
                    onClick={toggleEditModal}
                >
                    Edit
                </CustomButton>
                <CustomButton
                    variant={5}
                    onClick={toggleDeleteModal}
                >
                    Delete
                </CustomButton>
                <CustomButton
                    onClick={markAsPaid}
                    variant={2}
                >
                    Mark as Paid
                </CustomButton>
            </div>
        </div>
    )
}

export default InvoiceSettings
