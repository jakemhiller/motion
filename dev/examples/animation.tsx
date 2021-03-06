import * as React from "react"
import { useState } from "react"
import { motion, useAnimation } from "@framer"

const style = {
    width: 100,
    height: 100,
    background: "red",
    opacity: 1,
}

export const App = () => {
    const controls = useAnimation()
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    React.useEffect(() => {
        controls.start("visible")
    })

    return (
        <motion.div animate={controls} initial="hidden">
            <motion.div variants={variants} style={style} />
        </motion.div>
    )
}
