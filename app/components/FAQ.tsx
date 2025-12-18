'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import ContactModal from './ContactModal';

const faqs = [
  {
    id: 1,
    question: 'Quanto tempo leva para criar uma visualização 3D?',
    answer: 'O tempo de entrega varia conforme a complexidade do projeto. Para visualizações simples, entregamos em 3-5 dias úteis. Projetos mais complexos podem levar de 7 a 15 dias úteis. Sempre discutimos prazos durante o briefing inicial para garantir que atendemos suas necessidades.',
  },
  {
    id: 2,
    question: 'Quais formatos de arquivo vocês entregam?',
    answer: 'Entregamos em múltiplos formatos conforme sua necessidade: imagens em alta resolução (JPG, PNG), vídeos (MP4), modelos 3D (SKP, OBJ, FBX), e visualizações interativas. Também fornecemos blocos prontos para SketchUp e outras plataformas de modelagem.',
  },
  {
    id: 3,
    question: 'Vocês trabalham com projetos de e-commerce?',
    answer: 'Sim! Especializamos em visualizações 3D para e-commerce, incluindo packshots profissionais, criação de ambientes, vídeos demonstrativos 360º e digitalização de produtos. Nossos trabalhos ajudam a aumentar conversões e reduzir devoluções.',
  },
  {
    id: 4,
    question: 'Preciso fornecer plantas ou desenhos técnicos?',
    answer: 'Quanto mais informações você fornecer, melhor será o resultado final. Aceitamos plantas em PDF, desenhos técnicos, referências visuais, ou até mesmo descrições detalhadas. Nossa equipe pode trabalhar com o material que você tiver disponível.',
  },
  {
    id: 5,
    question: 'Vocês fazem revisões durante o processo?',
    answer: 'Sim! Incluímos revisões no nosso processo. Após a primeira versão, você pode solicitar ajustes e refinamentos. Trabalhamos em colaboração para garantir que o resultado final atenda exatamente às suas expectativas.',
  },
  {
    id: 6,
    question: 'Como funciona o processo de orçamento?',
    answer: 'Basta preencher nosso formulário de contato ou solicitar um orçamento. Analisamos seu projeto e enviamos uma proposta detalhada em até 24 horas. O orçamento é gratuito e sem compromisso, incluindo prazo estimado e formato de entrega.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--off-white)] overflow-hidden">
      {/* Background dinâmico */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--dourado-fosco)/12%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,var(--bege-quente)/18%,transparent_60%)]" />
      </div>

      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Perguntas Frequentes
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-tight text-[var(--preto-carvao)] px-4"
          >
            Dúvidas{' '}
            <span className="font-normal text-[var(--dourado-fosco)]">
              Frequentes
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

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative bg-gradient-to-br from-[var(--bege-quente)]/30 to-[var(--off-white)]/50 border border-[var(--bege-quente)]/40 hover:border-[var(--dourado-fosco)]/50 backdrop-blur-sm transition-all duration-500 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                  }}
                >
                  {/* Efeito de brilho no hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[var(--dourado-fosco)]/0 to-[var(--dourado-fosco)]/0 group-hover:from-[var(--dourado-fosco)]/5 group-hover:to-transparent transition-all duration-500"
                    initial={false}
                  />

                  {/* Botão da pergunta */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    type="button"
                    className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer group/button relative z-10"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      {/* Ícone */}
                      <motion.div
                        className="flex-shrink-0 mt-1"
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-[var(--dourado-fosco)]/10 group-hover/button:bg-[var(--dourado-fosco)]/20 transition-colors duration-300"
                          style={{
                            clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                          }}
                        >
                          <HelpCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--dourado-fosco)]" strokeWidth={1.5} />
                        </div>
                      </motion.div>

                      {/* Pergunta */}
                      <h3 className="text-sm sm:text-base md:text-lg font-light text-[var(--preto-carvao)] group-hover/button:text-[var(--dourado-fosco)] transition-colors duration-300 flex-1">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Ícone de seta */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--dourado-fosco)] transition-colors duration-300" strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  {/* Resposta (AnimatePresence para animação suave) */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-5 sm:pb-6 pl-[4.5rem] sm:pl-20">
                          <motion.p
                            initial={{ y: -10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -10, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-sm sm:text-base font-extralight leading-relaxed text-[var(--cinza-pedra)]"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Linha decorativa inferior */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)]/30 group-hover:bg-[var(--dourado-fosco)] transition-colors duration-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: isOpen ? '100%' : '0%' }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA no final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-sm sm:text-base font-extralight text-[var(--cinza-pedra)] mb-4">
            Ainda tem dúvidas?
          </p>
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-sm sm:text-base font-light text-[var(--dourado-fosco)] hover:text-[var(--preto-carvao)] transition-colors duration-300 cursor-pointer underline underline-offset-4 decoration-[var(--dourado-fosco)]/30 hover:decoration-[var(--dourado-fosco)]"
          >
            Entre em contato conosco
          </motion.button>
        </motion.div>
      </div>

      {/* Linha decorativa inferior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
      />

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

