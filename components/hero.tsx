"use client";

import { Download } from "lucide-react"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { useSectionInView } from "@/hooks/use-section-in-view";
import SocialMediaSide from "./social-media-side";
import selfLogo from "@/public/self-logo.png";

const avatarAnimation = {
    initial: {
        opacity: 0,
        scale: 0,
    },
    animate: {
        opacity: 1,
        scale: 1,
        rotateY: 360,
        transition: {
            duration: 0.6,
        },
    },
};

function Hero() {
    const { ref } = useSectionInView("Home");

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen w-full bg-white p-24 flex items-center justify-center gap-10"
        >
            <div className="flex flex-col gap-2 items-center">
                <h1 className="font-bold text-5xl text-indigo-400">Hello, I'm Trang</h1>
                <p className="text-xl">I'm a Fullstack Software Developer</p>
                <motion.div
                    className="flex  items-center"
                    whileHover={{
                        scale: 1.2,
                        transition: { duration: 0.1 },
                    }}>
                    <Link href="/CV.pdf" className="flex gap-1 text-indigo-400">
                        <Download size={20} />
                        Download My CV
                    </Link>
                </motion.div>
                <SocialMediaSide />
            </div>
            <motion.div
                className="font-bold"
                variants={avatarAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
                <Image src={selfLogo} alt="self logo" />
            </motion.div>
        </section>
    )
}

export default Hero