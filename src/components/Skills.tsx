import SkillComponent from "./SkillComponent"
import { motion } from "framer-motion"
import { SkillsItems } from "../constants/SkillsItems"
import { useTranslation } from "../hooks/useTranslation"

const Skills = () => {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { 
            y: 30, 
            opacity: 0,
            scale: 0.9 
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const skillCategories = [
        {
            title: t('skills.categories.core'),
            skills: SkillsItems.slice(0, 8)
        },
        {
            title: t('skills.categories.testing'),
            skills: SkillsItems.slice(8, 11)
        },
        {
            title: t('skills.categories.backend'),
            skills: SkillsItems.slice(11)
        }
    ]

    return (
        <section id="skills" className="w-[90%] max-w-[1200px] mx-auto py-20">
            
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h1 className="uppercase tracking-widest font-bold text-4xl text-slate-100 mb-4">
                    {t('skills.title')}
                </h1>
                <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
                <p 
                    className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t('skills.description') }}
                />
            </motion.div>
            
            {/* Skills grid */}
            <div className="space-y-12">
                {skillCategories.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                        className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700"
                    >
                        <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                            {category.title}
                        </h2>
                        
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.id}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -2,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <SkillComponent {...skill} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-16 text-center"
            >
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-cyan-400/20">
                    <h3 className="text-xl font-bold text-cyan-400 mb-4">
                        {t('skills.continuousLearning.title')}
                    </h3>
                    <p 
                        className="text-slate-300"
                        dangerouslySetInnerHTML={{ __html: t('skills.continuousLearning.description') }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Skills