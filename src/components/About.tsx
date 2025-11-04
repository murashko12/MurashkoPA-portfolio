import { motion } from "framer-motion"
import { BsLightningFill, BsRocketTakeoff, BsGraphUp } from "react-icons/bs"
import { GiTeacher, GiSpiderWeb } from "react-icons/gi"
import { GoRocket } from "react-icons/go"
import { SiFreelancer } from "react-icons/si"
import { FaLaptopCode } from "react-icons/fa"

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: React.ReactNode
  achievements?: string[]
}

const About: React.FC = () => {
  const timelineEvents: TimelineEvent[] = [
    {
      date: "2021 September",
      title: "Logistics Engineering Center",
      description: "Development of the client side of the company's website",
      icon: <GiSpiderWeb className="text-slate-100" size={18} />,
      achievements: ["First commercial project", "SPA development", "Client-side architecture"]
    },
    {
      date: "2022 March",
      title: "Thmoon Startup",
      description: "Frontend Developer Intern",
      icon: <SiFreelancer className="text-slate-100" size={18} />,
      achievements: ["React & TypeScript", "Startup environment", "Agile development"]
    },
    {
      date: "2023 February",
      title: "Thmoon Startup",
      description: "Junior → Middle Frontend Developer",
      icon: <BsRocketTakeoff className="text-slate-100" size={18} />,
      achievements: ["15+ SPA applications", "98% Lighthouse score", "Team leadership"]
    },
    {
      date: "2023 February - September",
      title: "Turing IT School at MPEI",
      description: "Website development for the IT school",
      icon: <GiTeacher className="text-slate-100" size={18} />,
      achievements: ["University project", "Educational platform", "Modern stack implementation"]
    },
    {
      date: "2024 June - Present",
      title: "G-Lab LLC",
      description: "Middle Frontend Developer",
      icon: <BsGraphUp className="text-slate-100" size={18} />,
      achievements: ["UI system development", "35% performance improvement", "Architecture optimization"]
    }
  ];

  // Анимации
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const timelineItemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.2
      }
    }
  }

  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4
      }
    })
  }

  const statsVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  }

  const TimelineItem = ({ event, isEven }: { event: TimelineEvent; isEven: boolean; index: number }) => (
    <motion.div
      variants={timelineItemVariants}
      className="mt-6 sm:mt-0 sm:mb-12"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className={`flex ${isEven ? 'justify-start' : 'justify-end'} w-full mx-auto items-center`}>
          <div className={`w-full text-center sm:text-left sm:w-1/2 ${isEven ? 'sm:pr-8' : 'sm:pl-8'}`}>
            <motion.div 
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="p-6 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-100 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.h2 
                  className="text-xl font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  whileHover={{ scale: 1.02 }}
                >
                  {event.title}
                </motion.h2>
                <motion.span 
                  className="text-sm text-slate-400 bg-slate-700 px-2 py-1 rounded group-hover:bg-slate-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  {event.date}
                </motion.span>
              </div>
              <motion.p 
                className="text-slate-300 mb-3 group-hover:text-slate-200 transition-colors"
                whileHover={{ x: 5 }}
              >
                {event.description}
              </motion.p>
              {event.achievements && (
                <motion.ul className="text-sm text-slate-400 space-y-1">
                  {event.achievements.map((achievement, achievementIndex) => (
                    <motion.li 
                      key={achievementIndex} 
                      className="flex items-center gap-2 group-hover:text-slate-300 transition-colors"
                      variants={achievementVariants}
                      custom={achievementIndex}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors"
                        whileHover={{ scale: 1.5 }}
                      />
                      {achievement}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={iconVariants}
          whileHover="hover"
          className="rounded-full bg-cyan-600 border-2 border-cyan-400 w-10 h-10 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center shadow-lg z-10"
        >
          {event.icon}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="w-[90%] max-w-[1200px] mx-auto py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="uppercase tracking-widest font-bold text-4xl text-slate-100 mb-4">
          Career Journey
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
        <motion.p 
          className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Frontend Developer with <span className="text-cyan-400 font-semibold">4+ years</span> of commercial experience, 
          specializing in modern <span className="text-cyan-400">React & TypeScript</span>. From internship to Middle Developer, 
          I've delivered high-performance applications with measurable results in performance optimization and user experience.
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative"
      >
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400/50 to-purple-400/50" />
        
        <div className="space-y-4">
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={index} 
              event={event} 
              isEven={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </motion.div>

      {/* Key Achievements Summary */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          { number: "15+", label: "SPA Applications", icon: <FaLaptopCode className="text-cyan-400" size={24} /> },
          { number: "35%", label: "Performance Improvement", icon: <BsLightningFill className="text-cyan-400" size={24} /> },
          { number: "98%", label: "Lighthouse Score", icon: <GoRocket className="text-cyan-400" size={24} /> }
        ].map((stat, index) => (
          <motion.div
            key={index}
            variants={statsVariants}
            custom={index}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
            className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex justify-center mb-3">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-2 bg-cyan-400/10 rounded-lg"
              >
                {stat.icon}
              </motion.div>
            </div>
            <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
              {stat.number}
            </div>
            <div className="text-slate-300 group-hover:text-slate-200 transition-colors">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default About