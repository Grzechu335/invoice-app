'use client'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'
import EditModal from './EditModal'
import NewModal from './NewModal'
import DeleteModal from './DeleteModal'
import { Invoice } from '@prisma/client'
import { AnimatePresence } from 'framer-motion'

const Modals: React.FC<{ invoice?: Invoice }> = ({ invoice }) => {
    const { editModal, deleteModal, newModal } = useModalContext()
    return (
        <div>
            <AnimatePresence>
                {editModal && invoice && (
                    <EditModal
                        key="edit"
                        invoice={invoice}
                    />
                )}
                {deleteModal && invoice && (
                    <DeleteModal
                        key="delete"
                        id={invoice.id}
                    />
                )}
                {newModal && <NewModal key="new" />}
            </AnimatePresence>
        </div>
    )
}

export default Modals
