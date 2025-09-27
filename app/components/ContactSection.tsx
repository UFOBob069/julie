'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Calendar, Send } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-muted-sage/10 to-warm-beige/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center opacity-10 golden-filter"
          style={{
            backgroundImage: `url('/photos/contact-bg.jpg')`
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Book your complimentary call or send a note to begin your journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.a
              href="mailto:bosshart.julie@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-full bg-charcoal text-light-orange px-8 py-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group"
            >
              <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Email Julie
            </motion.a>

            <motion.a
              href="https://calendar.app.google/Pw4y2KqVq3P8ZtyZ7"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center w-full bg-gold text-charcoal px-8 py-6 rounded-xl font-medium transition-all duration-300 hover:shadow-lg group"
            >
              <Calendar className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
              Book Now
            </motion.a>

            <div className="bg-soft-white/50 backdrop-blur-sm rounded-xl p-6 border border-muted-sage/20">
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-4">
                Ready to Begin?
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                I offer a 30-minute complimentary call to explore how coaching might support you in your current transition. No pressure, just an open conversation about what you're experiencing and how I might help.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-soft-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-muted-sage/20"
          >
            <h3 className="text-2xl font-serif font-semibold text-charcoal mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-muted-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-muted-sage/50 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-muted-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-muted-sage/50 focus:border-transparent transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-muted-sage/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-muted-sage/50 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about what you're experiencing and how I might help..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-muted-sage text-charcoal px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
