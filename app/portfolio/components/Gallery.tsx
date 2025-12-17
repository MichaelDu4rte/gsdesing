'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn, Loader2 } from 'lucide-react';

// Array de projetos com diferentes tamanhos para criar layout harmonioso
const portfolioItems = [
  {
    id: 1,
    title: 'Residencial Premium',
    image: '/project1.jpg',
    category: 'Residencial',
    size: 'large', // 2x2
  },
  {
    id: 2,
    title: 'Corporate Tower',
    image: '/project2.jpg',
    category: 'Comercial',
    size: 'medium', // 1x1
  },
  {
    id: 3,
    title: 'Luxury Hotel',
    image: '/project3.jpg',
    category: 'Hospitalidade',
    size: 'tall', // 1x2
  },
  {
    id: 4,
    title: 'Industrial Complex',
    image: '/project4.jpg',
    category: 'Industrial',
    size: 'wide', // 2x1
  },
  {
    id: 5,
    title: 'Shopping Center',
    image: '/project5.jpg',
    category: 'Varejo',
    size: 'medium', // 1x1
  },
  {
    id: 6,
    title: 'Heritage Building',
    image: '/project6.jpg',
    category: 'Patrimonial',
    size: 'large', // 2x2
  },
  {
    id: 7,
    title: 'Residential Complex',
    image: '/project7.jpg',
    category: 'Residencial',
    size: 'tall', // 1x2
  },
  {
    id: 8,
    title: 'Business Center',
    image: '/project8.jpg',
    category: 'Comercial',
    size: 'medium', // 1x1
  },
  {
    id: 9,
    title: 'Modern Apartment',
    image: '/project1.jpg',
    category: 'Residencial',
    size: 'wide', // 2x1
  },
  {
    id: 10,
    title: 'Luxury Villa',
    image: '/project2.jpg',
    category: 'Residencial',
    size: 'medium', // 1x1
  },
  {
    id: 11,
    title: 'Office Building',
    image: '/project3.jpg',
    category: 'Comercial',
    size: 'tall', // 1x2
  },
  {
    id: 12,
    title: 'Resort Complex',
    image: '/project4.jpg',
    category: 'Hospitalidade',
    size: 'large', // 2x2
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoading, setImageLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Pré-carregar imagens em alta resolução quando o usuário passa o mouse
  const handleMouseEnter = (imageSrc: string) => {
    if (!preloadedImages.has(imageSrc)) {
      // Pré-carregar a imagem em alta resolução usando Image object
      // Isso força o navegador a baixar e cachear a imagem completa
      const img = new window.Image();
      // Usar a URL completa para garantir que seja a mesma imagem
      img.src = imageSrc;
      img.onload = () => {
        setPreloadedImages((prev) => new Set(prev).add(imageSrc));
      };
      img.onerror = () => {
        // Mesmo em caso de erro, marcar como tentado para não tentar novamente
        setPreloadedImages((prev) => new Set(prev).add(imageSrc));
      };
    }
  };

  // Verificar se a imagem já está carregada quando o modal abre
  useEffect(() => {
    if (selectedImage) {
      const item = portfolioItems.find((item) => item.id === selectedImage);
      if (item) {
        // Sempre começar com loading true
        setImageLoading(true);

        // Verificar se a imagem está no cache do navegador
        const img = new window.Image();
        img.onload = () => {
          // Imagem está no cache, pode mostrar imediatamente
          // Mas dar um pequeno delay para garantir que o DOM está pronto
          setTimeout(() => {
            setImageLoading(false);
          }, 100);
        };
        img.onerror = () => {
          // Se não está no cache, o componente Image vai carregar
          // Manter loading true até o onLoad do componente Image
        };
        img.src = item.image;
      }
    } else {
      // Reset loading state quando modal fecha
      setImageLoading(true);
    }
  }, [selectedImage]);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1 md:row-span-2';
      case 'tall':
        return 'col-span-1 row-span-1 md:row-span-2';
      case 'wide':
        return 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1';
      case 'medium':
      default:
        return 'col-span-1 row-span-1';
    }
  };

  const selectedItem = selectedImage
    ? portfolioItems.find((item) => item.id === selectedImage)
    : null;

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[var(--preto-carvao)]">
      {/* Título da Seção */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16 px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[var(--off-white)] mb-4">
          Galeria de <span className="font-normal text-[var(--accent)]">Projetos</span>
        </h2>
        <p className="text-[var(--off-white)]/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-light">
          Cada projeto é uma obra de arte, cuidadosamente renderizada para capturar
          a essência e o potencial de cada espaço
        </p>
      </motion.div>

      {/* Grid de Galeria - Ocupa toda a largura */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] auto-rows-[280px] md:auto-rows-[320px] lg:auto-rows-[350px] bg-[var(--preto-carvao)]">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative group cursor-pointer overflow-hidden bg-[var(--background)] ${getSizeClasses(
              item.size
            )}`}
            onClick={() => setSelectedImage(item.id)}
            onMouseEnter={() => handleMouseEnter(item.image)}
          >
            {/* Imagem */}
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                quality={95}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 800px, (max-width: 1920px) 1200px, 1600px"
                unoptimized={false}
                priority={index < 6}
                loading={index < 6 ? 'eager' : 'lazy'}
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Overlay dourado no hover */}
              <div className="absolute inset-0 bg-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Informações do projeto */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <div className="text-[var(--off-white)]">
                <span className="text-xs md:text-sm font-light text-[var(--accent)] uppercase tracking-wider mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-lg md:text-xl lg:text-2xl font-light mb-2">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Ícone de zoom */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-[var(--accent)]/90 backdrop-blur-sm p-2 rounded-sm">
                <ZoomIn className="w-4 h-4 md:w-5 md:h-5 text-[var(--preto-carvao)]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal de Imagem Ampliada */}
      <AnimatePresence>
        {selectedImage && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Botão fechar */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-[var(--off-white)] hover:text-[var(--accent)] transition-colors duration-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Imagem ampliada */}
              <div className="relative w-full h-full aspect-video rounded-sm overflow-hidden bg-[var(--preto-carvao)]/50">
                <AnimatePresence mode="wait">
                  {imageLoading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div className="flex flex-col items-center gap-6">
                        {/* Spinner animado */}
                        <motion.div
                          initial={{ scale: 0.8, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          transition={{
                            rotate: {
                              duration: 1.5,
                              repeat: Infinity,
                              ease: 'linear'
                            },
                            scale: {
                              duration: 0.5,
                              ease: [0.16, 1, 0.3, 1]
                            }
                          }}
                          className="relative"
                        >
                          <div className="w-16 h-16 border-4 border-[var(--preto-carvao)]/20 rounded-full" />
                          <motion.div
                            className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-[var(--accent)] rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                          />
                        </motion.div>

                        {/* Texto com animação de pulso */}
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.4 }}
                          className="text-sm text-[var(--off-white)]/70 font-light tracking-wide"
                        >
                          Carregando imagem...
                        </motion.p>

                        {/* Barra de progresso animada */}
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                          className="h-[1px] bg-[var(--accent)]/30 w-32 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-[var(--accent)]"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  {!imageLoading && (
                    <motion.div
                      key="image"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        quality={100}
                        className="object-contain"
                        sizes="90vw"
                        unoptimized={true}
                        priority
                        onLoad={() => {
                          setImageLoading(false);
                        }}
                        onLoadingComplete={() => {
                          setImageLoading(false);
                        }}
                        onError={() => {
                          setImageLoading(false);
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Informações */}
              <div className="mt-6 text-center">
                <span className="text-sm font-light text-[var(--accent)] uppercase tracking-wider mb-2 block">
                  {selectedItem.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-light text-[var(--off-white)]">
                  {selectedItem.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

