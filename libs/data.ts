import shopcoAdminImg from "@/public/shopco-admin.png";
import shopcoStoreImg from "@/public/shopco-store.png";
import portfolioImg from "@/public/portfolio-web.png";
import prismaImg from "@/public/prisma.svg";
import framerMotionImg from "@/public/framer-motion.svg";
import stripeImg from "@/public/stripe.svg";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const skillsData = [
    {
        title: "Git",
        type: "icon",
        classnameOrUrl: "devicon-git-plain"
    },
    {
        title: "HTML",
        type: "icon",
        classnameOrUrl: "devicon-html5-plain"
    },
    {
        title: "CSS",
        type: "icon",
        classnameOrUrl: "devicon-css3-plain"
    },
    {
        title: "JavaScript",
        type: "icon",
        classnameOrUrl: "devicon-javascript-plain"
    },
    {
        title: "TypeScript",
        type: "icon",
        classnameOrUrl: "devicon-typescript-plain"
    },
    {
        title: "React",
        type: "icon",
        classnameOrUrl: "devicon-react-plain"
    },
    {
        title: "Next.js",
        type: "icon",
        classnameOrUrl: "devicon-nextjs-plain"
    },
    {
        title: "Node.js",
        type: "icon",
        classnameOrUrl: "devicon-html5-plain"
    },
    {
        title: "Tailwind",
        type: "icon",
        classnameOrUrl: "devicon-tailwindcss-plain"
    },
    {
        title: "MongoDB",
        type: "icon",
        classnameOrUrl: "devicon-mongodb-plain"
    },
    {
        title: "Microsoft SQL Server",
        type: "icon",
        classnameOrUrl: "devicon-microsoftsqlserver-plain"
    },
    {
        title: "Express.js",
        type: "icon",
        classnameOrUrl: "devicon-express-original"
    },
    {
        title: "C++",
        type: "icon",
        classnameOrUrl: "devicon-cplusplus-plain"
    },
    {
        title: "Java",
        type: "icon",
        classnameOrUrl: "devicon-java-plain"
    },
    {
        title: "Figma",
        type: "icon",
        classnameOrUrl: "devicon-figma-plain"
    },
    {
        title: "Prisma",
        type: "img",
        classnameOrUrl: prismaImg
    },
    {
        title: "Framer Motion",
        type: "img",
        classnameOrUrl: framerMotionImg
    },
] as const;

export const learningSkills = [
    {
        title: "Python",
        type: "icon",
        classnameOrUrl: "devicon-python-plain"
    },
    {
        title: "AWS",
        type: "icon",
        classnameOrUrl: "devicon-amazonwebservices-original"
    },
    {
        title: "Three.js",
        type: "icon",
        classnameOrUrl: "devicon-threejs-original"
    },
] as const;

export const projectsData = [
    {
        title: "SHOP.CO Admin",
        description:
            "An apparel store pursuing minimal and elegant styles.",
        tags: [
            {
                title: "React",
                type: "icon",
                classnameOrUrl: "devicon-react-plain"
            },
            {
                title: "Next.js",
                type: "icon",
                classnameOrUrl: "devicon-nextjs-plain"
            },
            {
                title: "Tailwind",
                type: "icon",
                classnameOrUrl: "devicon-tailwindcss-plain"
            },
        ],
        imageUrl: shopcoStoreImg,
        liveUrl: "https://shopco-store.vercel.app/",
        repo: "https://github.com/buihoaib/shopco-store",
    },
    {
        title: "SHOP.CO Store",
        description:
            "A content management system (CMS) for SHOP.CO. It manages the products, categories, and orders, as well as provides a general sales analytics for SHOP.CO.",
        tags: [
            {
                title: "React",
                type: "icon",
                classnameOrUrl: "devicon-react-plain"
            },
            {
                title: "Next.js",
                type: "icon",
                classnameOrUrl: "devicon-nextjs-plain"
            },
            {
                title: "Tailwind",
                type: "icon",
                classnameOrUrl: "devicon-tailwindcss-plain"
            },
            {
                title: "MongoDB",
                type: "icon",
                classnameOrUrl: "devicon-mongodb-plain"
            },
            {
                title: "Prisma",
                type: "img",
                classnameOrUrl: prismaImg
            },
            {
                title: "Stripe",
                type: "img",
                classnameOrUrl: stripeImg
            },
        ],
        imageUrl: shopcoAdminImg,
        liveUrl: "https://shopco-admin.vercel.app/",
        repo: "https://github.com/buihoaib/shopco-admin",
    },
    {
        title: "Personal Portfolio",
        description:
            "My personal portfolio, where I showcase my work as well as my learning journey.",
        tags: [
            {
                title: "React",
                type: "icon",
                classnameOrUrl: "devicon-react-plain"
            },
            {
                title: "Next.js",
                type: "icon",
                classnameOrUrl: "devicon-nextjs-plain"
            },
            {
                title: "Tailwind",
                type: "icon",
                classnameOrUrl: "devicon-tailwindcss-plain"
            },
            {
                title: "Framer Motion",
                type: "img",
                classnameOrUrl: framerMotionImg
            },
        ],
        imageUrl: portfolioImg,
        liveUrl: "https://portfolio-buihoaib.vercel.app/",
        repo: "https://github.com/buihoaib/portfolio",
    },
] as const;