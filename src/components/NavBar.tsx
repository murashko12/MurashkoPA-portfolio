import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMenu, IoClose } from "react-icons/io5"
import { Link } from "react-scroll"
import { useLanguage } from "../contexts/LanguageContext"
import { useTranslation } from "../hooks/useTranslation"

type NavBarPoint = {
    id: number
    link: string
    label: string
}

const NavBar = () => {
    const [nav, setNav] = useState<boolean>(false)
    const [activeLink, setActiveLink] = useState<string>('home')
    const { language, toggleLanguage } = useLanguage()
    const { t } = useTranslation()

    const links: NavBarPoint[] = [
        { id: 1, link: 'home', label: t('nav.home') },
        { id: 2, link: 'about', label: t('nav.about') },
        { id: 3, link: 'portfolio', label: t('nav.portfolio') },
        { id: 4, link: 'skills', label: t('nav.skills') },
        { id: 5, link: 'contact', label: t('nav.contact') }
    ]

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5
            }
        })
    }

    const mobileMenuVariants = {
        closed: {
            opacity: 0,
            x: "-100%",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    }

    const mobileItemVariants = {
        closed: { opacity: 0, x: -50 },
        open: (custom: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.1,
                duration: 0.5
            }
        })
    }

    const handleSetActive = (to: string) => {
        setActiveLink(to)
    }

    const scrollSettings = {
        smooth: true,
        duration: 500,
        spy: true,
        offset: -400,
        delay: 100,
        isDynamic: true
    }

    return (
        <>
            {/* Desktop Navigation */}
            <motion.header
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
                className="fixed top-0 left-0 right-0 z-50 py-4 hidden lg:block"
            >
                <div className="w-[90%] max-w-[1200px] mx-auto">
                    <motion.nav className="flex items-center justify-center">
                        <motion.ul className="flex items-center gap-1 bg-slate-800/80 backdrop-blur-md px-3 py-3 rounded-full border border-slate-700 shadow-2xl">
                            {links.map(({ id, link, label }) => (
                                <motion.li
                                    key={id}
                                    custom={id}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <Link
                                        to={link}
                                        {...scrollSettings}
                                        onSetActive={handleSetActive}
                                        className={`
                                            relative px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300
                                            ${activeLink === link
                                                ? "text-cyan-400"
                                                : "text-slate-300 hover:text-slate-100"
                                            }
                                        `}
                                    >
                                        {label}
                                        
                                        {/* Active Indicator */}
                                        {activeLink === link && (
                                            <motion.div
                                                layoutId="activeIndicator"
                                                className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-full -z-10"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                    </Link>
                                </motion.li>
                            ))}
                            
                            {/* Language Switcher - Desktop */}
                            <motion.li
                                variants={itemVariants}
                                custom={6}
                            >
                                <motion.button
                                    onClick={toggleLanguage}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-slate-100 transition-all duration-300 border border-slate-600 hover:border-cyan-400 ml-2"
                                >
                                    {language === 'en' ? 'RU' : 'EN'}
                                </motion.button>
                            </motion.li>
                        </motion.ul>
                    </motion.nav>
                </div>
            </motion.header>

            {/* Mobile Menu Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setNav(!nav)}
                className="fixed top-6 right-6 z-50 lg:hidden p-3 bg-slate-800/80 backdrop-blur-md text-slate-100 rounded-full border border-slate-700 shadow-2xl"
            >
                {nav ? <IoClose size={20} /> : <IoMenu size={20} />}
            </motion.button>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {nav && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setNav(false)}
                            className="fixed inset-0 z-40 bg-slate-900/80 backdrop-blur-sm lg:hidden"
                        />
                        
                        {/* Mobile Menu */}
                        <motion.div
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 left-0 bottom-0 w-80 z-40 bg-slate-800/95 backdrop-blur-md border-r border-slate-700 shadow-2xl lg:hidden"
                        >
                            <div className="flex flex-col h-full pt-20 px-8">

                                {/* Profile Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="mb-12"
                                >
                                    <h2 className="text-2xl font-bold text-cyan-400">Petr Murashko</h2>
                                    <p className="text-slate-400 text-sm">Frontend Developer</p>
                                </motion.div>

                                {/* Navigation Links */}
                                <nav className="flex-1">
                                    <ul className="space-y-4">
                                        {links.map(({ id, link, label }) => (
                                            <motion.li
                                                key={id}
                                                custom={id}
                                                variants={mobileItemVariants}
                                                initial="closed"
                                                animate="open"
                                            >
                                                <Link
                                                    to={link}
                                                    {...scrollSettings}
                                                    onSetActive={handleSetActive}
                                                    onClick={() => setNav(false)}
                                                    className={`
                                                        block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 border
                                                        ${activeLink === link
                                                            ? "text-cyan-400 bg-cyan-400/10 border-cyan-400/30"
                                                            : "text-slate-300 border-slate-600 hover:text-slate-100 hover:border-slate-500"
                                                        }
                                                    `}
                                                >
                                                    {label}
                                                </Link>
                                            </motion.li>
                                        ))}
                                        
                                        {/* Language Switcher - Mobile */}
                                        <motion.li
                                            custom={6}
                                            variants={mobileItemVariants}
                                            initial="closed"
                                            animate="open"
                                        >
                                            <button
                                                onClick={() => {
                                                    toggleLanguage()
                                                    setNav(false)
                                                }}
                                                className="w-full px-6 py-4 rounded-xl text-lg font-medium text-slate-300 border border-slate-600 hover:text-slate-100 hover:border-cyan-400 transition-all duration-300 text-left"
                                            >
                                                {language === 'en' ? 'Русский' : 'English'}
                                            </button>
                                        </motion.li>
                                    </ul>
                                </nav>

                                {/* Contact Info */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="pb-8 pt-12 border-t border-slate-700"
                                >
                                    <p className="text-slate-400 text-sm mb-4">
                                        {language === 'en' ? 'Get in touch' : 'Связаться со мной'}
                                    </p>
                                    <a
                                        href="mailto:petr@ocumare.ru"
                                        className="text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        petr@ocumare.ru
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default NavBar