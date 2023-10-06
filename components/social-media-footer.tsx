import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

function SocialMediaFooter() {
    return (
        <div
            className="flex flex-row gap-4"
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
        </div>
    )
}

export default SocialMediaFooter