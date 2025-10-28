'use client'

import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import CoachingSection from './components/CoachingSection'
import DetailsSection from './components/DetailsSection'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const handleHashNavigation = () => {
      const hash = window.location.hash
      if (hash) {
        const elementId = hash.substring(1) // Remove the # symbol
        const element = document.getElementById(elementId)
        if (element) {
          // Small delay to ensure page is loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' })
          }, 100)
        }
      }
    }

    // Run on mount
    handleHashNavigation()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation)
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation)
    }
  }, [])

  return (
    <>
      <HeroSection />
      <CoachingSection />
      <DetailsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
