'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function EcommerceCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/project5.jpg" // Substitua pela imagem de projeto desejada
            alt="Visualização 3D para E-commerce"
            fill
            quality={90}
            className="object-cover"
            sizes="100vw"
            priority
          />
          
          {/* Overlay escuro com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--preto-carvao)]/85 via-[var(--preto-carvao)]/75 to-[var(--preto-carvao)]/80" />
          
          {/* Efeito de brilho sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--dourado-fosco)/10%,transparent_70%)]" />
          
          {/* Padrão de textura sutil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(194,162,93,0.03)_25%,rgba(194,162,93,0.03)_50%,transparent_50%,transparent_75%,rgba(194,162,93,0.03)_75%)] bg-[length:20px_20px]" />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Título */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-[var(--off-white)] mb-3 sm:mb-4 md:mb-5 px-4 leading-tight"
            >
              Visualizações{' '}
              <span className="font-normal text-[var(--dourado-fosco)]">
                3D Personalizadas
              </span>{' '}
              para seu E-commerce
            </motion.h2>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm sm:text-base md:text-lg font-extralight text-[var(--off-white)]/80 mb-4 sm:mb-5 md:mb-6 max-w-2xl mx-auto leading-relaxed px-4"
            >
              Transforme a experiência de compra dos seus clientes com visualizações 3D de alta qualidade. 
              Aumente conversões e destaque seus produtos com imagens e ambientes profissionais.
            </motion.p>

            {/* Linha decorativa */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-16 h-[1px] bg-[var(--dourado-fosco)] mx-auto mb-6 sm:mb-8"
            />

            {/* Botão CTA */}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(194, 162, 93, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[var(--dourado-fosco)] text-[var(--preto-carvao)] text-sm sm:text-base font-medium tracking-wide transition-all duration-300 overflow-hidden cursor-pointer"
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
              
              <span className="relative z-10">Transformar Meu E-commerce</span>
              <ArrowRight className="relative z-10 w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </div>

        {/* Linha decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.9, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--dourado-fosco)]/50 to-transparent z-10"
        />
      </section>

      {/* Modal de Contato */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

