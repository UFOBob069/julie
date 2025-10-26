'use client'

import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const testimonials = [
    {
      id: 1,
      text: "I'm beyond grateful for the ability to have worked with Julie as my life coach. First of all, I need to mention that I was biased towards coaching before. I was convinced that it couldn't help me and wouldn't tell me anything about myself I hadn't been aware of yet. I was completely wrong. Julie helped me identify, challenge and reframe the beliefs that were limiting my growth and causing energy drain and overthinking.",
      author: "YP"
    },
    {
      id: 2,
      text: "I cannot speak highly enough of my experience working with Julie. I connected with Julie for career coaching after an unexpected layoff after over seven years with the same company. While I felt confident in myself and my skill set, I didn't know how to define my work outside of this one company... What I appreciate most about my work with Julie is that she never gave me the answers. Instead, she asked the right questions to guide me to an answer that felt true and authentic to me.",
      author: "AC"
    },
    {
      id: 3,
      text: "During my coaching sessions with Julie, I discovered how to slow down, listen to myself, and trust what I already know deep down. I learned to notice how my body responds to different situations and to take small, intentional steps that help me feel more grounded and aligned. Through this process, I've not only gained clarity but also learned to believe in myself more.",
      author: "KK"
    },
    {
      id: 4,
      text: "Julie created such a trusted space where I could really open up and be honest with myself. She was so easy to talk to and had a way of asking questions that helped me see things I hadn't realized before. The tools she shared were simple but powerful, and they've helped me focus on what truly matters and manage stress in a much healthier way.",
      author: "DE"
    }
  ]

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
            Real stories from people who've found clarity and direction
          </p>
        </motion.div>

        {/* Featured Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-warm-beige/30 rounded-2xl p-8 md:p-12 relative"
          >
            <Quote className="w-12 h-12 text-gray-yellow-green/50 absolute top-6 left-6" />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-charcoal" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-charcoal" />
            </button>

            {/* Testimonial Content */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="px-8"
            >
              <p className="text-lg md:text-xl text-charcoal/80 leading-relaxed mb-6 italic">
                {testimonials[currentIndex].text}
              </p>
              <p className="text-lg font-medium text-charcoal mb-6">
                - {testimonials[currentIndex].author}
              </p>
            </motion.div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-gray-yellow-green' 
                      : 'bg-gray-yellow-green/30 hover:bg-gray-yellow-green/50'
                  }`}
                />
              ))}
            </div>

            <div className="text-center mt-8">
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
