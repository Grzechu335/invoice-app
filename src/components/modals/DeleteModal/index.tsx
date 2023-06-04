'use client'
import CustomButton from '@/components/atoms/CustomButton'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'

type DeleteModalProps = {
    id: string
}

const DeleteModal: React.FC<DeleteModalProps> = ({ id }) => {
    const { toggleDeleteModal } = useModalContext()
    return (
        <div className="fixed top-0 left-0 grid w-screen h-screen bg-black/50 place-content-center">
            <div className="flex flex-col p-12 space-y-6 md:space-y-3 bg-white rounded-[8px] dark:bg-color-3 md:mx-0 mx-6">
                <h2 className="heading-md !tracking-[-0.5px] md:text-start text-center">
                    Confirm Deletion
                </h2>
                <p className="text-center body-variant text-color-6 md:text-start">
                    Are you sure you want to delete invoice #{id}? This action
                    cannot be undone.
                </p>
                <div className="flex items-center justify-center space-x-2 md:justify-end">
                    <CustomButton
                        variant={3}
                        onClick={toggleDeleteModal}
                    >
                        Cancel
                    </CustomButton>
                    <CustomButton variant={5}>Delete</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
