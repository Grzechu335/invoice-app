import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import { authOptions } from '@/lib/authOptions'
import { invoices } from '@data/data'
import { getServerSession } from 'next-auth'

export default async function Home() {
    return (
        <>
            <Dashboard invoices={invoices} />
            <Modals />
        </>
    )
}
