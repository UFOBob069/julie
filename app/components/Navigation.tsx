'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-soft-white/95 backdrop-blur-sm shadow-sm' 
          : 'bg-soft-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-serif font-semibold text-charcoal cursor-pointer drop-shadow-sm"
            onClick={() => scrollToSection('home')}
          >
            Julie Bosshart
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {['home', 'coaching', 'about', 'testimonials', 'contact'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05 }}
                onClick={() => scrollToSection(item)}
                className="text-charcoal hover:text-muted-sage transition-colors duration-300 capitalize drop-shadow-sm"
              >
                {item}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="btn-accent text-sm drop-shadow-sm"
          >
            Book a Call
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
