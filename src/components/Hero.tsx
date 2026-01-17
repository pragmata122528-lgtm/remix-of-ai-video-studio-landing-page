'use client'

import { motion } from 'framer-motion'
import { Menu, X, Mail, Linkedin } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Close mobile menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Luxurious Background Pattern */}
      <div className="absolute inset-0">
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(30deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37),
            linear-gradient(150deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37),
            linear-gradient(30deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37),
            linear-gradient(150deg, #d4af37 12%, transparent 12.5%, transparent 87%, #d4af37 87.5%, #d4af37)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px'
        }} />
        
        {/* Mathematical formulas floating in background */}
        <div className="absolute top-1/4 left-1/4 text-4xl text-amber-400/5 font-serif">∂²u/∂t²</div>
        <div className="absolute top-1/3 right-1/3 text-5xl text-amber-400/5 font-serif">∇²ψ</div>
        <div className="absolute bottom-1/3 left-1/3 text-3xl text-amber-400/5 font-serif">∫∫∫</div>
        <div className="absolute top-1/2 right-1/4 text-4xl text-amber-400/5 font-serif">Σ</div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Full-Width Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-slate-900/95 backdrop-blur-xl border-b border-amber-400/20' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center cursor-pointer"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span className="font-bagel text-amber-400 text-xl tracking-wider">ASAD SHAHZAD</span>
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#research" 
                className="text-slate-200 hover:text-amber-400 font-medium gentle-animation hover:scale-105"
              >
                Research
              </a>
              <a 
                href="#skills" 
                className="text-slate-200 hover:text-amber-400 font-medium gentle-animation hover:scale-105"
              >
                Skills
              </a>
              <a 
                href="#publications" 
                className="text-slate-200 hover:text-amber-400 font-medium gentle-animation hover:scale-105"
              >
                Publications
              </a>
              <a 
                href="#experience" 
                className="text-slate-200 hover:text-amber-400 font-medium gentle-animation hover:scale-105"
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="text-slate-200 hover:text-amber-400 font-medium gentle-animation hover:scale-105"
              >
                Contact
              </a>
            </div>

            {/* Right Side - CTA + Mobile Menu */}
            <div className="flex items-center space-x-3 relative">
              {/* CTA Button - Hidden on mobile */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hidden sm:block bg-gradient-to-r from-amber-500 to-amber-600 backdrop-blur-sm text-slate-900 font-semibold px-6 py-3 rounded-md hover:from-amber-400 hover:to-amber-500 gentle-animation cursor-pointer"
              >
                Get in Touch
              </motion.button>

              {/* Mobile Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden glass-effect p-3 rounded-full text-slate-200 hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer z-[120] relative"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-md z-[80] cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-slate-900/95 backdrop-blur-xl border-l border-amber-400/20 z-[90] mobile-menu-panel pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-effect p-3 rounded-full text-slate-200 hover:bg-white/20 active:bg-white/30 gentle-animation cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col px-6 pb-6 h-full">
            <div className="flex flex-col space-y-4 text-slate-200">
              <a 
                href="#research" 
                className="mobile-menu-link px-4 py-3 hover:text-amber-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Research
              </a>
              <a 
                href="#skills" 
                className="mobile-menu-link px-4 py-3 hover:text-amber-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a 
                href="#publications" 
                className="mobile-menu-link px-4 py-3 hover:text-amber-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Publications
              </a>
              <a 
                href="#experience" 
                className="mobile-menu-link px-4 py-3 hover:text-amber-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a 
                href="#contact" 
                className="mobile-menu-link px-4 py-3 hover:text-amber-400 hover:bg-white/10 rounded-lg gentle-animation font-medium text-lg active:bg-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact')
                contactSection?.scrollIntoView({ behavior: 'smooth' })
                setIsMobileMenuOpen(false)
              }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-lg hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700 gentle-animation mt-8 cursor-pointer"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-40 flex items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-5xl mx-auto pt-20">
          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"
          />
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-amber-400 text-lg font-medium tracking-widest uppercase mb-4">
              Mathematics Researcher
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight text-slate-100 mb-6">
              <span className="block">ASAD</span>
              <span className="block text-amber-400">SHAHZAD</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Computational Mathematics Researcher specializing in 
              <span className="text-amber-400"> Partial Differential Equations</span>, 
              <span className="text-amber-400"> Fluid Mechanics</span>, and 
              <span className="text-amber-400"> Machine Learning</span>
            </p>
            <p className="text-lg text-slate-400">
              📍 Narowal, Pakistan
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center mt-10"
          >
            <motion.a
              href="#publications"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-semibold px-8 py-4 rounded-md hover:from-amber-400 hover:to-amber-500 gentle-animation cursor-pointer inline-flex items-center gap-2"
            >
              View Publications
            </motion.a>
            <motion.a
              href="mailto:asadshahzad0017@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-effect text-slate-200 font-semibold px-8 py-4 rounded-md gentle-animation cursor-pointer inline-flex items-center gap-2 border border-amber-400/30"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center gap-6 mt-12"
          >
            <a
              href="https://linkedin.com/in/asad-shahzad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-400 gentle-animation"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:asadshahzad0017@gmail.com"
              className="text-slate-400 hover:text-amber-400 gentle-animation"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-12"
          />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full float-gentle opacity-60"></div>
      <div className="absolute top-40 right-32 w-3 h-3 bg-amber-300 rounded-full drift-left opacity-40"></div>
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-amber-500 rounded-full drift-right opacity-50"></div>
    </div>
  )
}
