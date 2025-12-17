'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Array de projetos - você pode substituir pelas imagens reais
const projects = [
  {
    id: 1,
    title: 'Residencial Premium',
    image: '/project1.jpg',
    company: 'Construtora Elite',
    subtitle: 'Projeto residencial de alto padrão com 120 unidades',
    category: 'Residencial Urbano',
  },
  {
    id: 2,
    title: 'Corporate Tower',
    image: '/project2.jpg',
    company: 'Corporate Towers',
    subtitle: 'Edifício comercial de 45 andares no centro da cidade',
    category: 'Comercial',
  },
  {
    id: 3,
    title: 'Luxury Hotel',
    image: '/project3.jpg',
    company: 'Luxury Hotels',
    subtitle: 'Resort 5 estrelas com 200 suítes e spa de classe mundial',
    category: 'Hospitalidade',
  },
  {
    id: 4,
    title: 'Industrial Complex',
    image: '/project4.jpg',
    company: 'Industrial Group',
    subtitle: 'Complexo industrial de 50.000m² com tecnologia de ponta',
    category: 'Industrial',
  },
  {
    id: 5,
    title: 'Shopping Center',
    image: '/project5.jpg',
    company: 'Retail Spaces',
    subtitle: 'Centro comercial com 300 lojas e 5 salas de cinema',
    category: 'Varejo',
  },
  {
    id: 6,
    title: 'Heritage Building',
    image: '/project6.jpg',
    company: 'Heritage Properties',
    subtitle: 'Restauração e modernização de edifício histórico',
    category: 'Patrimonial',
  },
  {
    id: 7,
    title: 'Residential Complex',
    image: '/project7.jpg',
    company: 'Residencial Premium',
    subtitle: 'Condomínio fechado com 80 unidades e área de lazer completa',
    category: 'Residencial',
  },
  {
    id: 8,
    title: 'Business Center',
    image: '/project8.jpg',
    company: 'Corporate Towers',
    subtitle: 'Centro empresarial com escritórios modernos e coworking',
    category: 'Comercial',
  },
  {
    id: 9,
    title: 'Warehouse Facility',
    image: '/project9.jpg',
    company: 'Logistics Corp',
    subtitle: 'Centro de distribuição automatizado de última geração',
    category: 'Logística',
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [preloadedImages, setPreloadedImages] = useState<Set<number>>(new Set());

  // Sempre mostrar 3 projetos: currentIndex, currentIndex+1, currentIndex+2
  // Com loop infinito usando módulo
  const getProject = (offset: number) => {
    const index = (currentIndex + offset + projects.length) % projects.length;
    return { ...projects[index], displayIndex: index };
  };

  const visibleProjects = [
    getProject(0),
    getProject(1),
    getProject(2),
  ].filter((project, index, self) => 
    // Garantir que não há duplicatas baseado no ID
    index === self.findIndex((p) => p.id === project.id)
  );

  const canGoNext = true; // Loop infinito
  const canGoPrev = true; // Loop infinito

  // Pré-carregar imagens dos próximos projetos
  const preloadNextImages = (index: number) => {
    const nextIndices = [
      (index + 1) % projects.length,
      (index + 2) % projects.length,
      (index + 3) % projects.length,
    ];
    
    nextIndices.forEach((idx) => {
      if (!preloadedImages.has(idx)) {
        const img = new window.Image();
        img.src = projects[idx].image;
        img.onload = () => {
          setPreloadedImages((prev) => new Set(prev).add(idx));
        };
      }
    });
  };

  // Pré-carregar imagens iniciais
  useEffect(() => {
    preloadNextImages(0);
  }, []);

  // Pré-carregar quando o índice muda
  useEffect(() => {
    preloadNextImages(currentIndex);
  }, [currentIndex]);

  const nextProjects = () => {
    setDirection('right');
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProjects = () => {
    setDirection('left');
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--bege-quente)] overflow-hidden">
      {/* Background dinâmico */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_40%,var(--dourado-fosco)/12%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_60%,var(--bege-quente)/18%,transparent_60%)]" />
      </div>

      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-[var(--preto-carvao)] px-4"
          >
            Nossos Projetos em{' '}
            <span className="font-normal text-[var(--dourado-fosco)]">
              Destaque
            </span>
          </motion.h2>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="relative">
          {/* Container dos projetos */}
          <div className="relative overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-14">
              {visibleProjects.map((project, index) => {
                // Determinar animação baseada na posição e direção
                let initialX = 0;
                if (direction === 'right') {
                  if (index === 0) initialX = -300; // Sai pela esquerda
                  else if (index === 1) initialX = -150; // Move da posição 2 para 1
                  else if (index === 2) initialX = 300; // Novo entra pela direita
                } else {
                  if (index === 0) initialX = -300; // Novo entra pela esquerda
                  else if (index === 1) initialX = 150; // Move da posição 1 para 2
                  else if (index === 2) initialX = 300; // Sai pela direita
                }

                return (
                  <motion.div
                    key={`${project.id}-${project.displayIndex}-${currentIndex}`}
                    initial={{ 
                      opacity: 0,
                      x: initialX,
                    }}
                    animate={{ 
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-[2/3] overflow-hidden bg-[var(--bege-quente)]/30">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        quality={95}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 600px, (max-width: 1920px) 800px, 1000px"
                        priority={index <= 2}
                        loading={index <= 2 ? 'eager' : 'lazy'}
                      />

                    {/* Overlay sutil no hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />

                    {/* Informações no hover - canto inferior esquerdo */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 md:bottom-6 md:left-6 z-10"
                        >
                          <div className="bg-[var(--off-white)]/95 backdrop-blur-md p-2.5 sm:p-3 md:p-4 rounded-sm max-w-[160px] sm:max-w-[180px] md:max-w-[220px]">
                            <p className="text-[9px] sm:text-[10px] md:text-xs font-light tracking-[0.15em] uppercase text-[var(--cinza-pedra)] mb-1 sm:mb-1.5">
                              Projeto em Destaque
                            </p>
                            <p className="text-[11px] sm:text-xs md:text-sm font-light text-[var(--preto-carvao)] tracking-wide mb-0.5 sm:mb-1">
                              {project.company}
                            </p>
                            <p className="text-[9px] sm:text-[10px] md:text-xs font-extralight text-[var(--cinza-pedra)] leading-relaxed mb-1.5 sm:mb-2">
                              {project.subtitle}
                            </p>
                            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-light text-[var(--cinza-pedra)]/90 uppercase tracking-wider">
                              {project.category}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </div>

          {/* Controles de navegação */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.button
              onClick={prevProjects}
              disabled={!canGoPrev}
              whileHover={{ scale: canGoPrev ? 1.05 : 1, x: canGoPrev ? -2 : 0 }}
              whileTap={{ scale: canGoPrev ? 0.95 : 1 }}
              className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 ${
                canGoPrev
                  ? 'text-[var(--dourado-fosco)] hover:text-[var(--preto-carvao)] cursor-pointer'
                  : 'text-[var(--cinza-pedra)]/30 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.5} />
            </motion.button>

            {/* Indicadores */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-[200px] sm:max-w-none">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 'right' : 'left');
                    setCurrentIndex(index);
                  }}
                  className={`h-1 rounded-full transition-all duration-300 flex-shrink-0 ${
                    currentIndex === index
                      ? 'bg-[var(--dourado-fosco)] w-6 sm:w-8'
                      : 'bg-[var(--bege-quente)] w-1.5 sm:w-2 hover:bg-[var(--bege-quente)]/80'
                  }`}
                  whileHover={{ scaleY: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextProjects}
              disabled={!canGoNext}
              whileHover={{ scale: canGoNext ? 1.05 : 1, x: canGoNext ? 2 : 0 }}
              whileTap={{ scale: canGoNext ? 0.95 : 1 }}
              className={`flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 transition-all duration-300 ${
                canGoNext
                  ? 'text-[var(--dourado-fosco)] hover:text-[var(--preto-carvao)] cursor-pointer'
                  : 'text-[var(--cinza-pedra)]/30 cursor-not-allowed'
              }`}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" strokeWidth={1.5} />
            </motion.button>
          </div>
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
  );
}

