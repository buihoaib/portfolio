
"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { projectsData } from "@/libs/data";
import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const techIconsVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
    hover: {
        scale: 1.2,
        transition: { duration: 0.2 },
    }
};

function Projects() {
    const { ref } = useSectionInView("Projects");

    return (
        <section
            id="projects"
            ref={ref}
            className="h-full w-full bg-indigo-100 p-20 flex flex-col items-center"
        >
            <h1 className="text-3xl uppercase font-bold pb-4 border-indigo-400 border-b-4">projects</h1>
            <ul className="flex flex-col my-10">
                {projectsData.map((project, projectIndex) => (
                    <li
                        className="grid grid-cols-2 items-center gap-[5rem] mx-20 py-16"
                        key={projectIndex}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, x: -300 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={project.imageUrl}
                                alt="Project I worked on"
                                className="col-span-1"
                            />
                        </motion.div>

                        <motion.div
                            className="col-span-1 flex flex-col gap-2"
                            initial={{ opacity: 0, scale: 0.5, x: 300 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.2,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            viewport={{ once: true }}
                        >
                            <p className="text-2xl font-bold text-indigo-400">{project.title}</p>
                            <p>{project.description}</p>
                            <div className="flex mt-4 gap-4">
                                <Link
                                    href={project.liveUrl}
                                    className="flex gap-1 text-white bg-indigo-400 py-2 px-4 rounded-lg hover:bg-white hover:text-indigo-400 transition-all"
                                >
                                    View Live
                                </Link>
                                <Link
                                    href={project.repo}
                                    className="flex gap-1 text-white bg-indigo-400 py-2 px-4 rounded-lg hover:bg-white hover:text-indigo-400 transition-all"
                                >
                                    Github
                                </Link>
                            </div>
                            <p className="font-semibold pt-5 text-indigo-400">MADE WITH:</p>
                            <ul className="flex gap-2 flex-wrap">
                                {project.tags.map((tag, tagIndex) => (
                                    <motion.li
                                        className="flex flex-col items-center justify-center px-4 py-2 rounded-xl text-indigo-400"
                                        variants={techIconsVariants}
                                        whileHover="hover"
                                        viewport={{
                                            once: true,
                                        }}
                                        custom={tagIndex}
                                    >
                                        {tag.type === "icon" ?
                                            <i className={cn(tag.classnameOrUrl, "text-4xl")} /> : <Image
                                                src={tag.classnameOrUrl}
                                                alt={tag.title}
                                                className="text-5xl"
                                                width={30}
                                                height={30}
                                            />
                                        }
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects