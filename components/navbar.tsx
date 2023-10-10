"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

import { cn } from "@/libs/utils";
import { links } from "@/libs/data";
import { useActiveSectionContext } from "@/context/active-section-context";

const liAnimationVariants = {
    initial: {
        opacity: 0,
    },
    animate: (index: number) => ({
        opacity: 1,
        transition: {
            delay: 0.05 * index,
        },
    })
};

function Navbar() {
    const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const [isMenuOpened, setMenuOpened] = useState(false);

    return (
        <header
            className="z-[10] relative"
        >
            <motion.nav
                className="hidden md:block fixed left-1/2 top-4 h-[2.6rem] w-[27rem] rounded-full border-opacity-40 bg-indigo-400"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <ul className="flex flex-row gap-10 items-center justify-center h-[2.6rem]">
                    {links.map((link) => (
                        <motion.li
                            className="flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                className={cn(
                                    "flex w-full items-center justify-center px-3 py-1 text-white transition",
                                    {
                                        "text-black":
                                            activeSection === link.name,
                                    }
                                )}
                                href={link.hash}
                                onClick={() => {
                                    setActiveSection(link.name);
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {link.name === activeSection && (
                                    <motion.span
                                        className="bg-indigo-50 absolute rounded-full inset-0 -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.nav>
            <motion.nav
                className={cn("fixed md:hidden left-1/2 top-0 text-indigo-400 flex flex-col", isMenuOpened ? "" : "right-1 left-auto top-4")}
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                {isMenuOpened ? (
                    <div className="flex flex-col w-screen items-end  bg-white pt-4 justify-end">
                        <X size={30} className="mr-4 mb-2" onClick={() => setMenuOpened(false)} />
                        <ul className="w-full">
                            {links.map((link, index) => (
                                <motion.li
                                    className="py-4 border-b flex justify-center first:border-t border-indigo-400 hover:bg-indigo-400 hover:text-white transition"
                                    key={link.hash}
                                    variants={liAnimationVariants}
                                    initial="initial"
                                    animate="animate"
                                    custom={index}
                                >
                                    <Link
                                        href={link.hash}
                                        onClick={() => {
                                            setActiveSection(link.name);
                                            setTimeOfLastClick(Date.now());
                                            setMenuOpened(false);
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <Menu size={30} onClick={() => setMenuOpened(true)} />
                )}
            </motion.nav>
        </header>
    )
}

export default Navbar