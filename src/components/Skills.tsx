'use client'

import { motion } from 'framer-motion'

export function Skills() {
  const skills = [
    { name: "MATLAB/Simulink", level: 95 },
    { name: "Numerical Analysis", level: 95 },
    { name: "CFD", level: 90 },
    { name: "Python", level: 90 },
    { name: "LaTeX", level: 90 },
    { name: "Machine Learning", level: 85 },
    { name: "FEM", level: 85 },
    { name: "Deep Learning", level: 80 }
  ]

  return (
    <section id="skills" className="relative py-32 bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl" />
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
              Technical Proficiency
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
            <span className="block mb-2">Technical</span>
            <span className="block text-amber-400">Skills</span>
          </motion.h2>
        </div>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-xl p-6 border border-amber-400/10 hover:border-amber-400/30 gentle-animation">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 gentle-animation">
                    {skill.name}
                  </h3>
                  <span className="text-amber-400 font-bold text-lg">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-3 bg-slate-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full"
                    style={{
                      boxShadow: '0 0 20px rgba(217, 175, 55, 0.5)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
