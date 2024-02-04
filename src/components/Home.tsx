import {motion} from "framer-motion"

import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

import myPhoto from '../images/MurashkoPA.png'

type SocialLinks = {
    id: number;
    child: JSX.Element;
    href: string;
}

const PhotoAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const LinksAnimation = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.1}
    })
}

const Home = () => {

    const links: SocialLinks[] = [
        {
            id: 1,
            child: <FaGithub size={30} />,
            href: "https://github.com/murashko12",
        },
        {
            id: 2,
            child: <FaTelegram size={30} />,
            href: "https://t.me/Peter_Muraschko",
        },
        {
            id: 3,
            child: <FaLinkedin size={30} />,
            href: "#",
        },
        {
            id: 4,
            child: <FaEnvelope size={30} />,
            href: "mailto:petr@ocumare.ru",
        }
    ]

    return (
        <motion.div 
            initial="hidden"
            whileInView="visible" 
            viewport={{ once: true }}
            className="w-[70%] mt-40 mx-auto flex flex-col justify-between items-center h-auto gap-10 lg:flex-row"
        >
            <div>
                <h3 className="uppercase tracking-widest font-semibold text-2xl text-violet-950">murashko petr</h3>
                <br />
                <div className="border-l-2 border-b-2">
                    <h1 className="uppercase text-7xl font-bold text-slate-100 ml-1">fontend<br/>developer</h1>
                </div>
                <div className="flex mt-5 justify-between items-center">
                    <button className="text-slate-100 p-2 rounded-xl border-2 font-bold capitalize">view resume</button>
                    {/* ------------------- */}
                    <ul className="flex gap-5 text-slate-100">
                    {
                        links.map(({id,child,href}) => {
                            return (
                                <motion.li key={id} variants={LinksAnimation} custom={id}>
                                    <a href={href} target="_blank" rel="noreferrer">{child}</a>
                                </motion.li>
                            )
                        })
                    }
                    {/* ------------------- */}
                    </ul>
                </div>
            </div>
            <motion.img
                variants={PhotoAnimation}
                transition={{duration: 0.5}}
                viewport={{ once: true }}
                src={myPhoto} alt="myPhoto" className="w-[266px] h-[266px] rounded-full object-cover"
            />
        </motion.div>
    )
}

export default Home
