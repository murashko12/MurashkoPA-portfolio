import { motion } from "framer-motion"

export interface ISkillsParams {
    id: number
    title: string
    range: number
    icon: JSX.Element
    color?: string
}



const SkillComponent: React.FC<ISkillsParams> = ({ id, title, range, icon, color = "text-cyan-400" }) => {
  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: `${range}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: id * 0.1
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      {/* Skill Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300 ${color}`}>
            {icon}
          </div>
          <span className="font-semibold text-slate-200 text-sm">{title}</span>
        </div>
        <span className="text-cyan-400 font-bold text-sm">{range}%</span>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          variants={progressVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg`}
        />
      </div>

      {/* Skill Level Indicator */}
      <div className="flex justify-between text-xs text-slate-400 mt-1">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </motion.div>
  )
}

export default SkillComponent