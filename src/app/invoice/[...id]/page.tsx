import GoBackButton from '@/components/atoms/GoBackButton'
import Modals from '@/components/modals'
import InvoiceDetails from '@/components/organisms/InvoiceDetails'
import InvoiceSettings from '@/components/organisms/InvoiceSettings'
import prisma from '../../../../utils/prisma'
export default async function Page({ params }: { params: { id: string } }) {
    const invoice = await prisma.invoice.findUnique({
        where: {
            id: `${params.id}`,
        },
    })

    if (!invoice) return <div>Something went wrong</div>
    return (
        <main className="flex flex-col space-y-6 pb-[80px]">
            <GoBackButton />
            <InvoiceSettings status={invoice.status} />
            <InvoiceDetails invoice={invoice} />
            <Modals invoice={invoice} />
        </main>
    )
}
