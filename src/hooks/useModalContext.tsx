import FilterContext, { FilterContextType } from '@/context/FilterContext'
import ModalContext, { ModalContextType } from '@/context/ModalContext'
import { useContext } from 'react'

const useModalContext = () => {
    return useContext<ModalContextType>(ModalContext)
}

export default useModalContext
