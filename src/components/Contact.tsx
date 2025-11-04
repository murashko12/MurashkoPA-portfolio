import { useState } from "react"
import { motion } from "framer-motion"
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"

const Contact = () => {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-cyan-400" size={20} />,
      title: "Location",
      value: "Moscow, Russia",
      link: null
    },
    {
      icon: <FaPhone className="text-cyan-400" size={20} />,
      title: "Phone",
      value: "+7 (903) 176-77-88",
      link: "tel:+79031767788"
    },
    {
      icon: <FaEnvelope className="text-cyan-400" size={20} />,
      title: "Email",
      value: "petr@ocumare.ru",
      link: "mailto:petr@ocumare.ru"
    }
  ]

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setName("")
      setEmail("")
      setMessage("")
      // Here you would typically handle the actual form submission
    }, 2000)
  }

  return (
    <section id="contact" className="w-[90%] max-w-[1200px] mx-auto py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="uppercase tracking-widest font-bold text-4xl text-slate-100 mb-4">
          Get In Touch
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to discuss potential opportunities? 
          <span className="text-cyan-400"> I'd love to hear from you</span>. 
          Let's create something amazing together.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Information */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="lg:col-span-1 space-y-6"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-2xl font-bold text-cyan-400 mb-6"
          >
            Contact Information
          </motion.h3>
          
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
              className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700 hover:border-cyan-400 transition-all duration-300"
            >
              <div className="p-3 bg-slate-700 rounded-lg">
                {item.icon}
              </div>
              <div>
                <p className="text-slate-400 text-sm">{item.title}</p>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-slate-200 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-slate-200">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Availability Status */}
          <motion.div
            variants={itemVariants}
            className="p-6 bg-slate-800/30 rounded-xl border border-slate-700"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-slate-200 font-semibold">Available for work</span>
            </div>
            <p className="text-slate-400 text-sm">
              I'm currently open to new opportunities and projects. 
              Feel free to reach out!
            </p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2"
        >
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 p-8 bg-slate-800/30 rounded-2xl border border-slate-700"
            action="https://getform.io/f/8904d217-2f6a-4311-a35c-3d56ae444fe9" 
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-slate-300 text-sm font-medium">
                  Your Name *
                </label>
                <input 
                  id="name"
                  className="w-full bg-slate-800/50 border border-slate-600 p-4 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  type="text" 
                  name="name" 
                  placeholder="Enter your name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-slate-300 text-sm font-medium">
                  Your Email *
                </label>
                <input 
                  id="email"
                  className="w-full bg-slate-800/50 border border-slate-600 p-4 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  type="email" 
                  name="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-slate-300 text-sm font-medium">
                Your Message *
              </label>
              <textarea 
                id="message"
                className="w-full bg-slate-800/50 border border-slate-600 p-4 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                name="message" 
                placeholder="Tell me about your project or opportunity..."
                rows={6}
                value={message}
                onChange={event => setMessage(event.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <motion.button 
              type="submit"
              disabled={!name || !email || !message || isSubmitting}
              whileHover={{ scale: !name || !email || !message ? 1 : 1.02 }}
              whileTap={{ scale: !name || !email || !message ? 1 : 0.98 }}
              className={`
                w-full md:w-auto px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3
                ${!name || !email || !message || isSubmitting
                  ? "bg-slate-600 text-slate-400 cursor-not-allowed"
                  : "bg-cyan-600 hover:bg-cyan-700 text-slate-100 shadow-lg hover:shadow-cyan-500/20"
                }
              `}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-slate-100 border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  Send Message
                </>
              )}
            </motion.button>

            {/* Form Note */}
            <p className="text-slate-400 text-sm">
              * Required fields. I typically respond within 24 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact