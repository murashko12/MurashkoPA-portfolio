import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export interface IProjectParams {
  id: number;
  imgName: string;
  titleProject: string;
  stackProject: JSX.Element[];
  linkCode: string;
  linkDemo: string;
  description: string;
}

const ProjectCard: React.FC<IProjectParams> = (props) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="relative overflow-hidden rounded-2xl bg-slate-800/30 border border-slate-700 shadow-2xl group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={props.imgName}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          alt={props.titleProject}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-100 mb-3 capitalize">
          {props.titleProject}
        </h3>
        
        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
          {props.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-4">
          {props.stackProject.map((icon, index) => (
            <div
              key={index}
              className="p-2 bg-slate-700/50 rounded-lg backdrop-blur-sm border border-slate-600"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      {/* Hover Overlay with Additional Info */}
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        whileHover="visible"
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300"
      >
        <motion.div
          variants={contentVariants}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-cyan-400 mb-4 capitalize">
            {props.titleProject}
          </h3>
          
          <p className="text-slate-200 mb-6 leading-relaxed">
            {props.description}
          </p>

          <div className="flex gap-4 mb-6 justify-center">
            {props.stackProject.map((icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, transition: { duration: 0.2 } }}
                className="p-2 bg-slate-700/50 rounded-lg backdrop-blur-sm border border-slate-600"
              >
                {icon}
              </motion.div>
            ))}
          </div>

          <div className="flex gap-4">
            <motion.a
              href={props.linkCode}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-slate-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-slate-600"
            >
              <FaGithub size={18} />
              View Code
            </motion.a>
            
            <motion.a
              href={props.linkDemo}
              target="_blank"
              rel="noopener noreferrer"
              variants={buttonVariants}
              whileHover="hover"
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-slate-100 px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-cyan-400"
            >
              <FaExternalLinkAlt size={16} />
              Live Demo
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectCard