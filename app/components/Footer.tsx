'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: 'Sobre', href: '/#sobre' },
      { label: 'Serviços', href: '/servicos' },
      { label: 'Portfólio', href: '/portfolio' },
    ],
    contato: [
      { label: 'Orçamento', href: '/#contato' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-[var(--preto-carvao)] text-[var(--off-white)]">
      {/* Linha decorativa superior */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Logo e Descrição */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src="/logo.png"
                  alt="GSTUDIO DESIGN Logo"
                  width={150}
                  height={50}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </motion.div>
            </Link>
            <p className="text-sm text-[var(--off-white)]/70 font-light leading-relaxed max-w-md mb-6">
              Transformamos projetos imobiliários em experiências visuais 
              que vendem. Visualizações 3D fotorrealistas para o seu negócio.
            </p>
            
            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--off-white)]/20 rounded-sm hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-[var(--off-white)]/70 group-hover:text-[var(--accent)] transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-light tracking-[0.15em] uppercase text-[var(--off-white)]/50 mb-6">
              Empresa
            </h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--off-white)]/70 hover:text-[var(--accent)] transition-colors duration-300 inline-block group"
                  >
                    {link.label}
                    <motion.div
                      className="h-[1px] bg-[var(--accent)] mt-0.5"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Links Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-light tracking-[0.15em] uppercase text-[var(--off-white)]/50 mb-6">
              Contato
            </h3>
            <ul className="space-y-3">
              {footerLinks.contato.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm text-[var(--off-white)]/70 hover:text-[var(--accent)] transition-colors duration-300 inline-block group text-left"
                  >
                    {link.label}
                    <motion.div
                      className="h-[1px] bg-[var(--accent)] mt-0.5"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Informações de Contato */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-[var(--off-white)]/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 text-sm text-[var(--off-white)]/60 font-light">
              <a
                href="mailto:contato@gstudiodesign.com"
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors duration-300 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>contato@gstudiodesign.com</span>
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors duration-300 group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+55 11 99999-9999</span>
              </a>
            </div>
            <p className="text-xs text-[var(--off-white)]/50 font-light">
              © {currentYear} <span className="text-[var(--accent)]">GS</span>TUDIO DESIGN. Todos os direitos reservados.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}

