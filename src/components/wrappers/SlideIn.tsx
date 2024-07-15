import React from 'react'
import { motion } from "framer-motion"

type Props = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const SlideIn = ({ children, className, style }: Props) => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 0.4,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: window.innerWidth, opacity: 0 }} className={className} style={style}>
            {children}
        </motion.div >
    )
}

export default SlideIn