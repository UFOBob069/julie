'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Link from 'next/link'

const TestimonialsSection = () => {
  const featuredTestimonial = {
    text: "I cannot speak highly enough of my experience working with Julie. I connected with Julie for career coaching after an unexpected layoff after over seven years with the same company. While I felt confident in myself and my skill set, I didn't know how to define my work outside of this one company... What I appreciate most about my work with Julie is that she never gave me the answers. Instead, she asked the right questions to guide me to an answer that felt true and authentic to me.",
    author: "AC"
  }

  return (
    <section id="testimonials" className="section-padding bg-soft-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-6">
            What Clients Say
          </h2>
          <p className="text-xl text-charcoal/70 max-w-2xl mx-auto">
            Real stories from people who've found clarity and direction
          </p>
        </motion.div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-warm-beige/30 rounded-2xl p-8 md:p-12 relative"
          >
            <Quote className="w-12 h-12 text-gray-yellow-green/50 absolute top-6 left-6" />
            <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6 italic">
              {featuredTestimonial.text}
            </p>
            <p className="text-lg font-medium text-charcoal mb-6">
              - {featuredTestimonial.author}
            </p>
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block btn-secondary text-lg px-8 py-4"
              >
                Read All Testimonials
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
