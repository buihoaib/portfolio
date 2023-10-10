"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";
import { learningSkills, skillsData } from "@/libs/data";
import { cn } from "@/libs/utils";

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.02 * index,
        },
    }),
    hover: {
        scale: 1.2,
        transition: { duration: 0.2 },
    }
};

function Skills() {
    const { ref } = useSectionInView("Skills");

    return (
        <section
            id="skills"
            ref={ref}
            className="h-full w-full bg-indigo-50 px-2 md:px-4 lg:px-10 py-20 flex flex-col items-center"
        >
            <h1 className="text-3xl uppercase font-bold pb-4 border-indigo-400 border-b-4">skills</h1>

            <div className="grid grid-row-2 gap-4 mt-10">
                <div className="flex flex-col items-center py-5 px-2 md:px-10 lg:px-20 gap-2">
                    <p>I love to work with: </p>
                    <ul className="flex gap-2 flex-wrap items-center justify-center">
                        {skillsData.map((skill, index) => (
                            <motion.li
                                key={index}
                                className="flex flex-col items-center px-2 sm:px-4 py-2 rounded-xl text-indigo-400"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                whileHover="hover"
                                viewport={{
                                    once: true,
                                }}
                                custom={index}
                            >
                                {skill.type === "icon" ?
                                    <i className={cn(skill.classnameOrUrl, "text-5xl")} />
                                    : <Image
                                        src={skill.classnameOrUrl}
                                        alt={skill.title}
                                        className="text-5xl"
                                        width={40}
                                        height={40}
                                    />
                                }
                                <p className="text-sm">{skill.title}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col items-center py-5 px-2 md:px-10 lg:px-20 gap-2">
                    <p>I&apos;m currently learning: </p>
                    <ul className="flex gap-2 flex-wrap items-center justify-center">
                        {learningSkills.map((skill, index) => (
                            <motion.li
                                key={index}
                                className="flex flex-col items-center px-2 sm:px-4 py-2 rounded-xl text-indigo-400 hover:bg"
                                variants={fadeInAnimationVariants}
                                initial="initial"
                                whileInView="animate"
                                whileHover="hover"
                                viewport={{
                                    once: true,
                                }}
                                custom={skillsData.length + index}
                            >

                                {skill.type === "icon" ?
                                    < i className={cn(skill.classnameOrUrl, "text-5xl")} />
                                    : <Image
                                        src={skill.classnameOrUrl}
                                        alt={skill.title}
                                        className="text-5xl"
                                        width={40}
                                        height={40}
                                    />
                                }
                                <p className="text-sm">{skill.title}</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills