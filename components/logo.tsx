"use client";

import { motion } from 'framer-motion'
import { Dela_Gothic_One } from 'next/font/google'

const gothic = Dela_Gothic_One({
    weight: '400',
    subsets: ['latin'],
})

function Logo() {
    return (
        <motion.div
            className="absolute z-20 top-0 bg-transparent mt-8 ml-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
            }}
            viewport={{ once: true }}
        >
            <p
                className="font-bold text-xl text-indigo-400"
            >
                Trang Bui
            </p>
        </motion.div>
    )
}

export default Logo