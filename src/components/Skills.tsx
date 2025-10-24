import SkillComponent from "./SkillComponent"
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiJest, SiWebpack, SiGit, SiDocker, SiPostgresql } from "react-icons/si";
import { TbApi } from "react-icons/tb"
import { VscCode } from "react-icons/vsc"
import { ISkillsParams } from './SkillComponent'

const Skills: React.FC = () => {

    const mySkills: ISkillsParams[] = [
        {
            id: 1,
            title: "HTML5",
            range: 100,
            icon: <SiHtml5 size={25} className="text-neutral-100"/>
        },{
            id: 2,
            title: "CSS3",
            range: 100,
            icon: <SiCss3 size={25} className="text-neutral-100"/>
        },{
            id: 3,
            title: "JavaScript",
            range: 100,
            icon: <SiJavascript size={25} className="text-neutral-100"/>
        },{
            id: 4,
            title: "TypeScript",
            range: 100,
            icon: <SiTypescript size={25} className="text-neutral-100"/>
        },{
            id: 5,
            title: "React",
            range: 100,
            icon: <SiReact size={25} className="text-neutral-100"/>
        },{
            id: 6,
            title: "Next.js",
            range: 90,
            icon: <SiNextdotjs size={25} className="text-neutral-100"/>
        },{
            id: 7,
            title: "Redux Toolkit",
            range: 100,
            icon: <SiRedux size={25} className="text-neutral-100"/>
        },{
            id: 8,
            title: "Tailwind CSS",
            range: 100,
            icon: <SiTailwindcss size={25} className="text-neutral-100"/>
        },{
            id: 9,
            title: "Jest & RTL",
            range: 85,
            icon: <SiJest size={25} className="text-neutral-100"/>
        },{
            id: 10,
            title: "Webpack / Vite",
            range: 80,
            icon: <SiWebpack size={25} className="text-neutral-100"/>
        },{
            id: 11,
            title: "REST API / GraphQL",
            range: 90,
            icon: <TbApi size={25} className="text-neutral-100"/>
        },{
            id: 12,
            title: "PostgreSQL",
            range: 75,
            icon: <SiPostgresql size={25} className="text-neutral-100"/>
        },{
            id: 13,
            title: "Git / GitHub",
            range: 100,
            icon: <SiGit size={25} className="text-neutral-100"/>
        },{
            id: 14,
            title: "Docker",
            range: 70,
            icon: <SiDocker size={25} className="text-neutral-100"/>
        },{
            id: 15,
            title: "VS Code",
            range: 100,
            icon: <VscCode size={25} className="text-neutral-100"/>
        }
    ]

    return (
        <div id="skills" className="w-[70%] max-w-[1000px] mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">skills</h1>
            <br />
            <p className="text-justify text-slate-100 font-semibold text-lg">
                My technology stack includes modern frontend tools and methodologies that I actively use in commercial projects
            </p>
            <br />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3">
                {
                    mySkills.map(({id,title,range,icon}) => (
                        <SkillComponent
                            key={id} 
                            id={id}
                            title={title} 
                            range={range}
                            icon={icon}   
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Skills