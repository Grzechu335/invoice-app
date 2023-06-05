import React from 'react'
import { Skeleton } from '@/components/library/ui/skeleton'

const InvoicesSkeleton: React.FC = () => {
    const skeletons = Array.from({ length: 6 })
    return (
        <div className="xl:pt-[64px] md:pt-[55px] pt-[32px] flex flex-col space-y-[16px]">
            {skeletons.map((_, idx) => (
                <div
                    key={idx}
                    className="w-full"
                >
                    <Skeleton />
                </div>
            ))}
        </div>
    )
}

export default InvoicesSkeleton
