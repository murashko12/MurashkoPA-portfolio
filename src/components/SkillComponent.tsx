export interface ISkillsParams {
    id: number;
    title: string;
    range: number;
    icon: JSX.Element
}

const SkillComponent: React.FC<ISkillsParams> = ({id,title,range,icon}) => {
    
    return (
        <div key={id} className="h-16 w-full border-2 p-1 rounded-full">
            <div className="bg-slate-100 h-full rounded-full flex items-center justify-between p-1" style={{width: `${range}%`}}>
                <div className="flex items-center text-[#288499] gap-2">
                    <div className="h-11 w-11 flex justify-center items-center bg-[#288499] rounded-full">
                        {icon}
                    </div>
                    <p className="font-black">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent
