'use client'

import { Mail, Linkedin, MapPin } from 'lucide-react'

export function Footer() {
  const researchAreas = [
    'Partial Differential Equations',
    'Fluid Mechanics',
    'Computational Fluid Dynamics',
    'Machine Learning',
    'Deep Learning',
    'Numerical Analysis',
    'Finite Element Method',
    'Scientific Computing'
  ]

  return (
    <footer className="relative py-20 bg-slate-950 text-slate-300">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-12">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-5">
            <div>
              <div className="font-bagel text-amber-400 text-3xl tracking-wider mb-4">
                ASAD SHAHZAD
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Mathematics Researcher specializing in Computational Mathematics, 
                Partial Differential Equations, and Machine Learning applications 
                in scientific computing.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="mailto:asadshahzad0017@gmail.com" 
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 gentle-animation"
                >
                  <Mail className="w-5 h-5" />
                  asadshahzad0017@gmail.com
                </a>
                <a 
                  href="https://linkedin.com/in/asad-shahzad" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-400 hover:text-amber-400 gentle-animation"
                >
                  <Linkedin className="w-5 h-5" />
                  linkedin.com/in/asad-shahzad
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5" />
                  Narowal, Pakistan
                </div>
              </div>
            </div>
          </div>

          {/* Research Areas */}
          <div className="col-span-12 md:col-span-7">
            <div>
              <h4 className="font-black text-2xl text-slate-100 mb-4">RESEARCH DOMAINS</h4>
              
              <p className="text-slate-400 text-base mb-8 leading-relaxed">
                Expertise spanning mathematical theory, numerical methods, and cutting-edge 
                computational techniques for solving complex scientific problems.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {researchAreas.map((area) => (
                  <div
                    key={area}
                    className="text-slate-400 hover:text-amber-400 gentle-animation text-sm font-medium"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-500 mb-4 md:mb-0">
              © 2024 Asad Shahzad. All rights reserved.
            </div>
            <div className="text-sm text-slate-500">
              Mathematics Researcher | Computational Mathematics
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
