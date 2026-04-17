import { motion } from "framer-motion"
import { FaTelegram, FaPhoneAlt } from "react-icons/fa"
import { useTranslation } from "../hooks/useTranslation"

// Тип для одного отзыва
interface Testimonial {
  id: number
  name: string
  position: string
  phone: string
  telegram: string
  comment: string
  photo: string // путь к фото в папке images
}

const Testimonials = () => {
  const { t } = useTranslation()

  // Данные отзывов (заглушки, замените на реальные)
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t('testimonials.0.name'),
      position: t('testimonials.0.position'),
      phone: "+7(916) 790-46-20",
      telegram: "https://t.me/ivanov",
      comment: t('testimonials.0.comment'),
      photo: "src/images/persons/VyacheslavDyachenko.png"
    },
    {
      id: 2,
      name: t('testimonials.1.name'),
      position: t('testimonials.1.position'),
      phone: "+7 (999) 234-56-78",
      telegram: "https://t.me/petrov",
      comment: t('testimonials.1.comment'),
      photo: "src/images/persons/NikitaShevlyakov.png"
    },
    {
      id: 3,
      name: t('testimonials.2.name'),
      position: t('testimonials.2.position'),
      phone: "+7 (999) 345-67-89",
      telegram: "https://t.me/sidorov",
      comment: t('testimonials.2.comment'),
      photo: "src/images/persons/AlexanderMamaev.png"
    },
    {
      id: 4,
      name: t('testimonials.3.name'),
      position: t('testimonials.3.position'),
      phone: "+7 (999) 456-78-90",
      telegram: "https://t.me/kuznetsov",
      comment: t('testimonials.3.comment'),
      photo: "src/images/persons/AnnaKartoshkina.png"
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="testimonials" className="w-[90%] max-w-[1200px] mx-auto py-20">
      {/* Заголовок */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="uppercase tracking-widest font-bold text-4xl text-slate-100 mb-4">
          {t('testimonials.title')}
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6" />
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          {t('testimonials.subtitle')}
        </p>
      </motion.div>

      {/* Карточки - горизонтальный ряд на десктопе, сетка на мобильных */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="bg-slate-800/30 rounded-2xl border border-slate-700 overflow-hidden hover:border-cyan-400 transition-all duration-300 flex flex-col"
          >
            {/* Фото */}
            <div className="relative h-48 overflow-hidden bg-slate-700">
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Информация */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-cyan-400 mb-1">{item.name}</h3>
              <p className="text-slate-400 text-sm mb-3">{item.position}</p>

              {/* Контакты */}
              <div className="flex gap-3 mb-4">
                <a
                  href={`tel:${item.phone.replace(/\s/g, '')}`}
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Phone"
                >
                  <FaPhoneAlt size={16} />
                </a>
                <a
                  href={item.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-cyan-400 transition-colors"
                  aria-label="Telegram"
                >
                  <FaTelegram size={16} />
                </a>
              </div>

              {/* Комментарий */}
              <p className="text-slate-300 text-sm leading-relaxed italic">
                “{item.comment}”
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Testimonials