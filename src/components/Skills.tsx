import SkillComponent from "./SkillComponent"
import { motion } from "framer-motion"
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, 
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, 
  SiJest, SiWebpack, SiGit, SiDocker, SiPostgresql 
} from "react-icons/si"
import { TbApi } from "react-icons/tb"
import { VscCode } from "react-icons/vsc"
import { ISkillsParams } from './SkillComponent'

const Skills: React.FC = () => {
  const mySkills: ISkillsParams[] = [
    {
      id: 1,
      title: "HTML5",
      range: 100,
      icon: <SiHtml5 size={24} />,
      color: "text-orange-500"
    },
    {
      id: 2,
      title: "CSS3",
      range: 100,
      icon: <SiCss3 size={24} />,
      color: "text-blue-500"
    },
    {
      id: 3,
      title: "JavaScript",
      range: 100,
      icon: <SiJavascript size={24} />,
      color: "text-yellow-400"
    },
    {
      id: 4,
      title: "TypeScript",
      range: 100,
      icon: <SiTypescript size={24} />,
      color: "text-blue-600"
    },
    {
      id: 5,
      title: "React",
      range: 100,
      icon: <SiReact size={24} />,
      color: "text-cyan-400"
    },
    {
      id: 6,
      title: "Next.js",
      range: 90,
      icon: <SiNextdotjs size={24} />,
      color: "text-white"
    },
    {
      id: 7,
      title: "Redux Toolkit",
      range: 100,
      icon: <SiRedux size={24} />,
      color: "text-purple-500"
    },
    {
      id: 8,
      title: "Tailwind CSS",
      range: 100,
      icon: <SiTailwindcss size={24} />,
      color: "text-cyan-400"
    },
    {
      id: 9,
      title: "Jest & RTL",
      range: 85,
      icon: <SiJest size={24} />,
      color: "text-red-500"
    },
    {
      id: 10,
      title: "Webpack / Vite",
      range: 80,
      icon: <SiWebpack size={24} />,
      color: "text-blue-400"
    },
    {
      id: 11,
      title: "REST API / GraphQL",
      range: 90,
      icon: <TbApi size={24} />,
      color: "text-green-400"
    },
    {
      id: 12,
      title: "PostgreSQL",
      range: 75,
      icon: <SiPostgresql size={24} />,
      color: "text-blue-400"
    },
    {
      id: 13,
      title: "Git / GitHub",
      range: 100,
      icon: <SiGit size={24} />,
      color: "text-orange-500"
    },
    {
      id: 14,
      title: "Docker",
      range: 70,
      icon: <SiDocker size={24} />,
      color: "text-blue-500"
    },
    {
      id: 15,
      title: "VS Code",
      range: 100,
      icon: <VscCode size={24} />,
      color: "text-blue-400"
    }
  ]

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

  // Group skills by category for better organization
  const skillCategories = [
    {
      title: "Core Technologies",
      skills: mySkills.slice(0, 8)
    },
    {
      title: "Testing & Tools",
      skills: mySkills.slice(8, 11)
    },
    {
      title: "Backend & DevOps",
      skills: mySkills.slice(11)
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
          Technical Skills
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          My technology stack includes <span className="text-cyan-400">modern frontend tools</span> and 
          methodologies that I actively use in commercial projects to deliver 
          <span className="text-cyan-400"> high-quality, performant applications</span>.
        </p>
      </motion.div>

      {/* Skills Grid by Categories */}
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
            Continuous Learning
          </h3>
          <p className="text-slate-300">
            I consistently stay updated with the latest web technologies and best practices through 
            <span className="text-cyan-400"> online courses, tech communities, and hands-on projects</span>. 
            Currently exploring advanced React patterns and cloud technologies.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default Skills