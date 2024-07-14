import { useState } from "react";
import {motion} from "framer-motion"
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import ModalWindow from "./ModalWindow";

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

const NavBar: React.FC = () => {

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
                className="fixed flex justify-center top-0 right-0 left-0 z-10 opacity-0 lg:opacity-100"
            >
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
            </motion.div>
            <motion.button 
                    onClick={() => setNav(!nav)}
                    variants={NavBarAnimation}
                    transition={{duration: 1.2}}
                    className="fixed text-slate-100 backdrop-blur-lg top-5 left-[15%]  p-4 mt-0 rounded-full border-2 z-20 opacity-100 lg:opacity-0"
                >
                    {nav ? <IoClose size={24}/> : <IoMenu size={24}/>}
            </motion.button>
            <ModalWindow isOpen={nav} toggle={() => setNav(false)}>
                <nav className="text-slate-100 text-3xl">
                    <ul className="flex flex-col gap-10">
                        {
                            links.map(({id,link}) => (
                                <li key={id} className="w-72 py-3 text-center cursor-pointer capitalize border-2 rounded-full">
                                    <Link onClick={() => setNav(false)} to={link} smooth duration={500}>{link}</Link>    
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </ModalWindow>
        </>
    )
}

export default NavBar
