'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import ContactModal from './ContactModal';

export default function Hero() {
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
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video de Fundo */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/mp4" />
          {/* Fallback para caso o vídeo não carregue */}
          <div className="w-full h-full bg-gradient-to-br from-[var(--bege-quente)] to-[var(--off-white)]" />
        </video>
        {/* Overlay com gradiente preto para melhorar legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 50%, rgba(0, 0, 0, 0.7) 100%)'
          }}
        />
      </div>

      {/* Halo central para o conteúdo */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, rgba(245, 240, 230, 0.18) 0%, rgba(245, 240, 230, 0.08) 30%, transparent 60%)'
        }}
      />


      {/* Conteúdo Centralizado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--off-white)] mb-5 sm:mb-6 leading-tight px-4"
        >
          <span className="block">Visualizações 3D que
          </span>
          <span className="block font-semibold text-[var(--dourado-fosco)]">
            convertem visitantes em clientes
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-[var(--off-white)]/90 font-light tracking-wide max-w-2xl mx-auto mb-8 sm:mb-10 px-4"
        >

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
        >
          <Link href="/portfolio" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(194, 162, 93, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[var(--dourado-fosco)] text-[var(--preto-carvao)] text-sm sm:text-base font-medium tracking-wide rounded-sm hover:bg-[var(--dourado-fosco)]/90 transition-all duration-300 cursor-pointer"
            >
              Explorar Projetos
            </motion.button>
          </Link>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-[var(--off-white)]/50 text-[var(--off-white)] text-sm sm:text-base font-light tracking-wide rounded-sm hover:bg-[var(--off-white)]/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
          >
            Começar Agora
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-[var(--off-white)]/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-[var(--dourado-fosco)] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

