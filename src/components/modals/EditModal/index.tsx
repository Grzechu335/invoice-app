'use client'
import CustomButton from '@/components/atoms/CustomButton'
import Form from '@/components/organisms/Form'
import useModalContext from '@/hooks/useModalContext'
import { Invoice } from '@prisma/client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from '../../../../types/form'
import { updatedInvoice } from '../../../../types/invoice'
import { motion as m } from 'framer-motion'
import modalsAnimationVariants from '../../../../utils/modalsAnimationVariants'

type EditModalProps = {
    invoice: Invoice
}

const EditModal: React.FC<EditModalProps> = ({ invoice }) => {
    const { toggleEditModal, closeAllModals } = useModalContext()
    const router = useRouter()
    const form = useForm<FormData>({
        defaultValues: {
            clientAddress: {
                city: invoice.clientAddress.city,
                country: invoice.clientAddress.country,
                postCode: invoice.clientAddress.postCode,
                street: invoice.clientAddress.street,
            },
            clientEmail: invoice.clientEmail,
            clientName: invoice.clientName,
            description: invoice.description,
            createdAt: new Date(invoice.createdAt),
            items: invoice.items,
            paymentTerms: invoice.paymentTerms,
            senderAddress: {
                city: invoice.senderAddress.city,
                country: invoice.senderAddress.country,
                postCode: invoice.senderAddress.postCode,
                street: invoice.senderAddress.street,
            },
        },
    })
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        }
    })

    const onSubmit = form.handleSubmit(async (data) => {
        const updatedInvoice: updatedInvoice = {
            ...data,
            id: invoice.id,
            status: invoice.status,
            // @ts-ignore
            userId: invoice.userId,
        }
        await fetch('/api/editInvoice', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                updatedInvoice,
            }),
            method: 'POST',
        })
        closeAllModals()
        router.refresh()
    })

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
            onClick={toggleEditModal}
        >
            <m.div
                variants={modalsAnimationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                className="w-screen md:w-1/2 h-screen bg-white dark:bg-color-12 xl:pl-[103px] pt-[100px] md:pt-[140px] xl:pt-0 scrollbar-none overflow-y-scroll overflow-x-hidden"
            >
                <form
                    onSubmit={onSubmit}
                    id="editInvoiceForm"
                    className="p-6 md:p-14 md:pb-0"
                >
                    {form && (
                        <Form
                            form={form}
                            invoice={invoice}
                        />
                    )}
                    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-color-12 md:w-1/2 xl:pl-[103px]">
                        <div className="flex items-center justify-center px-6 py-5 space-x-2 md:justify-end md:py-8 md:px-14">
                            <CustomButton
                                variant={3}
                                smallFont
                                onClick={toggleEditModal}
                            >
                                Cancel
                            </CustomButton>
                            <CustomButton
                                id="editInvoiceForm"
                                type="submit"
                                variant={2}
                                smallFont
                            >
                                Save Changes
                            </CustomButton>
                        </div>
                    </div>
                </form>
            </m.div>
        </div>
    )
}

export default EditModal
