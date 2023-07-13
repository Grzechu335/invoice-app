'use client'
import React, { useState } from 'react'
import ArrowIcon from 'public/assets/icon-arrow-down.svg'
import useFilterContext from '@/hooks/useFilterContext'
import Image from 'next/image'

const FilterInvoice: React.FC = () => {
    const [open, setOpen] = useState(false)
    const { filters, changeFilterTags } = useFilterContext()
    return (
        <>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="heading-sm-variant flex items-center space-x-[14px] cursor-pointer "
            >
                <p>
                    Filter <span className="hidden md:inline">by status</span>
                </p>

                <Image
                    src={ArrowIcon}
                    alt={`${open ? 'close filters icon' : 'open filters icon'}`}
                    className={`transform transition duration-200 ${
                        open ? 'rotate-180' : 'rotate-0'
                    }`}
                />
            </button>
            {open && (
                <div className="absolute z-[999] bg-white dark:bg-color-4 shadow-lg rounded-[8px] top-[55px] left-0 w-[300%] md:w-[150%] transform translate-x-[-25%] p-6 heading-sm-variant grid gap-4">
                    <label className="flex space-x-[13px] items-center">
                        <input
                            type="checkbox"
                            name="Paid"
                            id="Paid"
                            value="Paid"
                            checked={filters.Paid}
                            onChange={(e) => changeFilterTags(e)}
                        />
                        <p>Paid</p>
                    </label>
                    <label className="flex space-x-[13px] items-center">
                        <input
                            type="checkbox"
                            name="Pending"
                            id="Pending"
                            value="Pending"
                            checked={filters.Pending}
                            onChange={(e) => changeFilterTags(e)}
                        />
                        <p>Pending</p>
                    </label>
                    <label className="flex space-x-[13px] items-center">
                        <input
                            type="checkbox"
                            name="Draft"
                            id="Draft"
                            value="Draft"
                            checked={filters.Draft}
                            onChange={(e) => changeFilterTags(e)}
                        />
                        <p>Draft</p>
                    </label>
                </div>
            )}
        </>
    )
}

export default FilterInvoice
