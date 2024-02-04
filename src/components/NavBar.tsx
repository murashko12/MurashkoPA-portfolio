import { useState } from "react";
import {motion} from "framer-motion"
import { IoLanguageOutline, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

type NavBarPoint = {
    id: number;
    link: string;
}

const NavBarAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const LanguageAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const NavBar = () => {

    const [nav, setNav] = useState<boolean>(false)

    const links: NavBarPoint[] = [
        {
            id: 1,
            link: 'home'
        },{
            id: 2,
            link: 'about'
        },{
            id: 3,
            link: 'portfolio'
        },{
            id: 4,
            link: 'skills'
        },{
            id: 5,
            link: 'contact'
        }
    ]

    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible" 
                className="fixed flex justify-center gap-4 top-0 right-0 left-0 z-10 opacity-0 lg:opacity-100"

            >
                {/* <button>asdadsasd</button> */}

                <motion.nav
                    variants={NavBarAnimation}
                    transition={{duration: 1.2}}
                    className="text-base text-slate-100 backdrop-blur-lg px-5 py-2 mt-5 rounded-full border-2"
                >
                    <ul className="grid grid-cols-5 divide-x">
                        {
                            links.map(({id,link}) => (
                                <li key={id} className="w-28 text-center cursor-pointer capitalize hover:underline">
                                    <Link onClick={() => setNav(false)} to={link} smooth duration={500}>{link}</Link>    
                                </li>
                            ))
                        }
                    </ul>
                </motion.nav>
                <motion.button 
                    variants={LanguageAnimation}
                    transition={{duration: 1.2}}
                    className="text-slate-100 backdrop-blur-lg p-2 mt-5 rounded-full border-2"
                >
                    <IoLanguageOutline size={24}/>
                </motion.button>
                    
            </motion.div>
            <motion.button 
                    variants={NavBarAnimation}
                    
                    transition={{duration: 1.2}}
                    className="fixed text-slate-100 backdrop-blur-lg top-5 left-[15%]  p-4 mt-0 rounded-full border-2 z-10 opacity-100 lg:opacity-0"
                >
                    <IoMenu size={24}/>
            </motion.button>
        </>
    )
}

export default NavBar
