'use client'

import { motion } from 'framer-motion'
import { Clock, Monitor, DollarSign } from 'lucide-react'

const DetailsSection = () => {
  const details = [
    {
      icon: Clock,
      title: 'Session Options',
      items: [
        '30-min complimentary call',
        '1-hour follow-up'
      ]
    },
    {
      icon: Monitor,
      title: 'Where',
      items: [
        'All sessions via video or phone',
        'Agreement form before first session'
      ]
    },
    {
      icon: DollarSign,
      title: 'Pricing',
      items: [
        'One-time: $125/hr',
        '5-session package: $500',
        '10-session package: $900',
        '24-hour cancellation, $50 fee'
      ]
    }
  ]

  return (
    <section className="section-padding bg-warm-beige/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            The Details
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Everything you need to know about working together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-muted-sage/20 rounded-full mb-6 group-hover:bg-muted-sage/30 transition-colors duration-300"
                >
                  <detail.icon className="w-8 h-8 text-muted-sage" />
                </motion.div>
                
                <h3 className="text-2xl font-serif font-semibold text-charcoal mb-6">
                  {detail.title}
                </h3>
                
                <ul className="space-y-3 text-charcoal/80">
                  {detail.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="w-2 h-2 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-soft-white/50 backdrop-blur-sm rounded-2xl p-8 border border-muted-sage/20">
            <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-charcoal/70 mb-6 max-w-2xl mx-auto">
              Book your complimentary 30-minute call to explore how coaching can support you in your transition.
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
              className="btn-accent text-lg px-10 py-5"
            >
              Book Your Complimentary Call
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DetailsSection
