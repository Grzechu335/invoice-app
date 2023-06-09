'use client'
import CustomButton from '@/components/atoms/CustomButton'
import Form from '@/components/organisms/Form'
import useModalContext from '@/hooks/useModalContext'
import { useRouter } from 'next/navigation'
import React, { BaseSyntheticEvent, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FormData } from '../../../../types/form'
import { newInvoice } from '../../../../types/invoice'
import { motion as m } from 'framer-motion'
import modalsAnimationVariants from '../../../../utils/modalsAnimationVariants'

const NewModal: React.FC = () => {
    const router = useRouter()
    const { toggleNewModal, closeAllModals } = useModalContext()
    const form = useForm<FormData>({
        defaultValues: {
            clientAddress: {
                city: '',
                country: '',
                postCode: '11111',
                street: '',
            },
            clientEmail: '',
            clientName: '',
            description: '',
            createdAt: new Date(),
            items: [
                {
                    name: 'Item 1',
                    price: 100,
                    quantity: 2,
                },
            ],
            paymentTerms: '1',
            senderAddress: {
                city: '',
                country: '',
                postCode: '11111',
                street: '',
            },
        },
    })
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = 'scroll'
        }
    })

    const onSubmit = async (
        data: FormData,
        event: BaseSyntheticEvent<object, any, any> | undefined
    ) => {
        event?.preventDefault()
        // @ts-ignore
        const value: 'new' | 'draft' = event?.nativeEvent.submitter.value
        const newInvoice: newInvoice = {
            ...data,
        }
        await fetch('/api/createInvoice', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                newInvoice,
                type: value,
            }),
            method: 'POST',
        })
        closeAllModals()
        router.refresh()
    }

    return (
        <div
            className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-black/50"
            onClick={toggleNewModal}
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
                    id="newInvoiceForm"
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="p-6 md:p-14 md:pb-0"
                >
                    {form && <Form form={form} />}
                    <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-color-12 md:w-1/2 xl:pl-[103px]">
                        <div className="flex items-center justify-center px-6 py-5 space-x-2 md:justify-start md:py-8 md:px-14">
                            <CustomButton
                                variant={3}
                                className="md:mr-auto"
                                smallFont
                                onClick={toggleNewModal}
                            >
                                Discard
                            </CustomButton>
                            <CustomButton
                                value="draft"
                                id="newInvoiceForm"
                                type="submit"
                                variant={4}
                                smallFont
                            >
                                Save as Draft
                            </CustomButton>
                            <CustomButton
                                id="newInvoiceForm"
                                type="submit"
                                value="new"
                                variant={2}
                                smallFont
                            >
                                Save & Send
                            </CustomButton>
                        </div>
                    </div>
                </form>
            </m.div>
        </div>
    )
}

export default NewModal
