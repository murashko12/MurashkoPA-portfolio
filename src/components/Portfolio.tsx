import ProjectCard from "./ProjectCard"
// ------------------------------------------------------------------------------
import campApp from '../images/projects/campApp.png'
import passwordGenerator from '../images/projects/passwordGenerator.png'
import githubSearch from '../images/projects/githubSearch.png'
import watchShop from '../images/projects/watchShop.png'
import kanbanBoard from '../images/projects/kanbanBoard.png'
// ------------------------------------------------------------------------------
import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiNextdotjs,SiMui,SiTailwindcss,SiRedux } from "react-icons/si";

import {motion} from "framer-motion"

import {IProjectParams} from './ProjectCard'

const ProjectAnimation = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const Portfolio: React.FC = () => {

    // Object with icons
    const StackIcons: Record<string,JSX.Element> = {
        "HTML": <SiHtml5 size={30}/>,
        "CSS": <SiCss3 size={30}/>,
        "JS": <SiJavascript size={30}/>,
        "TS": <SiTypescript size={30}/>,
        "Redux": <SiRedux size={30}/>,
        "React": <SiReact size={30}/>,
        "Next": <SiNextdotjs size={30}/>,
        "Mui": <SiMui size={30}/>,
        "Tailwindcss": <SiTailwindcss size={30}/>
    }

    const myProjects: IProjectParams[] = [
        {
            id: 1,
            imgName: campApp,
            titleProject: "the camp area app",
            stackProject: [StackIcons["Next"],StackIcons["TS"],StackIcons["Tailwindcss"]],
            linkCode: 'https://github.com/murashko12/camp-app-ts/tree/main',
            linkDemo: 'https://camp-app-ts.vercel.app/'
        },{
            id: 2,
            imgName: passwordGenerator,
            titleProject: "password generator",
            stackProject: [StackIcons["React"],StackIcons["TS"],StackIcons["Mui"]],
            linkCode: 'https://github.com/murashko12/password-generator-ts',
            linkDemo: 'https://password-generator-ts-xi.vercel.app/'
        },{
            id: 3,
            imgName: githubSearch,
            titleProject: "github search",
            stackProject: [StackIcons["React"],StackIcons["TS"],StackIcons["Tailwindcss"],StackIcons["Redux"]],
            linkCode: 'https://github.com/murashko12/github-search',
            linkDemo: 'https://github-search-eight-bay.vercel.app/'
        },{
            id: 4,
            imgName: watchShop,
            titleProject: "the watch shop",
            stackProject: [StackIcons["HTML"],StackIcons["CSS"],StackIcons["JS"]],
            linkCode: 'https://github.com/murashko12/WatchShop',
            linkDemo: 'https://watch-shop-pi.vercel.app/'
        },{
            id: 5,
            imgName: kanbanBoard,
            titleProject: "Kanban Board",
            stackProject: [StackIcons["React"],StackIcons["TS"],StackIcons["Tailwindcss"]],
            linkCode: 'https://github.com/murashko12/kanban-board-ts',
            linkDemo: 'https://kanban-board-ts-virid.vercel.app/'
        }
    ]

    return (
        <div id="portfolio" className="w-[70%] max-w-[1000px]  mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">portfolio</h1>
            <br />
            <p className="text-justify text-slate-100 font-semibold text-lg">Check out some of my works right here</p>
            <br />
            <motion.ul 
                className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {
                    myProjects.map(({id,imgName,titleProject,stackProject,linkCode,linkDemo}) => (
                        <motion.li key={id} variants={ProjectAnimation} custom={id}>
                            <ProjectCard
                                key={id}
                                id={id}
                                imgName={imgName}
                                titleProject={titleProject}
                                stackProject={stackProject}
                                linkCode={linkCode}
                                linkDemo={linkDemo}  
                            />
                        </motion.li>
                    ))
                }
            </motion.ul>
        </div>
    )
}

export default Portfolio
