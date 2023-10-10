"use client";

import { Download } from "lucide-react"
import Image from "next/image";
import { motion, spring } from "framer-motion";
import Link from "next/link";

import { useSectionInView } from "@/hooks/use-section-in-view";
import SocialMediaSide from "./social-media-side";
import selfLogo from "@/public/self-logo.png";

const avatarAnimationVariants = {
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

const textAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            spring
        },
    },
};


function Hero() {
    const { ref } = useSectionInView("Home");

    return (
        <section
            id="home"
            ref={ref}
            className="relative h-screen w-full bg-white sm:p-24 flex flex-col sm:flex-row items-center justify-center gap-10"
        >
            <div className="flex flex-col gap-2 items-center">
                <motion.div
                    variants={textAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{
                        once: true,
                    }}
                >
                    <h1 className="font-bold text-5xl text-indigo-400">Hello, I&apos;m Trang</h1>
                    <p className="text-xl">I&apos;m a Fullstack Software Developer</p>
                    <Link href="/CV.pdf" className="flex gap-1 text-indigo-400 hover:scale-125 transition scale justify-center">
                        <Download size={20} />
                        Download My CV
                    </Link>
                </motion.div>

                <SocialMediaSide />
            </div>

            <motion.div
                className="font-bold sm:max-w-[50%]"
                variants={avatarAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                    once: true,
                }}
            >
                <Image src={selfLogo} alt="self logo" className="" />
            </motion.div>
        </section>
    )
}

export default Hero