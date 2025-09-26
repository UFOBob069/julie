'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-charcoal text-soft-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-serif mb-4 md:mb-0"
          >
            © {new Date().getFullYear()} Julie Bosshart Coaching
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-6"
          >
            {['home', 'coaching', 'about', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item)}
                className="text-soft-white hover:text-gold transition-colors duration-300 capitalize"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
