'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'

export function Experience() {
  const experience = [
    {
      type: 'work',
      title: "Mathematics Lecturer",
      organization: "KIPS College Narowal Campus",
      period: "Dec 2023 - Present",
      description: "Teaching advanced mathematics courses and mentoring students in mathematical concepts"
    },
    {
      type: 'work',
      title: "Mathematics Lecturer",
      organization: "Riphah International College Narowal Campus",
      period: "Jan 2023 - Dec 2023",
      description: "Delivered comprehensive mathematics curriculum and conducted research activities"
    }
  ]

  const education = [
    {
      degree: "M.Phil Mathematics",
      institution: "GCU Faisalabad",
      period: "2020 - 2022",
      grade: "CGPA: 3.51/4.0"
    },
    {
      degree: "M.Sc Mathematics",
      institution: "Minhaj University Lahore",
      period: "2018 - 2020",
      grade: "CGPA: 3.81/4.0"
    }
  ]

  return (
    <section id="experience" className="relative py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400/80 tracking-widest uppercase">
                  Professional Experience
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black leading-tight text-slate-100">
                Work <span className="text-amber-400">History</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.title + exp.organization}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation"
                       style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                    
                    {/* Timeline dot */}
                    <div className="absolute -left-3 top-10 w-6 h-6 bg-amber-400 rounded-full border-4 border-slate-900 hidden lg:block" />
                    
                    <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 gentle-animation">
                      {exp.title}
                    </h3>
                    
                    <p className="text-amber-400/80 font-medium mb-3">
                      {exp.organization}
                    </p>
                    
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-amber-400" />
                <span className="text-sm font-semibold text-amber-400/80 tracking-widest uppercase">
                  Academic Background
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-black leading-tight text-slate-100">
                Education <span className="text-amber-400">Journey</span>
              </h2>
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/30 gentle-animation"
                       style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }}>
                    
                    <div className="flex items-center gap-2 text-amber-400 text-sm font-medium mb-3">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 gentle-animation">
                      {edu.degree}
                    </h3>
                    
                    <p className="text-amber-400/80 font-medium mb-3">
                      {edu.institution}
                    </p>
                    
                    <div className="inline-flex items-center px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                      <span className="text-emerald-400 font-semibold text-sm">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
