'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Portfólio', href: '/portfolio' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-[var(--preto-carvao)] text-[var(--off-white)] overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,var(--dourado-fosco)/15%,transparent_60%)]" />
      </div>

      {/* Linha decorativa superior */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        {/* Conteúdo Principal - Layout Centrado */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/logowhite.png"
                  alt="GSTUDIO DESIGN Logo"
                  width={200}
                  height={70}
                  className="h-14 sm:h-16 md:h-18 w-auto object-contain"
                />
              </motion.div>
            </Link>
          </motion.div>

          {/* Descrição */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm sm:text-base text-[var(--off-white)]/60 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10"
          >
            Transformamos projetos imobiliários em experiências visuais que vendem.
          </motion.p>

          {/* Links de Navegação */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-8 sm:mb-10"
          >
            {footerLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="text-sm text-[var(--off-white)]/70 hover:text-[var(--accent)] transition-colors duration-300 relative group"
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-[var(--accent)]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 flex items-center justify-center border border-[var(--off-white)]/20 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 group cursor-pointer"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 4px 100%, 0 calc(100% - 4px))',
                }}
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-[var(--off-white)]/70 group-hover:text-[var(--accent)] transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm text-[var(--off-white)]/50 font-light"
          >
            <a
              href="mailto:contato@gstudiodesign.com"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>contato@gstudiodesign.com</span>
            </a>
            <span className="hidden sm:inline text-[var(--off-white)]/20">•</span>
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors duration-300 group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              <span>+55 11 99999-9999</span>
            </a>
          </motion.div>
        </div>

        {/* Linha Divisória */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-[var(--off-white)]/10 to-transparent mb-6 sm:mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <p className="text-xs text-[var(--off-white)]/40 font-light">
            © {currentYear} <span className="text-[var(--accent)]">GS</span>TUDIO DESIGN. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
