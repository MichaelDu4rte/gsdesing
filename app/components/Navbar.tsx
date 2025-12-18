'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { X } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll quando menu mobile estiver aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
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
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '/', label: 'Início', path: '/', exact: true },
    { href: '/servicos', label: 'Serviços', path: '/servicos', exact: true },
    { href: '/portfolio', label: 'Portfólio', path: '/portfolio', exact: true },
    { href: '/#contato', label: 'Contato', path: null, exact: false },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[var(--off-white)]/98 backdrop-blur-xl shadow-lg border-b border-[var(--bege-quente)]/20'
        : 'bg-black/20 backdrop-blur-md border-b border-white/10'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Image
                src={scrolled ? "/logo.png" : "/logowhite.png"}
                alt="GSTUDIO DESIGN Logo"
                width={200}
                height={70}
                className="h-12 sm:h-16 md:h-20 w-auto object-contain"
                priority
              />
            </motion.div>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => {
              const isActive = item.path
                ? (item.exact ? pathname === item.path : pathname.startsWith(item.path) && pathname !== '/')
                : false;
              return (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                  className="relative px-4 py-2 group"
                >
                  <Link
                    href={item.href}
                    className="relative block"
                  >
                    <span
                      className={`text-sm font-light tracking-[0.1em] uppercase transition-colors duration-300 relative z-10 ${isActive
                        ? 'text-[var(--dourado-fosco)]'
                        : scrolled
                          ? 'text-[var(--preto-carvao)] group-hover:text-[var(--dourado-fosco)]'
                          : 'text-[var(--off-white)]/90 group-hover:text-[var(--dourado-fosco)]'
                        }`}
                    >
                      {item.label}
                    </span>
                    <motion.div
                      className={`absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)] ${isActive ? 'w-full' : ''
                        }`}
                      initial={{ width: isActive ? '100%' : 0 }}
                      animate={{ width: isActive ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:block"
          >
            <motion.button
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(194, 162, 93, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 text-sm font-medium tracking-wider uppercase transition-all duration-300 relative overflow-hidden group ${scrolled
                ? 'bg-[var(--dourado-fosco)] text-[var(--preto-carvao)]'
                : 'bg-[var(--dourado-fosco)] text-[var(--preto-carvao)]'
                }`}
              style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
            >
              <span className="relative z-10">Orçamento</span>
              <motion.div
                className="absolute inset-0 bg-[var(--preto-carvao)]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[var(--dourado-fosco)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Orçamento
              </span>
            </motion.button>
          </motion.div>

          {/* Menu Mobile Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden relative z-50 transition-colors duration-300 ${scrolled || isMobileMenuOpen ? 'text-[var(--preto-carvao)]' : 'text-[var(--off-white)]'
              }`}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7" strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg
                    className="w-7 h-7"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300
              }}
              className="fixed top-0 right-0 h-screen w-full max-w-sm bg-[var(--off-white)] shadow-2xl z-[100] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header do Menu */}
                <div className="flex items-center justify-between p-6 border-b border-[var(--bege-quente)]/20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <span className="text-xl font-extralight tracking-[0.15em] text-[var(--preto-carvao)]">
                      <span className="font-normal text-[var(--dourado-fosco)]">GS</span>TUDIO DESIGN
                    </span>
                  </motion.div>
                  <motion.button
                    onClick={closeMobileMenu}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ rotate: 90 }}
                    transition={{ duration: 0.2 }}
                    className="text-[var(--preto-carvao)]"
                    aria-label="Fechar menu"
                  >
                    <X className="w-6 h-6" strokeWidth={1.5} />
                  </motion.button>
                </div>

                {/* Itens do Menu */}
                <nav className="flex-1 px-6 py-8">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => {
                      const isActive = item.path
                        ? (item.exact ? pathname === item.path : pathname.startsWith(item.path) && pathname !== '/')
                        : false;
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 0.15 + (index * 0.1),
                            ease: [0.16, 1, 0.3, 1]
                          }}
                          whileHover={{ x: 8 }}
                          className="relative py-4 group border-b border-[var(--bege-quente)]/10 last:border-0"
                        >
                          <Link
                            href={item.href}
                            onClick={closeMobileMenu}
                            className="block"
                          >
                            <span className={`text-lg font-light tracking-[0.1em] uppercase transition-colors duration-300 inline-block ${isActive
                              ? 'text-[var(--dourado-fosco)]'
                              : 'text-[var(--preto-carvao)] group-hover:text-[var(--dourado-fosco)]'
                              }`}>
                              {item.label}
                            </span>
                            <motion.div
                              className="absolute bottom-0 left-0 h-[1px] bg-[var(--dourado-fosco)]"
                              initial={{ width: isActive ? '100%' : 0 }}
                              animate={{ width: isActive ? '100%' : 0 }}
                              whileHover={{ width: '100%' }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="p-6 border-t border-[var(--bege-quente)]/20">
                  <motion.div
                    onClick={() => {
                      setIsModalOpen(true);
                      closeMobileMenu();
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15 + (navItems.length * 0.1),
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full px-8 py-4 bg-[var(--dourado-fosco)] text-[var(--preto-carvao)] text-sm font-medium tracking-wider uppercase text-center transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    style={{ clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))' }}
                  >
                    <span className="relative z-10">Solicitar Orçamento</span>
                    <motion.div
                      className="absolute inset-0 bg-[var(--preto-carvao)]"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[var(--dourado-fosco)] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Solicitar Orçamento
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </motion.nav>
  );
}

