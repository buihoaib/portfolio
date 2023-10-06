"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { cn } from "@/libs/utils";
import { links } from "@/libs/data";
import { useActiveSectionContext } from "@/context/active-section-context";

function Navbar() {
    const { activeSection, setActiveSection } = useActiveSectionContext();

    return (
        <header
            className="z-[10] relative"
        >
            <motion.nav
                className="fixed left-1/2 top-4 h-[2.6rem] w-[27rem] rounded-full border-opacity-40 bg-indigo-400"
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
        </header>
    )
}

export default Navbar