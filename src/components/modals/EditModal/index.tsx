'use client'
import useModalContext from '@/hooks/useModalContext'
import React, { useEffect } from 'react'
import { Invoice } from '../../../../types/invoice'
import CustomButton from '@/components/atoms/CustomButton'
import { useForm } from 'react-hook-form'
import Form from '@/components/organisms/Form'
import { FormData } from '../../../../types/form'

type EditModalProps = {
    invoice: Invoice
}

const EditModal: React.FC<EditModalProps> = ({ invoice }) => {
    const { toggleEditModal } = useModalContext()
    const form = useForm<FormData>({
        defaultValues: {
            client: {
                city: invoice.clientAddress.city,
                country: invoice.clientAddress.country,
                postCode: invoice.clientAddress.postCode,
                street: invoice.clientAddress.street,
            },
            clientsEmail: invoice.clientEmail,
            clientsName: invoice.clientName,
            description: invoice.description,
            invoiceDate: new Date(invoice.createdAt),
            items: invoice.items,
            paymentsTerms: invoice.paymentTerms,
            sender: {
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
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/50"
            onClick={toggleEditModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-screen md:w-1/2 h-screen bg-white dark:bg-color-12 xl:pl-[103px] pt-[100px] md:pt-[140px] xl:pt-0 scrollbar-none overflow-y-scroll overflow-x-hidden"
            >
                <div className="p-6 md:p-14 md:pb-0">
                    {form && (
                        <Form
                            form={form}
                            invoice={invoice}
                        />
                    )}
                    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-color-12 md:w-1/2 xl:pl-[103px]">
                        <div className="flex items-center justify-center px-6 py-5 space-x-2 md:justify-start md:py-8 md:px-14">
                            <CustomButton
                                variant={3}
                                className="md:mr-auto"
                                smallFont
                                onClick={toggleEditModal}
                            >
                                Discard
                            </CustomButton>
                            <CustomButton
                                variant={4}
                                smallFont
                            >
                                Save as Draft
                            </CustomButton>
                            <CustomButton
                                variant={2}
                                smallFont
                            >
                                Save & Send
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditModal
