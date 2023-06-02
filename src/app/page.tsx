import InvoicesLayout from '@/components/layouts/InvoicesLayout'
import InvoicesNavigation from '@/components/organisms/InvoicesNavigation'
import invoices from '@data/data.json'

export default function Home() {
    return (
        <div className="grid grid-cols-12 overflow-x-hidden overflow-y-scroll ">
            <div className="h-screen col-start-3 col-end-11 xl:mt-[77px] md:mt-[140px] mt-[104px] ">
                <InvoicesNavigation qty={invoices.length} />
                {/* @ts-ignore */}
                <InvoicesLayout invoices={invoices} />
            </div>
        </div>
    )
}
