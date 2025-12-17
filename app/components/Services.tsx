'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Play, Briefcase, Settings } from 'lucide-react';

const services = [
  {
    id: 'demo',
    title: 'Agendar Demonstração',
    description: 'Veja nossos projetos em ação e descubra como podemos transformar seus imóveis',
    icon: Play,
    href: '#contato',
  },
  {
    id: 'portfolio',
    title: 'Portfólio',
    description: 'Explore nossa galeria de projetos 3D e veja a qualidade do nosso trabalho',
    icon: Briefcase,
    href: '#portfolio',
  },
  {
    id: 'services',
    title: 'Serviços',
    description: 'Conheça todos os serviços que oferecemos para o seu projeto imobiliário',
    icon: Settings,
    href: '/servicos',
  },
];

export default function Services() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-[var(--off-white)] overflow-hidden">
      {/* Background dinâmico com padrões sutis */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,var(--dourado-fosco)/8%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,var(--bege-quente)/12%,transparent_60%)]" />
      </div>

      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[10px] sm:text-xs md:text-sm font-light tracking-[0.25em] uppercase text-[var(--cinza-pedra)] mb-3 sm:mb-4"
          >
            Nossos Serviços
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-[var(--preto-carvao)] mb-4 sm:mb-6 px-4"
          >
            Transforme seus{' '}
            <span className="font-normal text-[var(--dourado-fosco)]">
              projetos
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 h-[1px] bg-[var(--dourado-fosco)] mx-auto"
          />
        </motion.div>

        {/* Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative block"
              >
                <Link href={service.href} className="block">
                  <div
                    className="relative h-full p-6 sm:p-8 md:p-10 bg-gradient-to-br from-[var(--bege-quente)]/30 to-[var(--off-white)]/50 border border-[var(--bege-quente)]/40 hover:border-[var(--dourado-fosco)]/50 backdrop-blur-sm transition-all duration-500 overflow-hidden"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                    }}
                  >
                    {/* Efeito de brilho no hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[var(--dourado-fosco)]/0 to-[var(--dourado-fosco)]/0 group-hover:from-[var(--dourado-fosco)]/5 group-hover:to-transparent transition-all duration-500"
                      initial={false}
                    />

                    {/* Ícone */}
                    <motion.div
                      className="mb-4 sm:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 bg-[var(--dourado-fosco)]/10 rounded-sm group-hover:bg-[var(--dourado-fosco)]/20 transition-colors duration-300" />
                        <Icon
                          className={`relative z-10 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[var(--dourado-fosco)] transition-transform duration-300 group-hover:scale-110`}
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.div>

                    {/* Conteúdo */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-[var(--preto-carvao)] mb-3 sm:mb-4 group-hover:text-[var(--dourado-fosco)] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base font-extralight leading-relaxed text-[var(--cinza-pedra)] mb-4 sm:mb-6">
                      {service.description}
                    </p>

                    {/* Botão de ação */}
                    <motion.div
                      className="flex items-center gap-2 text-[var(--dourado-fosco)] group-hover:gap-4 transition-all duration-300"
                      whileHover={{ x: 4 }}
                    >
                      <span className="text-xs md:text-sm font-light tracking-[0.15em] uppercase">
                        Explorar
                      </span>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.div>

                    {/* Linha decorativa inferior */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)]/30 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </Link>
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

