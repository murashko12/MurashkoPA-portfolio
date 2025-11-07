import { 
    SiHtml5, SiCss3, SiJavascript, SiTypescript, 
    SiReact, SiNextdotjs, SiTailwindcss, SiRedux, 
    SiJest, SiWebpack, SiGit, SiDocker, SiPostgresql 
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscCode } from "react-icons/vsc"
import { ISkillsParams } from "../components/SkillComponent"

export const SkillsItems: ISkillsParams[] = [
    {
        id: 1,
        title: "HTML5",
        range: 90,
        icon: <SiHtml5 size={24} />,
        color: "text-orange-500"
    },
    {
        id: 2,
        title: "CSS3",
        range: 90,
        icon: <SiCss3 size={24} />,
        color: "text-blue-500"
    },
    {
        id: 3,
        title: "JavaScript",
        range: 85,
        icon: <SiJavascript size={24} />,
        color: "text-yellow-400"
    },
    {
        id: 4,
        title: "TypeScript",
        range: 90,
        icon: <SiTypescript size={24} />,
        color: "text-blue-600"
    },
    {
        id: 5,
        title: "React",
        range: 85,
        icon: <SiReact size={24} />,
        color: "text-cyan-400"
    },
    {
        id: 6,
        title: "Next.js",
        range: 75,
        icon: <SiNextdotjs size={24} />,
        color: "text-white"
    },
    {
        id: 7,
        title: "Redux Toolkit",
        range: 80,
        icon: <SiRedux size={24} />,
        color: "text-purple-500"
    },
    {
        id: 8,
        title: "Tailwind CSS",
        range: 90,
        icon: <SiTailwindcss size={24} />,
        color: "text-cyan-400"
    },
    {
        id: 9,
        title: "Jest & RTL",
        range: 75,
        icon: <SiJest size={24} />,
        color: "text-red-500"
    },
    {
        id: 10,
        title: "Webpack / Vite",
        range: 70,
        icon: <SiWebpack size={24} />,
        color: "text-blue-400"
    },
    {
        id: 11,
        title: "REST API / GraphQL",
        range: 85,
        icon: <TbApi size={24} />,
        color: "text-green-400"
    },
    {
        id: 12,
        title: "PostgreSQL",
        range: 65,
        icon: <SiPostgresql size={24} />,
        color: "text-blue-400"
    },
    {
        id: 13,
        title: "Git / GitHub",
        range: 90,
        icon: <SiGit size={24} />,
        color: "text-orange-500"
    },
    {
        id: 14,
        title: "Docker",
        range: 60,
        icon: <SiDocker size={24} />,
        color: "text-blue-500"
    },
    {
        id: 15,
        title: "VS Code",
        range: 95,
        icon: <VscCode size={24} />,
        color: "text-blue-400"
    }
]