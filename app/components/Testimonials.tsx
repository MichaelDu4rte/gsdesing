'use client';

import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina Silva',
    role: 'Diretora de Marketing',
    company: 'E-commerce Premium',
    rating: 5,
    text: 'As visualizações 3D transformaram completamente a experiência de compra dos nossos clientes. As conversões aumentaram em 45% e as devoluções diminuíram significativamente.',
  },
  {
    id: 2,
    name: 'Roberto Mendes',
    role: 'CEO',
    company: 'Design Interiores',
    rating: 5,
    text: 'A qualidade dos modelos 3D superou todas as expectativas. Nossos clientes conseguem visualizar os produtos em seus ambientes antes mesmo de comprar.',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    role: 'Gerente de Produto',
    company: 'TechHome Solutions',
    rating: 5,
    text: 'O trabalho de digitalização foi excepcional. Os blocos SKP que recebemos são perfeitos e facilitaram muito nossa integração com o SketchUp.',
  },
  {
    id: 4,
    name: 'Carlos Eduardo',
    role: 'Fundador',
    company: 'Luxury Décor',
    rating: 5,
    text: 'As visualizações 360º dos nossos produtos são impressionantes. Nossos clientes adoram a interatividade e isso se reflete diretamente nas vendas.',
  },
  {
    id: 5,
    name: 'Juliana Santos',
    role: 'Diretora Comercial',
    company: 'HomeStyle',
    rating: 5,
    text: 'Profissionalismo, qualidade e atenção aos detalhes. As imagens de packshot que recebemos são de nível internacional.',
  },
  {
    id: 6,
    name: 'Fernando Lima',
    role: 'Diretor Criativo',
    company: 'Modern Living',
    rating: 5,
    text: 'A transformação dos nossos produtos em modelos 3D foi incrível. Aumentou significativamente o engajamento dos nossos clientes.',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--bege-quente)] overflow-hidden">
      {/* Background estático */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,var(--dourado-fosco)/12%,transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,var(--bege-quente)/18%,transparent_60%)]" />
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
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
            O que nossos clientes dizem
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-[var(--preto-carvao)] px-4"
          >
            Depoimentos{' '}
            <span className="font-normal text-[var(--dourado-fosco)]">
              Reais
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

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative z-0"
              >
                <div
                  className="relative h-full bg-gradient-to-br from-[var(--off-white)]/95 to-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 hover:border-[var(--dourado-fosco)]/50 backdrop-blur-sm p-6 sm:p-8 transition-all duration-500"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  }}
                >
                  {/* Ícone de aspas decorativo */}
                  <motion.div
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[var(--dourado-fosco)]/20 group-hover:text-[var(--dourado-fosco)]/30 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Quote className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1} />
                  </motion.div>

                  {/* Avaliação com estrelas */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-1 mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1 + 0.3 + i * 0.1,
                          type: 'spring',
                          stiffness: 300,
                        }}
                      >
                        <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[var(--dourado-fosco)] text-[var(--dourado-fosco)]" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Texto do depoimento */}
                  <motion.blockquote
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="text-sm sm:text-base md:text-lg font-light leading-relaxed text-[var(--preto-carvao)] mb-6 pr-6"
                  >
                    "{testimonial.text}"
                  </motion.blockquote>

                  {/* Informações do cliente */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                    className="flex items-center gap-3 sm:gap-4"
                  >
                    {/* Avatar */}
                    <div
                      className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center bg-[var(--bege-quente)]/60 border border-[var(--dourado-fosco)]/20 group-hover:border-[var(--dourado-fosco)]/40 transition-all duration-300"
                      style={{
                        clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                      }}
                    >
                      <User className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--dourado-fosco)]/70 group-hover:text-[var(--dourado-fosco)] transition-colors duration-300" strokeWidth={1.5} />
                    </div>

                    {/* Informações */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-light text-[var(--preto-carvao)] mb-0.5 truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs sm:text-sm font-extralight text-[var(--cinza-pedra)] truncate">
                        {testimonial.role}
                      </p>
                      <p className="text-xs font-extralight text-[var(--cinza-pedra)]/80 truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </motion.div>

                  {/* Linha decorativa inferior */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)]/30 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  />
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
