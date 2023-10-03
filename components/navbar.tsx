"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { links } from "@/libs/data";

function Navbar() {
    return (
        <header
            className="z-[10] relative"
        >
            <motion.div
                className="fixed top-5 left-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            ></motion.div>

            <nav className="flex fixed top-[2.3rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
                <ul className="flex w-[22rem] flex-nowrap gap-16 items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500">
                    {links.map((link) => (
                        <motion.li
                            className="h-3/4 flex items-center justify-center relative"
                            key={link.hash}
                            initial={{ y: -100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                        >
                            <Link
                                // className={clsx(
                                //     "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                                //     {
                                //         "text-gray-950 dark:text-gray-200":
                                //             activeSection === link.name,
                                //     }
                                // )}
                                href={link.hash}
                                onClick={() => {
                                    //setActiveSection(link.name);
                                    //setTimeOfLastClick(Date.now());
                                }}
                            >
                                {link.name}

                                {/* {link.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )} */}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar