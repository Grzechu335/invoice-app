import FilterContext, { FilterContextType } from '@/context/FilterContext'
import { useContext } from 'react'

const useFilterContext = () => {
    return useContext<FilterContextType>(FilterContext)
}

export default useFilterContext
