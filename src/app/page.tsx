import Modals from '@/components/modals'
import Dashboard from '@/components/templates/Dashboard'
import { invoices } from '@data/data'

export default function Home() {
    return (
        <>
            <Dashboard invoices={invoices} />
            <Modals />
        </>
    )
}
