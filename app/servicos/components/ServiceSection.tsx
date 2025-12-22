'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

// Helper function para codificar caminhos de imagens com espaços
const encodeImagePath = (path: string): string => {
  if (path.startsWith('/')) {
    const parts = path.split('/');
    const filename = parts[parts.length - 1];
    const dir = parts.slice(0, -1).join('/');
    return dir + '/' + encodeURIComponent(filename);
  }
  return encodeURIComponent(path);
};

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  color: 'dourado' | 'bege';
}

interface ServiceSectionProps {
  service: Service;
  index: number;
}

export default function ServiceSection({ service, index }: ServiceSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Ajuste para criar transição harmoniosa: primeira seção começa com bege-quente
  // para fazer transição suave do off-white da hero
  const isEven = index % 2 === 0;
  const bgColor = index === 0 
    ? 'bg-[var(--bege-quente)]' // Primeira seção: bege-quente para transição suave
    : isEven 
      ? 'bg-[var(--off-white)]' 
      : 'bg-[var(--bege-quente)]';

  return (
    <section
      ref={ref}
      className={`relative min-h-screen flex items-center ${
        index === 0 ? 'pt-16 sm:pt-20 md:pt-32 lg:pt-40' : 'py-12 sm:py-16 md:py-20 lg:py-32'
      } pb-12 sm:pb-16 md:pb-20 lg:pb-32 overflow-hidden ${bgColor}`}
    >
      {/* Background dinâmico com gradientes sutis */}
      <div className="absolute inset-0">
        {/* Gradiente radial sutil */}
        <div
          className={`absolute inset-0 ${
            service.color === 'dourado'
              ? 'bg-[radial-gradient(circle_at_30%_20%,var(--dourado-fosco)/8%,transparent_60%)]'
              : 'bg-[radial-gradient(circle_at_70%_80%,var(--bege-quente)/15%,transparent_60%)]'
          }`}
        />
        {/* Gradiente de transição superior para primeira seção */}
        {index === 0 && (
          <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-b from-[var(--bege-quente)] to-transparent" />
        )}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center ${
            !isEven ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={!isEven ? 'lg:col-start-2' : ''}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-3 sm:mb-4"
            >
              <span
                className={`text-[10px] sm:text-xs md:text-sm font-light tracking-[0.25em] uppercase ${
                  service.color === 'dourado'
                    ? 'text-[var(--dourado-fosco)]'
                    : 'text-[var(--cinza-pedra)]'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-[var(--preto-carvao)] mb-3 sm:mb-4"
            >
              {service.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-4 sm:mb-6 ${
                service.color === 'dourado'
                  ? 'text-[var(--dourado-fosco)]'
                  : 'text-[var(--cinza-pedra)]'
              }`}
            >
              {service.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sm sm:text-base md:text-lg text-[var(--cinza-pedra)] leading-relaxed mb-6 sm:mb-8"
            >
              {service.description}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-3 sm:space-y-4"
            >
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
                  className="flex items-start gap-2 sm:gap-3"
                >
                  <div
                    className={`mt-0.5 sm:mt-1 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ${
                      service.color === 'dourado'
                        ? 'bg-[var(--dourado-fosco)]/20'
                        : 'bg-[var(--bege-quente)]/40'
                    }`}
                  >
                    <Check
                      className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${
                        service.color === 'dourado'
                          ? 'text-[var(--dourado-fosco)]'
                          : 'text-[var(--cinza-pedra)]'
                      }`}
                      strokeWidth={3}
                    />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-[var(--preto-carvao)] font-light leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[var(--bege-quente)]/30 group mt-6 sm:mt-8 lg:mt-0">
              {/* Imagem */}
              <Image
                src={encodeImagePath(service.image)}
                alt={service.title}
                fill
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                unoptimized={service.image.includes(' ') || service.image.includes('copy')}
                onError={(e) => {
                  console.error('Erro ao carregar imagem:', service.image);
                }}
              />

              {/* Overlay no hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Linha decorativa sutil */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent ${
          index % 2 === 0 
            ? 'via-[var(--cinza-pedra)]/20' 
            : 'via-[var(--dourado-fosco)]/30'
        } to-transparent`}
      />
    </section>
  );
}

