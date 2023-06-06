'use client'
import useModalContext from '@/hooks/useModalContext'
import React from 'react'
import EditModal from './EditModal'
import NewModal from './NewModal'
import DeleteModal from './DeleteModal'
import { Invoice } from '@prisma/client'

const Modals: React.FC<{ invoice?: Invoice }> = ({ invoice }) => {
    const { editModal, deleteModal, newModal } = useModalContext()
    return (
        <div>
            {editModal && invoice && <EditModal invoice={invoice} />}
            {deleteModal && invoice && <DeleteModal id={invoice.id} />}
            {newModal && <NewModal />}
        </div>
    )
}

export default Modals
