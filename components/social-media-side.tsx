import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion";

function SocialMediaSide() {
    return (
        <motion.div
            className="absolute hidden left-0 sm:top-1/2 md:top-2/5 rounded-r-xl pl-[60px] pr-3 py-5 sm:flex flex-col gap-4 bg-indigo-400"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: -50, opacity: 1 }}
        >
            <Link href="https://www.linkedin.com/in/trang-bui-841020189/">
                <Linkedin className="" fill="white" stroke="white" size={30} />
            </Link>
            <Link href="https://github.com/buihoaib/">
                <Github className="bg-white p-1 rounded-full" fill="#818cf8" stroke="#818cf8" size={30} />
            </Link>
            <Link href="mailto:buihoaib@gmail.com">
                <Mail stroke="white" size={30} />
            </Link>
        </motion.div>
    )
}

export default SocialMediaSide