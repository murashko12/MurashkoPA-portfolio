import { motion } from "framer-motion"
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FiDownload } from "react-icons/fi"

import myPhoto from '../images/MurashkoPA.png'
import myResume from '../assets/MurashkoPA-CV(EN).pdf'

interface SocialLink {
  id: number
  child: JSX.Element
  href: string
  label: string
}

const Home = () => {
  const socialLinks: SocialLink[] = [
    {
      id: 1,
      child: <FaGithub size={24} />,
      href: "https://github.com/murashko12",
      label: "GitHub"
    },
    {
      id: 2,
      child: <FaTelegram size={24} />,
      href: "https://t.me/Peter_Muraschko",
      label: "Telegram"
    },
    {
      id: 3,
      child: <FaLinkedin size={24} />,
      href: "https://www.linkedin.com/in/petr-murashko-646463297/",
      label: "LinkedIn"
    },
    {
      id: 4,
      child: <FaEnvelope size={24} />,
      href: "mailto:petr@ocumare.ru",
      label: "Email"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const photoVariants = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const linkVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.5 }
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.2 }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.8, duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(6, 182, 212, 0.1)",
      borderColor: "rgb(34, 211, 238)",
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.section
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="w-[90%] max-w-[1200px] mx-auto py-20 min-h-screen flex flex-col justify-center"
    >
      <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:justify-between lg:items-center">
        {/* Text Content */}
        <motion.div className="flex-1 text-center lg:text-left">
          <motion.h3 
            variants={textVariants}
            className="uppercase tracking-widest font-semibold text-2xl text-cyan-400 mb-4"
          >
            Petr Murashko
          </motion.h3>
          
          <motion.div 
            variants={textVariants}
            className="mb-8"
          >
            <h1 className="uppercase text-5xl lg:text-7xl font-bold text-slate-100 leading-tight">
              Frontend
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Developer
              </span>
            </h1>
          </motion.div>

          <motion.p 
            variants={textVariants}
            className="text-slate-300 text-lg mb-8 max-w-2xl leading-relaxed"
          >
            React & TypeScript Specialist with <span className="text-cyan-400 font-semibold">4+ years</span> of experience. 
            Passionate about building <span className="text-cyan-400">high-performance</span> web applications 
            with modern technologies and clean architecture.
          </motion.p>

          {/* Actions */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start"
          >
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              className="flex items-center gap-3 bg-cyan-600 hover:bg-cyan-700 text-slate-100 px-8 py-4 rounded-xl font-semibold transition-all duration-300 border-2 border-cyan-400 shadow-lg"
            >
              <FiDownload size={20} />
              <a href={myResume} download="Petr_Murashko_Resume.pdf">
                Download CV
              </a>
            </motion.button>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  variants={linkVariants}
                  custom={link.id}
                  whileHover="hover"
                  className="text-slate-300 hover:text-cyan-400 p-3 rounded-full border border-slate-600 hover:border-cyan-400 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.child}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          variants={photoVariants}
          className="flex-1 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <motion.img
              src={myPhoto} 
              alt="Petr Murashko"
              className="w-80 h-96 rounded-2xl object-cover border-4 border-cyan-400 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-4 rounded-2xl border-2 border-cyan-400/30 -z-10"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default Home