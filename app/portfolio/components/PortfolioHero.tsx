'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PortfolioHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen h-screen w-full overflow-hidden bg-[var(--off-white)]"
    >
      {/* Elementos 3D flutuantes de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Forma geométrica suave - círculo com blur */}
        <motion.div
          style={{ y, opacity }}
          className="absolute top-1/4 -left-16 sm:-left-24 md:-left-32 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/20 to-transparent rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]), opacity }}
          className="absolute bottom-1/4 -right-16 sm:-right-24 md:-right-32 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <div 
              className="absolute inset-0 bg-gradient-to-tl from-[var(--accent)]/15 to-transparent rounded-full blur-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Partículas minimalistas e harmônicas */}
        {[
          { left: '10%', top: '15%', size: 3, delay: 0, duration: 6, y: [0, -20, -20, 0] },
          { left: '25%', top: '30%', size: 2.5, delay: 1.2, duration: 7, y: [0, -25, -25, 0] },
          { left: '45%', top: '20%', size: 3.5, delay: 0.8, duration: 5.5, y: [0, -18, -18, 0] },
          { left: '65%', top: '35%', size: 2.8, delay: 2, duration: 6.5, y: [0, -22, -22, 0] },
          { left: '80%', top: '25%', size: 3.2, delay: 1.5, duration: 5.8, y: [0, -20, -20, 0] },
          { left: '15%', top: '60%', size: 2.6, delay: 0.5, duration: 7.2, y: [0, -24, -24, 0] },
          { left: '35%', top: '70%', size: 3.3, delay: 1.8, duration: 6.2, y: [0, -19, -19, 0] },
          { left: '55%', top: '65%', size: 2.7, delay: 2.5, duration: 6.8, y: [0, -21, -21, 0] },
          { left: '75%', top: '75%', size: 3.4, delay: 1, duration: 5.6, y: [0, -23, -23, 0] },
          { left: '90%', top: '55%', size: 2.9, delay: 2.2, duration: 7.5, y: [0, -20, -20, 0] },
          { left: '20%', top: '85%', size: 3.1, delay: 0.3, duration: 6.3, y: [0, -22, -22, 0] },
          { left: '40%', top: '90%', size: 2.4, delay: 1.6, duration: 7.8, y: [0, -25, -25, 0] },
          { left: '60%', top: '85%', size: 3.6, delay: 0.7, duration: 5.9, y: [0, -18, -18, 0] },
          { left: '85%', top: '80%', size: 2.8, delay: 2.8, duration: 6.6, y: [0, -21, -21, 0] },
          { left: '5%', top: '50%', size: 3.2, delay: 1.3, duration: 6.4, y: [0, -19, -19, 0] },
          { left: '30%', top: '45%', size: 2.5, delay: 0.9, duration: 7.3, y: [0, -24, -24, 0] },
          { left: '50%', top: '50%', size: 3.7, delay: 1.4, duration: 5.7, y: [0, -17, -17, 0] },
          { left: '70%', top: '45%', size: 2.6, delay: 2.3, duration: 7.1, y: [0, -23, -23, 0] },
          { left: '95%', top: '40%', size: 3.3, delay: 0.6, duration: 6.1, y: [0, -20, -20, 0] },
          { left: '12%', top: '75%', size: 2.7, delay: 1.9, duration: 6.9, y: [0, -22, -22, 0] },
        ].map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
            }}
            animate={{ 
              opacity: [0, 0.7, 0.85, 0.7, 0],
              y: particle.y,
            }}
            transition={{ 
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="absolute rounded-full bg-[var(--accent)]/60"
            style={{
              left: particle.left,
              top: particle.top,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 sm:mb-8"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-extralight text-[var(--preto-carvao)] leading-[0.9] tracking-tight"
              style={{ 
                fontFamily: "var(--font-playfair), 'Georgia', serif"
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="block"
              >
                Portfólio
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="block text-[var(--accent)] font-normal"
              >
                3D
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Linha decorativa animada */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-24 sm:w-32 h-px bg-[var(--accent)] mx-auto mb-6 sm:mb-8"
          />

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-[var(--foreground-secondary)] font-light tracking-wide max-w-2xl mx-auto leading-relaxed px-4"
          >
            Visualizações que transformam projetos em
            <br className="hidden sm:block" />
            <span className="text-[var(--accent)]">experiências visuais impactantes</span>
          </motion.p>
        </div>
      </div>


      {/* Seta scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 group cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          {/* Linha vertical */}
          <div className="w-[1px] h-12 sm:h-16 md:h-20 lg:h-24 bg-[var(--cinza-pedra)]/40 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300" />
          
          {/* Seta SVG customizada fina */}
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[var(--cinza-pedra)] group-hover:text-[var(--dourado-fosco)] transition-colors duration-300"
          >
            <path
              d="M1 1L6 6L11 1"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Gradiente de transição inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-transparent via-[var(--bege-quente)]/20 to-[var(--bege-quente)] pointer-events-none" />
    </section>
  );
}
