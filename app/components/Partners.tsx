'use client';

import { motion } from 'framer-motion';
import { 
  Building2, 
  Home, 
  Building, 
  Landmark, 
  Hotel, 
  Factory,
  Warehouse,
  Store
} from 'lucide-react';

// Array de parceiros fake com ícones
const partners = [
  { name: 'Construtora Elite', icon: Building2 },
  { name: 'Residencial Premium', icon: Home },
  { name: 'Corporate Towers', icon: Building },
  { name: 'Heritage Properties', icon: Landmark },
  { name: 'Luxury Hotels', icon: Hotel },
  { name: 'Industrial Group', icon: Factory },
  { name: 'Logistics Corp', icon: Warehouse },
  { name: 'Retail Spaces', icon: Store },
];

export default function Partners() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--preto-carvao)] overflow-hidden">
      {/* Background dinâmico com padrões sutis */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_30%,var(--dourado-fosco)/12%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_70%,var(--dourado-fosco)/8%,transparent_60%)]" />
      </div>
      {/* Título sutil */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-8 sm:mb-12 md:mb-20 px-4 sm:px-6"
      >
        <p className="text-[10px] sm:text-xs md:text-sm font-light tracking-[0.25em] uppercase text-[var(--off-white)]/70 mb-2">
          Confiam em nós
        </p>
        <div className="w-12 h-[1px] bg-[var(--dourado-fosco)] mx-auto" />
      </motion.div>

      {/* Container do carrossel */}
      <div className="relative z-10 w-full">
        {/* Gradiente esquerdo */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-64 z-10 bg-gradient-to-r from-[var(--preto-carvao)] via-[var(--preto-carvao)]/80 to-transparent pointer-events-none" />
        
        {/* Gradiente direito */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 md:w-40 lg:w-64 z-10 bg-gradient-to-l from-[var(--preto-carvao)] via-[var(--preto-carvao)]/80 to-transparent pointer-events-none" />

        {/* Carrossel infinito */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-12 md:gap-20 lg:gap-28"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {/* Primeira cópia */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={`first-${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 transition-all duration-700 opacity-60 hover:opacity-100">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 border border-[var(--off-white)]/20 bg-[var(--off-white)]/5 rounded-sm backdrop-blur-sm hover:border-[var(--dourado-fosco)]/60 hover:bg-[var(--off-white)]/10 transition-all duration-500 p-3">
                      <Icon 
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[var(--off-white)]/60 group-hover:text-[var(--dourado-fosco)] transition-colors duration-500" 
                        strokeWidth={1.5}
                      />
                      <span className="text-[9px] md:text-[10px] lg:text-xs font-extralight text-[var(--off-white)]/70 tracking-wider text-center leading-tight">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
            {/* Segunda cópia (para loop infinito) */}
            {partners.map((partner, index) => {
              const Icon = partner.icon;
              return (
                <motion.div
                  key={`second-${partner.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center px-4"
                  whileHover={{ scale: 1.08, y: -4 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="relative w-32 h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 transition-all duration-700 opacity-60 hover:opacity-100">
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 border border-[var(--off-white)]/20 bg-[var(--off-white)]/5 rounded-sm backdrop-blur-sm hover:border-[var(--dourado-fosco)]/60 hover:bg-[var(--off-white)]/10 transition-all duration-500 p-3">
                      <Icon 
                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-[var(--off-white)]/60 group-hover:text-[var(--dourado-fosco)] transition-colors duration-500" 
                        strokeWidth={1.5}
                      />
                      <span className="text-[9px] md:text-[10px] lg:text-xs font-extralight text-[var(--off-white)]/70 tracking-wider text-center leading-tight">
                        {partner.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Linha decorativa sutil */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--dourado-fosco)]/30 to-transparent"
      />
    </section>
  );
}

