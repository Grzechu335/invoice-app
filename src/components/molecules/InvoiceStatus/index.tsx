import React from 'react'

type InvoiceStatusProps = {
    status: 'Paid' | 'Pending' | 'Draft'
}

const InvoiceStatus: React.FC<InvoiceStatusProps> = ({ status }) => {
    const colors: Record<'Paid' | 'Pending' | 'Draft', string> = {
        Paid: 'bg-[#33D69F] text-[#33D69F]',
        Pending: 'bg-[#FF8F00] text-[#FF8F00]',
        Draft: 'bg-[#373B53] text-[#373B53]',
    }
    return (
        <div
            className={`rounded-[6px] grid-in-status  bg-opacity-5 px-4 py-[14px] grid place-content-center ${colors[status]}`}
        >
            <div className="flex items-center space-x-2">
                <span
                    className={`w-2 h-2 block ${colors[status]} rounded-full`}
                />
                <p className="font-bold first-letter:uppercase">{status}</p>
            </div>
        </div>
    )
}

export default InvoiceStatus
