'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Julie helped me find clarity during one of the hardest transitions of my life.",
      author: "Sarah M."
    },
    {
      text: "Her calm energy and thoughtful questions changed how I see myself.",
      author: "Michael R."
    },
    {
      text: "I left each session with new confidence and direction.",
      author: "Jennifer L."
    },
    {
      text: "Julie's approach is gentle yet powerful. She helped me navigate my career change with grace.",
      author: "David K."
    },
    {
      text: "The space she creates is safe and transformative. I'm grateful for her guidance.",
      author: "Amanda T."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
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
            Real stories from real people who've found clarity and direction
          </p>
        </motion.div>

        {/* Desktop Carousel */}
        <div className="hidden md:block">
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="bg-warm-beige/30 rounded-2xl p-12 relative">
                <Quote className="w-12 h-12 text-muted-sage/50 absolute top-6 left-6" />
                <p className="text-2xl text-charcoal/80 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </p>
                <p className="text-lg font-medium text-charcoal">
                  - {testimonials[currentIndex].author}
                </p>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-soft-white rounded-full shadow-lg flex items-center justify-center hover:bg-muted-sage/10 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-soft-white rounded-full shadow-lg flex items-center justify-center hover:bg-muted-sage/10 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentIndex ? 'bg-muted-sage' : 'bg-muted-sage/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-warm-beige/30 rounded-xl p-6"
            >
              <Quote className="w-8 h-8 text-muted-sage/50 mb-4" />
              <p className="text-charcoal/80 leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="font-medium text-charcoal">
                - {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
