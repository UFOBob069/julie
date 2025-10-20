'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      text: "I'm beyond grateful for the ability to have worked with Julie as my life coach. First of all, I need to mention that I was biased towards coaching before. I was convinced that it couldn't help me and wouldn't tell me anything about myself I hadn't been aware of yet. I was completely wrong. Julie helped me identify, challenge and reframe the beliefs that were limiting my growth and causing energy drain and overthinking. It was fascinating to observe how coming with one limiting belief of, 'I have to know everything' uncovered a whole bunch of other statements I'd like to keep working on in the future.\n\nI also enjoyed our work on 'Ideal Day' exercise, which enabled me to see what I really want and how that can be achieved step by step in a day to day life.\n\nJulie would be a great match for anyone who values and sees the importance in reconnecting with one's own body and its feelings and sensations to tackle rumination and mental blockers. I felt comfortable sharing with her, knowing I will be heard and helped.",
      author: "YP"
    },
    {
      id: 2,
      text: "I cannot speak highly enough of my experience working with Julie. I connected with Julie for career coaching after an unexpected layoff after over seven years with the same company. While I felt confident in myself and my skill set, I didn't know how to define my work outside of this one company. My career identity felt very rooted in one organization, and I needed support in trying to conceptualize what my next chapter could look like.\n\nWhat I appreciate most about my work with Julie is that she never gave me the answers. Instead, she asked the right questions to guide me to an answer that felt true and authentic to me. Along the way, she equipped me with key frameworks and fundamentals to help guide me through questions that would come up throughout my job hunt and in the early months of my new role. Instead of telling me what was the right or wrong move, she helped lay a foundation for me to be able to identify what that meant for me. Julie created an incredibly safe and open environment where I felt comfortable sharing freely, and I feel this was so crucial to the progress we made. Whether you're at a key inflection point in your career, looking for your next chapter, or just looking for some added guidance, I highly recommend working with Julie.",
      author: "AC"
    },
    {
      id: 3,
      text: "During my coaching sessions with Julie, I discovered how to slow down, listen to myself, and trust what I already know deep down. I learned to notice how my body responds to different situations and to take small, intentional steps that help me feel more grounded and aligned. Through this process, I've not only gained clarity but also learned to believe in myself more, and that belief has given me a genuine sense of confidence in how I move through life.\n\nWhat surprised me most was how gentle yet powerful the process was. Julie has a unique ability to help you uncover insights without ever feeling pressured or judged. Her guidance is practical and intuitive, helping you connect the dots between how you think, feel, and act.\n\nFrom the very first session, I felt completely safe and supported. Julie creates an atmosphere of trust and openness that allows for real growth and self-discovery.\n\nI would wholeheartedly recommend Julie to anyone looking to reconnect with themselves, build confidence, and find a stronger sense of inner balance. Her compassionate and grounded approach truly helps you see what's possible when you start believing in yourself.",
      author: "K"
    },
    {
      id: 4,
      text: "Julie created such a trusted space where I could really open up and be honest with myself. She was so easy to talk to and had a way of asking questions that helped me see things I hadn't realized before. The tools she shared were simple but powerful, and they've helped me focus on what truly matters and manage stress in a much healthier way. I walked away from each session feeling lighter, clearer, and more grounded.",
      author: "DE"
    }
  ]

  return (
    <div className="min-h-screen bg-light-orange">
      <div className="section-padding">
        <div className="container-custom">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link 
              href="/"
              className="inline-flex items-center text-charcoal hover:text-gray-yellow-green transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-charcoal mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Real stories from people who've found clarity, confidence, and direction through coaching.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid gap-12 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-soft-white rounded-2xl p-8 shadow-sm"
              >
                <div className="space-y-4">
                  {testimonial.text.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-charcoal/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <p className="text-lg font-medium text-charcoal mt-6">
                  - {testimonial.author}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-soft-white/50 backdrop-blur-sm rounded-2xl p-8 border border-light-yellow-green/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-charcoal/70 mb-6">
                Book your complimentary 30-minute call to explore how coaching can support you in your transition.
              </p>
              <Link
                href="/#contact"
                className="inline-block btn-accent text-lg px-10 py-5"
              >
                Book Your Complimentary Call
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsPage
