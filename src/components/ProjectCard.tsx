export interface IProjectParams {
    id: number;
    imgName: string;
    titleProject: string;
    stackProject: JSX.Element[];
    linkCode: string;
    linkDemo: string;
}

const ProjectCard: React.FC<IProjectParams> = ({id,imgName,titleProject,stackProject,linkCode,linkDemo}) => {    

    return (
        <div key={id} className="relative overflow-hidden rounded-[20px]">
            <img
                src={imgName}
                className="rounded-[12px]"
                alt="campApp" 
            />
            <div className=" w-full h-full top-0 right-0 bg-[#050505aa] absolute flex flex-col items-center justify-around px-10 opacity-0 duration-300 hover:opacity-100">
                <div className="text-center capitalize text-slate-100 font-black text-xl">{titleProject}</div>
                <div className="text-slate-100 flex gap-5 w-[240px] justify-center">
                    {stackProject}
                </div>
                <div className="flex gap-20">
                    <a href={linkCode} target="blank">
                        <button className="bg-none w-20 text-slate-100 border-2 rounded-xl duration-300 hover:text-[#050505aa] hover:bg-slate-100">CODE</button>
                    </a>
                    <a href={linkDemo} target="blank">
                        <button className="bg-none w-20 text-slate-100 border-2 rounded-xl duration-300 hover:text-[#050505aa] hover:bg-slate-100">DEMO</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
