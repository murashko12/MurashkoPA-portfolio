import { BsLightningFill } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { SiFreelancer } from "react-icons/si";

const About:React.FC = () => {
    return (
        <div id="about" className="w-[70%] max-w-[1000px]  mx-auto h-auto">
            <h1 className="uppercase tracking-widest font-semibold text-4xl text-slate-100 text-center border-b-2">about</h1>
            <br />
            <p className="text-slate-100 text-lg text-justify">
                I am a Frontend Developer with over 3.5 years of commercial experience, specializing in modern React, TypeScript, and state management. I hold a Bachelor's degree in Computer Science from the National Research University «Moscow Power Engineering Institute». My career began with an internship at «<a href="https://thmoon.ru/" target="_blank">Thmoon</a>», where I progressed to a Junior role, and I am currently working as a Middle Frontend Developer at «G-Lab LLC». I am passionate about building efficient, scalable, and user-friendly applications, and I continuously strive to improve my skills through practice and learning. I am proficient in English (C1 Advanced) and value teamwork, pragmatism, and clean code principles such as SOLID, DRY, and KISS.
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
                                    <div className="w-full text-center sm:text-left sm:w-1/2 sm:pr-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            <h1 className="text-xl border-b sm:border-none">2021 September</h1>
                                            <br />
                                            <p>Development of the client side of the «Logistics Engineering Center» company's website</p>
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
                                    <div className="w-full text-center sm:text-left sm:w-1/2 sm:pl-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            <h1 className="text-xl border-b sm:border-none">2022 March</h1>
                                            <br />
                                            <p>Intern at the startup «Thmoon»</p>
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
                                    <div className="w-full text-center sm:text-left sm:w-1/2 sm:pr-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            <h1 className="text-xl border-b sm:border-none">2023 February</h1>
                                            <br />
                                            <p>Junior at the startup «Thmoon»</p>
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
                                    <div className="w-full text-center sm:text-left sm:w-1/2 sm:pl-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            <h1 className="text-xl border-b sm:border-none">2023 February - September</h1>
                                            <br />
                                            <p>Development website for the IT-school of «Turing» at the National Research University «Moscow Power Engineering Institute»</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-white border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <GoProjectRoadmap className="text-slate-100" size={20}/>
                                </div>
                            </div>
                        </div>

                        {/* Left section, set by justify-start and sm:pr-8 */}
                        <div className="mt-6 sm:mt-0 sm:mb-12">
                            <div className="flex flex-col sm:flex-row items-center">
                                <div className="flex justify-start w-full mx-auto items-center">
                                    <div className="w-full text-center sm:text-left sm:w-1/2 sm:pr-8">
                                        <div className="p-4 border-2 rounded-xl text-slate-100">
                                            <h1 className="text-xl border-b sm:border-none">2024 June</h1>
                                            <br />
                                            <p>Middle Frontend Developer at «G-Lab LLC»</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-full bg-[#288499] border-white border-2 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                                    <BsLightningFill className="text-slate-100" size={20}/>
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