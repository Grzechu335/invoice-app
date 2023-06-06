'use client'
import React, { ChangeEvent, createContext, useMemo, useState } from 'react'

// Define type of context value
export type FilterContextType = {
    filters: {
        Paid: boolean
        Pending: boolean
        Draft: boolean
    }
    changeFilterTags: (e: ChangeEvent<HTMLInputElement>) => void
}

// Create context with default values
const FilterContext = createContext<FilterContextType>({
    filters: {
        Paid: true,
        Pending: true,
        Draft: true,
    },
    changeFilterTags: () => {},
})

// Create Context Provider
export const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [filterTags, setFilterTags] = useState({
        Paid: true,
        Pending: true,
        Draft: true,
    })
    const changeFilterTags = (e: ChangeEvent<HTMLInputElement>) => {
        setFilterTags((prev) => ({
            ...prev,
            [e.target.value]: e.target.checked,
        }))
    }
    const data = useMemo(
        () => ({
            filters: filterTags,
            changeFilterTags,
        }),
        [filterTags]
    )
    return (
        <FilterContext.Provider value={data}>{children}</FilterContext.Provider>
    )
}

export default FilterContext
