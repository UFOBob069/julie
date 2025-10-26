'use client'

import { motion } from 'framer-motion'

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-muted-sage/10 to-warm-beige/20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div 
              className="w-80 h-[600px] mx-auto bg-cover bg-center shadow-lg"
              style={{
                backgroundImage: `url('/photos/julie.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-muted-sage/10 to-warm-beige/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
                About Julie
              </h2>
            </div>

            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                My life hasn't been a straight line, and I believe we should all feel safe to say that out loud.
              </p>
              <p>
                I discovered coaching in 2023 and it was a game changer.
              </p>
              <p>
                I now help others experience what I found: that coaching, when layered into a thoughtful life practice, can lead to meaningful impact and lasting transformation.
              </p>
            </div>

            <p className="text-charcoal/70 italic text-lg">
              "All you need is already within you." - Kris Collins
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-accent text-lg px-8 py-4 mt-6"
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
