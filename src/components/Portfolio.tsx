import ProjectCard from "./ProjectCard"
import { motion } from "framer-motion"
import { ProjectsItems } from "../constants/ProjectsItems"

const Portfolio = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { 
            y: 50, 
            opacity: 0,
            scale: 0.8 
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    const statsVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    }

    return (
        <section id="portfolio" className="w-[90%] max-w-[1200px] mx-auto py-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="uppercase tracking-widest font-bold text-4xl text-slate-100 mb-4">
                    Featured Projects
                </h1>
                <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
                <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    A collection of my recent work showcasing modern web development practices, 
                    <span className="text-cyan-400"> clean code architecture</span>, and 
                    <span className="text-cyan-400"> user-centered design</span>.
                </p>
            </motion.div>

            {/* Stats */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
                {[
                    { number: "6+", label: "Projects" },
                    { number: "4+", label: "Technologies" },
                    { number: "98%", label: "Lighthouse" },
                    { number: "100%", label: "Responsive" }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={statsVariants}
                        className="text-center p-6 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
                    >
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                        <div className="text-slate-400 text-sm">{stat.label}</div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {ProjectsItems.map((project) => (
                    <motion.div
                        key={project.id}
                        variants={itemVariants}
                        whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mt-16"
            >
                <p className="text-slate-300 mb-6">
                    Interested in seeing more? Check out my GitHub for additional projects and contributions.
                </p>
                <motion.a
                    href="https://github.com/murashko12"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-cyan-400"
                >
                    View All Projects
                </motion.a>
            </motion.div>
        </section>
    )
}

export default Portfolio