'use client'
import React, { ChangeEvent, createContext, useMemo, useState } from 'react'

// Define type of context value
export type FilterContextType = {
    filters: {
        paid: boolean
        pending: boolean
        draft: boolean
    }
    changeFilterTags: (e: ChangeEvent<HTMLInputElement>) => void
}

// Create context with default values
const FilterContext = createContext<FilterContextType>({
    filters: {
        paid: true,
        pending: true,
        draft: true,
    },
    changeFilterTags: () => {},
})

// Create Context Provider
export const FilterContextProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [filterTags, setFilterTags] = useState({
        paid: true,
        pending: true,
        draft: true,
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