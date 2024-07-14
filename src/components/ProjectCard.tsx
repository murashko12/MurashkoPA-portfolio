import { FaGithub } from "react-icons/fa";
import { CgVercel } from "react-icons/cg";


export interface IProjectParams {
    id: number;
    imgName: string;
    titleProject: string;
    stackProject: JSX.Element[];
    linkCode: string;
    linkDemo: string;
}

const ProjectCard: React.FC<IProjectParams> = (props) => {    
    
    return (
        <div className="relative overflow-hidden rounded-[20px] shadow-2xl">
            <img
                src={props.imgName}
                className="rounded-[12px]"
                alt="campApp" 
            />
            <div className=" w-full h-full top-0 right-0 bg-[#050505aa] absolute flex flex-col items-center justify-around px-10 opacity-0 duration-300 hover:opacity-100">
                <div className="text-center capitalize text-slate-100 font-black text-xl">{props.titleProject}</div>
                <div className="text-slate-100 flex gap-5 w-[240px] justify-center">
                    {props.stackProject}
                </div>
                <div className="flex gap-20">
                    <a href={props.linkCode} target="blank">
                        <button className="flex justify-between px-1 items-center bg-none w-20 text-slate-100 border-2 rounded-xl duration-300 hover:text-[#050505aa] hover:bg-slate-100">
                            <FaGithub size={18}/>
                            CODE
                        </button>
                    </a>
                    <a href={props.linkDemo} target="blank">
                        <button className="flex justify-between px-1 items-center bg-none w-20 text-slate-100 border-2 rounded-xl duration-300 hover:text-[#050505aa] hover:bg-slate-100">
                            DEMO
                            <CgVercel size={18} className="border rounded-full"/>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
