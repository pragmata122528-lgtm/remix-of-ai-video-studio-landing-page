'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Linkedin, Send } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-amber-400/80 tracking-widest uppercase">
              Get in Touch
            </span>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8 text-slate-100"
          >
            <span className="block mb-2">Let's</span>
            <span className="block text-amber-400">Connect</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Interested in collaboration or have questions about my research? I'd love to hear from you.
          </motion.p>
        </div>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.a
            href="mailto:asadshahzad0017@gmail.com"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group block"
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation text-center h-full"
                 style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              
              <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400/20 gentle-animation">
                <Mail className="w-8 h-8 text-amber-400" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-amber-400 gentle-animation">
                Email
              </h3>
              
              <p className="text-slate-400 text-sm break-all">
                asadshahzad0017@gmail.com
              </p>
            </div>
          </motion.a>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 text-center h-full"
                 style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              
              <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-amber-400" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                Location
              </h3>
              
              <p className="text-slate-400 text-sm">
                Narowal, Pakistan
              </p>
            </div>
          </motion.div>

          {/* LinkedIn Card */}
          <motion.a
            href="https://linkedin.com/in/asad-shahzad"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group block"
          >
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation text-center h-full"
                 style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
              
              <div className="w-16 h-16 bg-amber-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-400/20 gentle-animation">
                <Linkedin className="w-8 h-8 text-amber-400" />
              </div>
              
              <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-amber-400 gentle-animation">
                LinkedIn
              </h3>
              
              <p className="text-slate-400 text-sm">
                linkedin.com/in/asad-shahzad
              </p>
            </div>
          </motion.a>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="mailto:asadshahzad0017@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 font-bold px-10 py-5 rounded-xl hover:from-amber-400 hover:to-amber-500 gentle-animation cursor-pointer text-lg"
          >
            <Send className="w-5 h-5" />
            Send Me a Message
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
