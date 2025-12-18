'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Box, Palette, Blocks, RotateCcw, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const services = [
  {
    icon: Box,
    title: 'Modelagem 3D para Produtos',
  },
  {
    icon: Palette,
    title: 'Digitalização de acabamentos',
  },
  {
    icon: Blocks,
    title: 'Blocos para SketchUp',
  },
  {
    icon: RotateCcw,
    title: '360º Product View',
  },
];

export default function ProductDigitalization() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); // 0-100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Imagens - substitua pelas imagens reais de antes/depois
  const beforeImage = '/project1.jpg';
  const afterImage = '/project2.jpg';

  // Função para atualizar a posição do slider
  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  // Eventos globais para mouse
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      updateSliderPosition(e.clientX);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Eventos para touch
  useEffect(() => {
    if (!isDragging) return;

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      if (e.touches[0]) {
        updateSliderPosition(e.touches[0].clientX);
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      setIsDragging(true);
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  const moveSlider = (direction: 'left' | 'right') => {
    const step = 5;
    if (direction === 'left') {
      setSliderPosition(Math.max(0, sliderPosition - step));
    } else {
      setSliderPosition(Math.min(100, sliderPosition + step));
    }
  };

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--off-white)] overflow-hidden">
        {/* Background dinâmico */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,var(--dourado-fosco)/15%,transparent_60%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,var(--bege-quente)/20%,transparent_60%)]" />
        </div>

        {/* Linha decorativa superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* Lado Esquerdo - Conteúdo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Título */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--preto-carvao)] mb-4 sm:mb-6"
                >
                  Seu Produto{' '}
                  <span className="font-normal text-[var(--dourado-fosco)]">
                    Digitalizado
                  </span>
                </motion.h2>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-16 h-[1px] bg-[var(--dourado-fosco)] mb-6"
                />
              </div>

              {/* Descrição */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-sm sm:text-base md:text-lg font-extralight leading-relaxed text-[var(--cinza-pedra)]"
              >
                Transforme seus produtos físicos em modelos 3D de alta qualidade. 
                Nossa tecnologia de digitalização permite criar representações precisas 
                e realistas para uso em e-commerce, catálogos e visualizações interativas.
              </motion.p>

              {/* Lista de Serviços */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-3 sm:space-y-4"
              >
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 sm:gap-4 group"
                    >
                      <motion.div
                        className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[var(--dourado-fosco)]/10 group-hover:bg-[var(--dourado-fosco)]/20 transition-colors duration-300"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--dourado-fosco)]" strokeWidth={1.5} />
                      </motion.div>
                      <span className="text-sm sm:text-base md:text-lg font-light text-[var(--preto-carvao)] group-hover:text-[var(--dourado-fosco)] transition-colors duration-300">
                        {service.title}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Botão CTA */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[var(--dourado-fosco)] text-[var(--preto-carvao)] text-sm sm:text-base font-medium tracking-wide transition-all duration-300 overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                }}
              >
                {/* Efeito de brilho no hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Lado Direito - Slider Antes/Depois */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/3] overflow-hidden bg-[var(--bege-quente)]/30"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                }}
              >
                {/* Container do slider */}
                <div
                  ref={containerRef}
                  className="relative w-full h-full cursor-col-resize select-none"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                >
                  {/* Imagem "Depois" (fundo) */}
                  <div className="absolute inset-0">
                    <Image
                      src={afterImage}
                      alt="Produto digitalizado"
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Imagem "Antes" (sobreposta com clip) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                    }}
                  >
                    <Image
                      src={beforeImage}
                      alt="Produto original"
                      fill
                      quality={90}
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Linha divisória */}
                  <div
                    className="absolute top-0 bottom-0 w-0.5 bg-[var(--dourado-fosco)] z-20 pointer-events-none"
                    style={{
                      left: `${sliderPosition}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {/* Círculo na linha */}
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--dourado-fosco)] rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <div className="flex items-center gap-1">
                        <ChevronLeft className="w-4 h-4 text-[var(--preto-carvao)]" />
                        <ChevronRight className="w-4 h-4 text-[var(--preto-carvao)]" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 z-30">
                    <div className="bg-[var(--preto-carvao)]/80 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm font-light text-[var(--off-white)] uppercase tracking-wider">
                      Antes
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-30">
                    <div className="bg-[var(--preto-carvao)]/80 backdrop-blur-sm px-3 py-1.5 text-xs sm:text-sm font-light text-[var(--off-white)] uppercase tracking-wider">
                      Depois
                    </div>
                  </div>
                </div>
              </div>

              {/* Controles de setas */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <motion.button
                  onClick={() => moveSlider('left')}
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[var(--bege-quente)]/50 hover:bg-[var(--dourado-fosco)]/20 text-[var(--dourado-fosco)] hover:text-[var(--preto-carvao)] transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                  aria-label="Mover para esquerda"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </motion.button>
                
                <div className="flex-1 h-1 bg-[var(--bege-quente)]/50 relative overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-[var(--dourado-fosco)]"
                    style={{ width: `${sliderPosition}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                
                <motion.button
                  onClick={() => moveSlider('right')}
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[var(--bege-quente)]/50 hover:bg-[var(--dourado-fosco)]/20 text-[var(--dourado-fosco)] hover:text-[var(--preto-carvao)] transition-all duration-300"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))',
                  }}
                  aria-label="Mover para direita"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Linha decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
        />
      </section>

      {/* Modal de Contato */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

