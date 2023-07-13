import { Variants } from 'framer-motion'

const modalsAnimationVariants: Variants = {
    initial: {
        opacity: 0,
        x: -500,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.1,
        },
    },
    exit: {
        opacity: 0,
        x: -500,
        transition: {
            duration: 0.1,
        },
    },
}

export default modalsAnimationVariants
