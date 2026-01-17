'use client'

import { motion } from 'framer-motion'
import { FileText, BookOpen, ExternalLink } from 'lucide-react'

export function Publications() {
  const publications = [
    {
      title: "Numerical study of hydro-thermal properties of ferro-copper oxide water hybrid nanofluid",
      journal: "International Journal of Heat and Fluid Flow",
      status: "Under Review",
      year: 2024,
      type: "journal"
    },
    {
      title: "Study of motile microorganisms with activation energy under Wu's slip effects",
      journal: "Boundary Value Problems",
      status: "Under Review",
      year: 2024,
      type: "journal"
    },
    {
      title: "Bioconvection flow of tangent hyperbolic nanoliquid with chemically reactive properties",
      journal: "Journal of Mathematics",
      status: "Under Review",
      year: 2024,
      type: "journal"
    },
    {
      title: "Thermal Properties and Applications of Nanofluids",
      journal: "Scrivener Publishing",
      status: "Accepted",
      year: 2024,
      type: "book"
    }
  ]

  return (
    <section id="publications" className="relative py-32 bg-gradient-to-b from-slate-800 to-slate-900">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(45deg, #d4af37 25%, transparent 25%, transparent 75%, #d4af37 75%, #d4af37),
                         linear-gradient(45deg, #d4af37 25%, transparent 25%, transparent 75%, #d4af37 75%, #d4af37)`,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px'
      }} />

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
              Academic Contributions
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
            <span className="block mb-2">Publications</span>
            <span className="block text-amber-400">2024</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Contributing to the advancement of mathematical sciences through peer-reviewed research
          </motion.p>
        </div>

        {/* Publications List */}
        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation"
                   style={{
                     boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                   }}>
                
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-amber-400/10 rounded-xl flex items-center justify-center group-hover:bg-amber-400/20 gentle-animation">
                      {pub.type === 'book' ? (
                        <BookOpen className="w-7 h-7 text-amber-400" />
                      ) : (
                        <FileText className="w-7 h-7 text-amber-400" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 gentle-animation leading-tight">
                      {pub.title}
                    </h3>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <span className="text-slate-400">
                        {pub.journal}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">
                        {pub.year}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        pub.status === 'Accepted' 
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                      }`}>
                        {pub.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="absolute top-6 right-6 w-8 h-0.5 bg-amber-400" />
                  <div className="absolute top-6 right-6 w-0.5 h-8 bg-amber-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
