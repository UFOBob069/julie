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
              Perhaps you're trying to discern the meaning of where you've been or trying to figure out where you're headed next.
            </h2>
            <div className="space-y-6 text-lg text-charcoal/80 leading-relaxed">
              <p>
                You likely feel a bit disoriented. You may be asking, "So what do I do next?" How do you figure out how to navigate all of this while staying true to yourself?
              </p>
              <p className="text-xl font-medium text-charcoal">
                I'm here to help. We will work together.
              </p>
            </div>
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
              Envision a life aligned with your truth
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>
                You just experienced a huge change in your life, and while you would have been overwhelmed in the past, you now have the tools and trust in yourself to move forward. The feelings that once made you feel paralyzed now help you understand how best to navigate this new world that is aligned to what is best for you.
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
                backgroundImage: `url('/photos/coaching-2.jpg')`,
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
              We will work together
            </h2>
            <div className="space-y-4 text-lg text-charcoal/80 leading-relaxed">
              <p>
                As a life coach specializing in transitional seasons, I help individuals navigate these in-between spaces with clarity, compassion, and strategic support. My work is about honoring where you've been, helping you stabilize where you are, and helping to guide you toward your next chapter that feels deeply aligned with your truth.
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

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Experience</h3>
            <p className="text-charcoal/80 leading-relaxed">
              Through my lived experience as well as professional training, I have walked through the messy stages of life and I've learned compassion, clarity, and tools that help you to walk through that process with more direction. My aim is to provide practical frameworks to help you find clarity that meet you where you are.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Structure</h3>
            <p className="text-charcoal/80 leading-relaxed">
              While going through periods of change, it's easy to feel overwhelmed. I aim to help you break through the fog to identify what elements are no longer serving you, clarify what's emerging, and map out realistic steps to move forward at your own pace.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-serif font-bold text-charcoal mb-4">Complementary</h3>
            <p className="text-charcoal/80 leading-relaxed">
              I believe in an integrated approach, where my coaching works well alongside your other self-care practices of therapy, wellness, or spiritual work. Coaching can be the missing link between reflection and action, where I aim to respect and support your broader path, not override it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CoachingSection
