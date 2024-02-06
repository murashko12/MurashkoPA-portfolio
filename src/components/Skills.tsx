import SkillComponent from "./SkillComponent"

import { SiHtml5,SiCss3,SiJavascript,SiTypescript,SiReact,SiNextdotjs,SiMui,SiTailwindcss,SiRedux } from "react-icons/si";

import {ISkillsParams} from './SkillComponent'

const Skills: React.FC = () => {

    const mySkills: ISkillsParams[] = [
        {
            id: 1,
            title: "HTML",
            range: 100,
            icon: <SiHtml5 size={25} className="text-neutral-100"/>
        },{
            id: 2,
            title: "CSS",
            range: 100,
            icon: <SiCss3 size={25} className="text-neutral-100"/>
        },{
            id: 3,
            title: "JS",
            range: 100,
            icon: <SiJavascript size={25} className="text-neutral-100"/>
        },{
            id: 4,
            title: "TS",
            range: 90,
            icon: <SiTypescript size={25} className="text-neutral-100"/>
        },{
            id: 5,
            title: "React",
            range: 95,
            icon: <SiReact size={25} className="text-neutral-100"/>
        },{
            id: 6,
            title: "Redux",
            range: 80,
            icon: <SiRedux size={25} className="text-neutral-100"/>
        },{
            id: 7,
            title: "NextJS",
            range: 50,
            icon: <SiNextdotjs size={25} className="text-neutral-100"/>
        },{
            id: 8,
            title: "MUI",
            range: 70,
            icon: <SiMui size={25} className="text-neutral-100"/>
        },{
            id: 9,
            title: "TailwindCSS",
            range: 90,
            icon: <SiTailwindcss size={25} className="text-neutral-100"/>
        }
    ]

    return (
        <div className="w-[70%] mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">skills</h1>
            <br />
            <p className="text-justify text-slate-100 font-semibold text-lg">These are the technologies I've worked with</p>
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
