'use client'

import { motion } from 'framer-motion'

export function Research() {
  const researchDomains = [
    {
      title: "Partial Differential Equations",
      icon: "∂",
      description: "Advanced analysis and numerical solutions for complex PDEs in mathematical physics"
    },
    {
      title: "Fluid Mechanics",
      icon: "∇",
      description: "Study of fluid behavior, flow dynamics, and transport phenomena"
    },
    {
      title: "Computational Fluid Dynamics",
      icon: "⊡",
      description: "Numerical simulation and analysis of fluid flows using computational methods"
    },
    {
      title: "Machine Learning",
      icon: "⊛",
      description: "Application of ML algorithms for mathematical modeling and prediction"
    },
    {
      title: "Deep Learning",
      icon: "⊚",
      description: "Neural network architectures for solving complex mathematical problems"
    },
    {
      title: "Numerical Analysis",
      icon: "Σ",
      description: "Development and analysis of numerical algorithms for mathematical computation"
    },
    {
      title: "Finite Element Method",
      icon: "△",
      description: "FEM techniques for solving boundary value problems in engineering"
    },
    {
      title: "Scientific Computing",
      icon: "∫",
      description: "High-performance computing applications in mathematical research"
    }
  ]

  return (
    <section id="research" className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
        backgroundSize: '40px 40px'
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
              Research Domains
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
            <span className="block mb-2">Areas of</span>
            <span className="block text-amber-400">Expertise</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Bridging mathematical theory with computational innovation across 8 specialized research domains
          </motion.p>
        </div>

        {/* Research Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchDomains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation h-full"
                   style={{
                     boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
                   }}>
                
                {/* Icon */}
                <div className="text-5xl text-amber-400 mb-6 font-serif group-hover:scale-110 gentle-animation">
                  {domain.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-400 gentle-animation">
                  {domain.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {domain.description}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-20">
                  <div className="absolute top-4 right-4 w-8 h-0.5 bg-amber-400 transform rotate-45" />
                  <div className="absolute top-4 right-4 w-0.5 h-8 bg-amber-400 transform rotate-45" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
