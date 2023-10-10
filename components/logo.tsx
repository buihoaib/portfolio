"use client";

import { motion } from 'framer-motion'
import Image from "next/image";
import TextLogo from "@/public/logo-chang.png";

function Logo() {
    return (
        <motion.div
            className="absolute z-20 top-0 bg-transparent mt-4 ml-4 md:mt-8 md:ml-8"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay: 0.2,
            }}
            viewport={{ once: true }}
        >
            <Image src={TextLogo} alt="text logo" className="w-[100px] lg:w-[160px]" />
        </motion.div>
    )
}

export default Logo