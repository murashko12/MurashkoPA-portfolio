import { 
    SiHtml5, SiCss3, SiJavascript, SiTypescript, 
    SiReact, SiNextdotjs, SiMui, SiTailwindcss, SiRedux 
} from "react-icons/si"

// ------------------------------------------------------------------------------
import campApp from '../images/projects/campApp.png'
import passwordGenerator from '../images/projects/passwordGenerator.png'
import githubSearch from '../images/projects/githubSearch.png'
import watchShop from '../images/projects/watchShop.png'
import kanbanBoard from '../images/projects/kanbanBoard.png'
import ecommerceApp from '../images/projects/ecommerceApp.png'
// ------------------------------------------------------------------------------

import { IProjectParams } from "../components/ProjectCard"

const StackIcons: Record<string, JSX.Element> = {
    "HTML": <SiHtml5 className="text-orange-500" size={24} />,
    "CSS": <SiCss3 className="text-blue-500" size={24} />,
    "JS": <SiJavascript className="text-yellow-400" size={24} />,
    "TS": <SiTypescript className="text-blue-600" size={24} />,
    "Redux": <SiRedux className="text-purple-500" size={24} />,
    "React": <SiReact className="text-cyan-400" size={24} />,
    "Next": <SiNextdotjs className="text-white" size={24} />,
    "Mui": <SiMui className="text-blue-400" size={24} />,
    "Tailwindcss": <SiTailwindcss className="text-cyan-400" size={24} />
}

export const getProjectsItems = (t: (key: string) => string): IProjectParams[] => [
    {
        id: 1,
        imgName: campApp,
        titleProject: "The Camp Area App",
        stackProject: [StackIcons["Next"], StackIcons["TS"], StackIcons["Tailwindcss"]],
        linkCode: 'https://github.com/murashko12/camp-app-ts/tree/main',
        linkDemo: 'https://camp-app-ts.vercel.app/',
        description: t('portfolio.projects.campApp')
    },
    {
        id: 2,
        imgName: passwordGenerator,
        titleProject: "Password Generator",
        stackProject: [StackIcons["React"], StackIcons["TS"], StackIcons["Mui"]],
        linkCode: 'https://github.com/murashko12/password-generator-ts',
        linkDemo: 'https://password-generator-ts-xi.vercel.app/',
        description: t('portfolio.projects.passwordGenerator')
    },
    {
        id: 3,
        imgName: githubSearch,
        titleProject: "GitHub Search",
        stackProject: [StackIcons["React"], StackIcons["TS"], StackIcons["Tailwindcss"], StackIcons["Redux"]],
        linkCode: 'https://github.com/murashko12/github-search',
        linkDemo: 'https://github-search-eight-bay.vercel.app/',
        description: t('portfolio.projects.githubSearch')
    },
    {
        id: 4,
        imgName: watchShop,
        titleProject: "The Watch Shop",
        stackProject: [StackIcons["HTML"], StackIcons["CSS"], StackIcons["JS"]],
        linkCode: 'https://github.com/murashko12/WatchShop',
        linkDemo: 'https://watch-shop-pi.vercel.app/',
        description: t('portfolio.projects.watchShop')
    },
    {
        id: 5,
        imgName: kanbanBoard,
        titleProject: "Kanban Board",
        stackProject: [StackIcons["React"], StackIcons["TS"], StackIcons["Tailwindcss"]],
        linkCode: 'https://github.com/murashko12/kanban-board-ts',
        linkDemo: 'https://kanban-board-ts-virid.vercel.app/',
        description: t('portfolio.projects.kanbanBoard')
    },
    {
        id: 6,
        imgName: ecommerceApp,
        titleProject: "Ecommerce App",
        stackProject: [StackIcons["React"], StackIcons["TS"], StackIcons["Tailwindcss"], StackIcons["Redux"]],
        linkCode: 'https://github.com/murashko12/ecommerce-cart',
        linkDemo: 'https://ecommerce-cart-olive.vercel.app/',
        description: t('portfolio.projects.ecommerceApp')
    }
]