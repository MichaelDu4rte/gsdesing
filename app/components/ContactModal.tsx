'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, FormEvent, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Mail, Phone, User, MessageSquare, Building2, Send, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Bloquear scroll do body quando modal estiver aberta
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envio
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset após 3 segundos
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!mounted) return null;

  const modalContent = (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[var(--preto-carvao)]/70 backdrop-blur-sm z-[9999]"
            onClick={onClose}
          />

          {/* Modal Container - Centralizado */}
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 pointer-events-none" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 10 }}
              transition={{ 
                type: 'spring',
                damping: 30,
                stiffness: 400,
                duration: 0.5
              }}
              className="relative w-full max-w-xl bg-[var(--background-section)] pointer-events-auto max-h-[95vh] sm:max-h-none overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{ margin: 'auto' }}
            >
              {/* Header */}
              <div className="relative px-4 sm:px-6 md:px-8 py-4 sm:py-6 border-b border-[var(--bege-quente)]/20 sticky top-0 bg-[var(--background-section)] z-10">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    className="flex-1"
                  >
                    <h2 
                      className="text-xl sm:text-2xl md:text-3xl font-extralight text-[var(--preto-carvao)] leading-tight"
                      style={{ fontFamily: "var(--font-playfair), 'Georgia', serif" }}
                    >
                      Solicite seu
                      <br />
                      <span className="text-[var(--accent)] font-normal">Orçamento</span>
                    </h2>
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    whileHover={{ rotate: 90, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-[var(--preto-carvao)]/50 hover:text-[var(--accent)] transition-colors duration-300"
                    aria-label="Fechar"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  </motion.button>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-6">
                {!isSubmitted ? (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    onSubmit={handleSubmit}
                    className="space-y-3 sm:space-y-4"
                  >
                    {/* Nome */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="relative group"
                    >
                      <label className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--foreground-secondary)] mb-1 sm:mb-1.5 font-light">
                        Nome Completo
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--foreground-secondary)]/40 group-focus-within:text-[var(--accent)] transition-colors duration-300" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 focus:border-[var(--accent)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--foreground-secondary)]/40 focus:outline-none transition-all duration-300 font-light text-sm sm:text-base"
                          placeholder="Seu nome"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                          initial={{ width: 0 }}
                          whileFocus={{ width: '100%' }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </motion.div>

                    {/* Email e Telefone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25, duration: 0.3 }}
                        className="relative group"
                      >
                        <label className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--foreground-secondary)] mb-1 sm:mb-1.5 font-light">
                          Email
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--foreground-secondary)]/40 group-focus-within:text-[var(--accent)] transition-colors duration-300" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 focus:border-[var(--accent)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--foreground-secondary)]/40 focus:outline-none transition-all duration-300 font-light text-sm sm:text-base"
                            placeholder="seu@email.com"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                            initial={{ width: 0 }}
                            whileFocus={{ width: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                        className="relative group"
                      >
                        <label className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--foreground-secondary)] mb-1 sm:mb-1.5 font-light">
                          Telefone
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--foreground-secondary)]/40 group-focus-within:text-[var(--accent)] transition-colors duration-300" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 focus:border-[var(--accent)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--foreground-secondary)]/40 focus:outline-none transition-all duration-300 font-light text-sm sm:text-base"
                            placeholder="(11) 99999-9999"
                          />
                          <motion.div
                            className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                            initial={{ width: 0 }}
                            whileFocus={{ width: '100%' }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Empresa */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.3 }}
                      className="relative group"
                    >
                      <label className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--foreground-secondary)] mb-1 sm:mb-1.5 font-light">
                        Empresa (Opcional)
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--foreground-secondary)]/40 group-focus-within:text-[var(--accent)] transition-colors duration-300" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 focus:border-[var(--accent)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--foreground-secondary)]/40 focus:outline-none transition-all duration-300 font-light text-sm sm:text-base"
                          placeholder="Nome da empresa"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                          initial={{ width: 0 }}
                          whileFocus={{ width: '100%' }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </motion.div>

                    {/* Mensagem */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                      className="relative group"
                    >
                      <label className="block text-[10px] sm:text-xs uppercase tracking-[0.1em] text-[var(--foreground-secondary)] mb-1 sm:mb-1.5 font-light">
                        Mensagem
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-2.5 sm:top-3 w-3.5 h-3.5 sm:w-4 sm:h-4 text-[var(--foreground-secondary)]/40 group-focus-within:text-[var(--accent)] transition-colors duration-300" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={3}
                          className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2.5 sm:py-3 bg-[var(--bege-quente)]/40 border border-[var(--bege-quente)]/50 focus:border-[var(--accent)]/50 text-[var(--preto-carvao)] placeholder:text-[var(--foreground-secondary)]/40 focus:outline-none transition-all duration-300 resize-none font-light text-sm sm:text-base"
                          placeholder="Conte-nos sobre seu projeto..."
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 h-[1px] bg-[var(--accent)]"
                          initial={{ width: 0 }}
                          whileFocus={{ width: '100%' }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        />
                      </div>
                    </motion.div>

                    {/* Botão Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45, duration: 0.3 }}
                      className="pt-1 sm:pt-2"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full px-4 sm:px-6 py-3 sm:py-3.5 bg-[var(--preto-carvao)] text-[var(--off-white)] text-[10px] sm:text-xs font-light tracking-[0.1em] uppercase relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        style={{
                          clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))'
                        }}
                      >
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
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-[var(--accent)]"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center text-[var(--preto-carvao)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="flex items-center gap-3">
                            Enviar Mensagem
                            <Send className="w-4 h-4" />
                          </span>
                        </span>
                      </motion.button>
                    </motion.div>
                  </motion.form>
                ) : (
                  /* Mensagem de Sucesso */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                    className="text-center py-6 sm:py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.1, damping: 25, stiffness: 400 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 sm:mb-5 rounded-full bg-[var(--accent)]/10 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, type: 'spring', damping: 25, stiffness: 400 }}
                      >
                        <Check className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--accent)]" strokeWidth={2} />
                      </motion.div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.3 }}
                      className="text-lg sm:text-xl font-extralight text-[var(--preto-carvao)] mb-1.5 sm:mb-2"
                      style={{ fontFamily: "var(--font-playfair), 'Georgia', serif" }}
                    >
                      Mensagem Enviada!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="text-[10px] sm:text-xs text-[var(--foreground-secondary)] font-light"
                    >
                      Entraremos em contato em breve.
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(modalContent, document.body);
}

