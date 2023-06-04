'use client'
import React, { ChangeEvent, createContext, useMemo, useState } from 'react'

// Define type of context value
export type ModalContextType = {
    editModal: boolean
    newModal: boolean
    deleteModal: boolean
    toggleEditModal: () => void
    toggleNewModal: () => void
    toggleDeleteModal: () => void
}

// Create context with default values
const ModalContext = createContext<ModalContextType>({
    editModal: false,
    newModal: false,
    deleteModal: false,
    toggleEditModal: () => {},
    toggleNewModal: () => {},
    toggleDeleteModal: () => {},
})

// Create Context Provider
export const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [editModal, setEditModal] = useState(false)
    const [newModal, setNewModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const toggleEditModal = () => {
        setEditModal((prev) => !prev)
    }
    const toggleNewModal = () => {
        setNewModal((prev) => !prev)
    }
    const toggleDeleteModal = () => {
        setDeleteModal((prev) => !prev)
    }

    const data = useMemo(
        () => ({
            editModal,
            newModal,
            deleteModal,
            toggleEditModal,
            toggleNewModal,
            toggleDeleteModal,
        }),
        [deleteModal, newModal, editModal]
    )
    return (
        <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
    )
}

export default ModalContext
