'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ContactModal from '../../components/ContactModal';

export default function ServicesHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay pode ser bloqueado, mas o loop ainda funcionará
      });
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Conteúdo à Esquerda */}
        <div className="relative h-screen w-full flex items-center justify-start bg-[var(--off-white)] order-1 lg:order-1">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Título Chamativo */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-extralight tracking-tight text-[var(--preto-carvao)] mb-8 leading-[0.95]"
              >
                <span className="block">Criamos</span>
                <motion.span
                  className="block font-normal text-[var(--dourado-fosco)]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                >
                  realidades
                </motion.span>
                <span className="block">3D</span>
              </motion.h1>

              {/* Botões */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(194, 162, 93, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[var(--dourado-fosco)] text-[var(--preto-carvao)] text-sm font-medium tracking-wide rounded-sm hover:bg-[var(--dourado-fosco)]/90 transition-all duration-300"
                >
                  Ver Serviços
                </motion.button>
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-[var(--preto-carvao)]/20 text-[var(--preto-carvao)] text-sm font-light tracking-wide rounded-sm hover:bg-[var(--preto-carvao)]/5 transition-all duration-300"
                >
                  Solicitar Orçamento
                </motion.button>
              </motion.div>

              {/* Seta abaixo do botão Ver Serviços */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-start gap-4 group cursor-pointer"
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
                  <div className="w-[1px] h-16 sm:h-20 md:h-24 bg-[var(--cinza-pedra)]/40 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300" />

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
            </motion.div>
          </div>
        </div>

        {/* Vídeo à Direita */}
        <div className="relative h-screen w-full overflow-hidden order-2 lg:order-2">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            {/* Fallback */}
            <div className="w-full h-full bg-gradient-to-br from-[var(--bege-quente)] to-[var(--off-white)]" />
          </video>

          {/* Overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
        </div>
      </div>

      {/* Gradiente de transição na parte inferior para suavizar a passagem */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[var(--bege-quente)]/30 to-[var(--bege-quente)] z-10 pointer-events-none" />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

