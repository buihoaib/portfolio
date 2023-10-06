"use client";

import { Download } from "lucide-react"
import Image from "next/image";
import { motion } from "framer-motion";

import { useSectionInView } from "@/hooks/use-section-in-view";
import SocialMediaSide from "./social-media-side";
import Link from "next/link";

function Hero() {
    const { ref } = useSectionInView("Home");

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen w-full bg-indigo-400 p-24 flex items-center justify-center gap-10"
        >
            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-bold text-5xl">Hello, I'm Trang</h1>
                <p className="text-xl">I'm a Fullstack Software Developer</p>
                <motion.div
                    className="flex  items-center"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.1 },
                    }}>
                    <Link href="/CV.pdf" className="flex gap-1 text-white">
                        <Download size={20} />
                        Download My CV
                    </Link>
                </motion.div>
                <SocialMediaSide />
            </div>
            <div className="font-bold p-10 border-2">
                <h1>avatar</h1>
                {/* <Image src={} /> */}
            </div>
        </section>
    )
}

export default Hero