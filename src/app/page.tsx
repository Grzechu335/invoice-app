import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import { invoices } from '@data/data'
import 'types/prismaType.ts'

export default async function Home() {
    return (
        <>
            <Dashboard invoices={invoices} />
            <Modals />
        </>
    )
}
