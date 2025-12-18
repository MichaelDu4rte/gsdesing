'use client';

import { motion } from 'framer-motion';
import { useState, FormEvent } from 'react';
import { Mail, Phone, User, MessageSquare, Building2, Send, Check, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset após 4 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const formFields = [
    {
      name: 'name',
      label: 'Nome Completo',
      icon: User,
      type: 'text',
      placeholder: 'Seu nome',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      icon: Mail,
      type: 'email',
      placeholder: 'seu@email.com',
      required: true,
    },
    {
      name: 'phone',
      label: 'Telefone',
      icon: Phone,
      type: 'tel',
      placeholder: '(11) 99999-9999',
      required: true,
    },
    {
      name: 'company',
      label: 'Empresa (Opcional)',
      icon: Building2,
      type: 'text',
      placeholder: 'Nome da empresa',
      required: false,
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-[var(--bege-quente)] overflow-hidden">
      {/* Background dinâmico */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,var(--dourado-fosco)/15%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_70%,var(--bege-quente)/20%,transparent_60%)]" />
      </div>

      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--bege-quente)]/80 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Lado Esquerdo - Informações */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Título */}
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[10px] sm:text-xs md:text-sm font-light tracking-[0.25em] uppercase text-[var(--cinza-pedra)] mb-3 sm:mb-4"
              >
                Entre em Contato
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[var(--preto-carvao)] mb-4 sm:mb-6"
              >
                Vamos{' '}
                <span className="font-normal text-[var(--dourado-fosco)]">
                  Conversar
                </span>
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-16 h-[1px] bg-[var(--dourado-fosco)]"
              />
            </div>

            {/* Descrição */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base md:text-lg font-extralight leading-relaxed text-[var(--cinza-pedra)] max-w-lg"
            >
              Estamos prontos para transformar suas ideias em realidade. 
              Preencha o formulário ao lado e nossa equipe entrará em contato em breve.
            </motion.p>

            {/* Elementos decorativos animados */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-[var(--dourado-fosco)]/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--dourado-fosco)]" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Lado Direito - Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {/* Grid de campos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {formFields.map((field, index) => {
                    const Icon = field.icon;
                    const isFocused = focusedField === field.name;
                    
                    return (
                      <motion.div
                        key={field.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        className={`relative group ${field.name === 'company' ? 'sm:col-span-2' : ''}`}
                      >
                        <motion.label
                          className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--cinza-pedra)] mb-2 font-light"
                          animate={{
                            color: isFocused ? 'var(--dourado-fosco)' : 'var(--cinza-pedra)',
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {field.label}
                        </motion.label>
                        
                        <div className="relative">
                          <motion.div
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                            animate={{
                              scale: isFocused ? 1.1 : 1,
                              color: isFocused ? 'var(--dourado-fosco)' : 'var(--cinza-pedra)',
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                          </motion.div>
                          
                          <motion.input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name as keyof typeof formData]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.name)}
                            onBlur={() => setFocusedField(null)}
                            required={field.required}
                            className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 bg-[var(--off-white)]/80 border border-[var(--bege-quente)]/50 focus:border-[var(--dourado-fosco)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--cinza-pedra)]/40 focus:outline-none transition-all duration-300 font-light text-sm sm:text-base backdrop-blur-sm"
                            placeholder={field.placeholder}
                            whileFocus={{ scale: 1.02 }}
                          />
                          
                          {/* Linha animada no focus */}
                          <motion.div
                            className="absolute bottom-0 left-0 h-[2px] bg-[var(--dourado-fosco)]"
                            initial={{ width: 0 }}
                            animate={{ width: isFocused ? '100%' : 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                          
                          {/* Efeito de brilho no hover */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--dourado-fosco)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Campo de Mensagem */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="relative group"
                >
                  <motion.label
                    className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--cinza-pedra)] mb-2 font-light"
                    animate={{
                      color: focusedField === 'message' ? 'var(--dourado-fosco)' : 'var(--cinza-pedra)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Mensagem
                  </motion.label>
                  
                  <div className="relative">
                    <motion.div
                      className="absolute left-4 top-4 z-10"
                      animate={{
                        scale: focusedField === 'message' ? 1.1 : 1,
                        color: focusedField === 'message' ? 'var(--dourado-fosco)' : 'var(--cinza-pedra)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                    </motion.div>
                    
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-4 bg-[var(--off-white)]/80 border border-[var(--bege-quente)]/50 focus:border-[var(--dourado-fosco)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--cinza-pedra)]/40 focus:outline-none transition-all duration-300 resize-none font-light text-sm sm:text-base backdrop-blur-sm"
                      placeholder="Conte-nos sobre seu projeto..."
                      whileFocus={{ scale: 1.01 }}
                    />
                    
                    {/* Linha animada no focus */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] bg-[var(--dourado-fosco)]"
                      initial={{ width: 0 }}
                      animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </motion.div>

                {/* Botão Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="pt-2"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full px-6 sm:px-8 py-4 sm:py-5 bg-[var(--preto-carvao)] text-[var(--off-white)] text-xs sm:text-sm font-light tracking-[0.1em] uppercase overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 cursor-pointer"
                    style={{
                      clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                    }}
                  >
                    {/* Efeito de brilho no hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--dourado-fosco)]/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-[var(--off-white)] border-t-transparent rounded-full"
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.div>
              </motion.form>
            ) : (
              /* Mensagem de Sucesso */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', damping: 25, stiffness: 400 }}
                className="text-center py-12 sm:py-16 bg-[var(--off-white)]/80 backdrop-blur-sm p-8 sm:p-10"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))',
                }}
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', delay: 0.1, damping: 25, stiffness: 400 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full bg-[var(--dourado-fosco)]/10 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', damping: 25, stiffness: 400 }}
                  >
                    <Check className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--dourado-fosco)]" strokeWidth={2} />
                  </motion.div>
                </motion.div>
                
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="text-xl sm:text-2xl md:text-3xl font-light text-[var(--preto-carvao)] mb-3"
                >
                  Mensagem Enviada!
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="text-sm sm:text-base text-[var(--cinza-pedra)] font-extralight"
                >
                  Entraremos em contato em breve.
                </motion.p>
              </motion.div>
            )}
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
  );
}

