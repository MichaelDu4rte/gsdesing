'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Package, Box, Video, Blocks } from 'lucide-react';

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

const ecommerceServices = [
  {
    id: 1,
    title: 'Imagens de Produto (Packshot)',
    image: '/CADEIRA-KIU-CARAMELO-FRENTE copy.png',
    icon: Package,
    description: 'Fotografia profissional de produtos com qualidade premium para destacar seus itens',
  },
  {
    id: 2,
    title: 'Criação de Ambientes',
    image: '/CADEIRA-LANATI-OFF-WHITE copy.png',
    icon: Box,
    description: 'Ambientes 3D realistas que contextualizam seus produtos de forma impactante',
  },
  {
    id: 3,
    title: 'Vídeos Demonstrativos',
    image: '/CADEIRA-DOBRAVEL-FRENTE copy.png',
    icon: Video,
    description: 'Vídeos profissionais que mostram seus produtos em ação e aumentam conversões',
  },
  {
    id: 4,
    title: 'Blocos SKP',
    image: '/CADEIRA-KIU-CARAMELO-COSTAS copy.png',
    icon: Blocks,
    description: 'Modelos 3D prontos para uso em plataformas de e-commerce e visualização',
  },
];

export default function EcommerceServices() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--off-white)] overflow-hidden">
      {/* Background dinâmico com padrões sutis */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--dourado-fosco)/10%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,var(--bege-quente)/15%,transparent_60%)]" />
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] sm:text-xs md:text-sm font-light tracking-[0.25em] uppercase text-[var(--cinza-pedra)] mb-3 sm:mb-4"
          >
            Serviços Especializados
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-[var(--preto-carvao)] px-4"
          >
            Serviços para{' '}
            <span className="font-normal text-[var(--dourado-fosco)]">
              E-commerce
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-[1px] bg-[var(--dourado-fosco)] mx-auto mt-4 sm:mt-6"
          />
        </motion.div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {ecommerceServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
              >
                <div className="relative h-full bg-gradient-to-br from-[var(--bege-quente)]/30 to-[var(--off-white)]/50 border border-[var(--bege-quente)]/40 hover:border-[var(--dourado-fosco)]/50 backdrop-blur-sm transition-all duration-500 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  }}
                >
                  {/* Efeito de brilho no hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--dourado-fosco)]/0 to-[var(--dourado-fosco)]/0 group-hover:from-[var(--dourado-fosco)]/5 group-hover:to-transparent transition-all duration-500 z-10"
                    initial={false}
                  />

                  {/* Container da Imagem */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bege-quente)]/20">
                    <Image
                      src={encodeImagePath(service.image)}
                      alt={service.title}
                      fill
                      quality={90}
                      className="object-contain bg-[var(--off-white)] transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      unoptimized={service.image.includes(' ') || service.image.includes('copy')}
                      onError={(e) => {
                        console.error('Erro ao carregar imagem:', service.image);
                      }}
                    />
                    
                    {/* Overlay gradiente sutil */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--preto-carvao)]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Ícone sobre a imagem */}
                    <motion.div
                      className="absolute top-4 right-4 z-20"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[var(--off-white)]/95 backdrop-blur-md rounded-sm" />
                        <Icon
                          className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 text-[var(--dourado-fosco)]"
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="relative z-10 p-4 sm:p-5 md:p-6">
                    <h3 className="text-base sm:text-lg md:text-xl font-light tracking-wide text-[var(--preto-carvao)] mb-2 sm:mb-3 group-hover:text-[var(--dourado-fosco)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-extralight leading-relaxed text-[var(--cinza-pedra)]">
                      {service.description}
                    </p>

                    {/* Linha decorativa inferior */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)]/30 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
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

