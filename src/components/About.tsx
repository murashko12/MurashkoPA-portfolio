import { BsLightningFill } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { SiFreelancer } from "react-icons/si";

const About:React.FC = () => {
    return (
        <div id="about" className="w-[70%] mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">about</h1>
            <br />
            <p className="text-slate-100 text-lg text-justify">
                I’ve been studying in the fourth year of the bachelor's degree program at the National Research University «Moscow Power Engineering Institute» with the degree in 09.03.01 «Computer Science and Computer Engineering». 
                I’ve taken courses in Web development from «<a href="https://thmoon.ru/" target="_blank">Thmoon</a>». 
                I’ve worked with «Logistics Engineering Center». I'm still improving my React skills. My English level is C1 «Advanced». 
                Personal qualities: purposeful, able to work in a team, pragmatic, stress-resistant and creative.
            </p>
            <br />

            {/* Timeline */}

            <div className="flex flex-col justify-center">
                <div className=" sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">

                    <div className="relative text-gray-700 antialiased text-md font-semibold">

                    {/* Vertical bar running through middle */}
                        <div className="hidden sm:block border bg-slate-100 absolute h-full left-1/2 transform -translate-x-1/2"></div>

                    {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            2022 March
                                            <br />
                                            The start learning Frontend-development and the first acquaintance with react. 
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-slate-100 border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <GiClassicalKnowledge className="text-slate-100" size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            2022 June
                                            <br />
                                            Freelancing at the startup «Thmoon»
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-white border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <SiFreelancer className="text-slate-100" size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pr-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            2022 November
                                            <br />
                                            Development of the client side of the «Logistics Engineering Center» company's website
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-white border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <BsLightningFill className="text-slate-100" size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Right section, set by justify-end and sm:pl-8 */}
                        <div className="mt-6 sm:mt-0">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-end w-full mx-auto items-center">
                                    <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            2023 February - September
                                            <br />
                                            Development website for the IT-school of «Turing» at the National Research University «Moscow Power Engineering Institute»
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-white border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <GoProjectRoadmap className="text-slate-100" size={20}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
