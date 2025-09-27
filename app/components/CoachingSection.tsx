'use client'

import { motion } from 'framer-motion'

const CoachingSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="coaching" className="section-padding bg-soft-white">
      <div className="container-custom">
        {/* Problem/Solution Introduction */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              Feeling Lost in Your Transition?
            </h2>
            <p className="text-xl text-charcoal/80 leading-relaxed">
              I'm feeling lost in my transition period between who I was and who I am becoming. I'm here to help you navigate this.
            </p>
            <p className="text-lg text-charcoal/70 leading-relaxed">
              We know life isn't a straight line. We'll help you navigate this.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('details')}
              className="btn-accent text-lg px-10 py-5"
            >
              See How We Work Together
            </motion.button>
          </motion.div>
        </div>

        {/* Vision of Aligned Life */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              Imagine a Life Truly Aligned
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>
                What does it feel like to be in purpose rather than struggling? To wake up each day with clarity about your direction, confidence in your decisions, and peace in your heart?
              </p>
              <p>
                Picture yourself moving through your transition with grace, knowing exactly what steps to take next, feeling supported and understood every step of the way.
              </p>
              <p>
                This isn't just possible, it's your birthright. And it's closer than you think.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="w-80 h-[500px] mx-auto rounded-2xl bg-cover bg-center golden-filter"
              style={{
                backgroundImage: `url('/photos/coaching-1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-muted-sage/20 to-warm-beige/20 rounded-2xl" />
          </motion.div>
        </div>

        {/* What Coaching Is and Isn't */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div 
              className="w-80 h-[500px] mx-auto rounded-2xl bg-cover bg-center golden-filter"
              style={{
                backgroundImage: `url('/photos/coaching-1.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-warm-beige/20 to-muted-sage/20 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal">
              What Coaching Is
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>
                Coaching is a collaboration between client and coach to explore your true nature and discover what you truly want.
              </p>
              <p>
                It's future-focused, helping you get clarity on your next steps toward your best life.
              </p>
              <p>
                Coaching is not consulting, therapy, or mentoring. It's a partnership designed to help you determine your own path forward.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="btn-accent text-lg px-8 py-4"
            >
              Book Your Complimentary Call
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoachingSection
