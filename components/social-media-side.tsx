import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from "framer-motion";

function SocialMediaSide() {
    return (
        <motion.div
            className="absolute left-0 top-2/5 rounded-r-xl pl-[60px] pr-3 py-5 flex flex-col gap-4 bg-indigo-50"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: -50, opacity: 1 }}
        >
            <Link href="https://www.linkedin.com/in/trang-bui-841020189/">
                <Linkedin className="" fill="#818cf8" stroke="#818cf8" size={30} />
            </Link>
            <Link href="https://github.com/buihoaib/">
                <Github className="bg-indigo-400 p-1 rounded-full" fill="white" stroke="white" size={30} />
            </Link>
            <Link href="mailto:buihoaib@gmail.com">
                <Mail stroke="#818cf8" size={30} />
            </Link>
        </motion.div>
    )
}

export default SocialMediaSide