import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const mediaItems = [
    {
      src: '/images/1748478043143_20230702_143015.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 1'
    },
    {
      src: '/images/1748478047024_IMG-20250528-WA0135.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 2'
    },
    {
      src: '/images/1748478047538_VID-20250528-WA0128.mp4',
      type: 'video',
      alt: 'Vídeo do projeto 1'
    },
    {
      src: '/images/1748478051330_IMG-20250528-WA0129.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 3'
    },
    {
      src: '/images/1748478051921_IMG-20250528-WA0131.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 4'
    },
    {
      src: '/images/1748478052346_VID-20250528-WA0134.mp4',
      type: 'video',
      alt: 'Vídeo do projeto 2'
    },
    {
      src: '/images/1748478055237_IMG-20250528-WA0136.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 5'
    },
    {
      src: '/images/1748478055702_IMG-20250528-WA0137.jpg',
      type: 'image',
      alt: 'Projeto de terraplanagem 6'
    }
  ];

  const openLightbox = (index: number) => {
    setSelectedMedia(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'unset';
  };

  const navigateMedia = (direction: 'prev' | 'next') => {
    if (selectedMedia === null) return;
    
    if (direction === 'prev') {
      setSelectedMedia(selectedMedia === 0 ? mediaItems.length - 1 : selectedMedia - 1);
    } else {
      setSelectedMedia(selectedMedia === mediaItems.length - 1 ? 0 : selectedMedia + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedMedia === null) return;
    
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      navigateMedia('prev');
    } else if (e.key === 'ArrowRight') {
      navigateMedia('next');
    }
  };

  useEffect(() => {
    if (selectedMedia !== null) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [selectedMedia]);

  return (
    <section ref={sectionRef} id="gallery" className="bg-white py-16 overflow-hidden">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            Nossos Projetos
          </div>
          <h2 className="section-title">Galeria de Trabalhos Realizados</h2>
          <p className="section-subtitle">
            Confira alguns dos nossos principais projetos de terraplanagem, demolição e transporte. 
            Cada trabalho é executado com excelência e comprometimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative aspect-square bg-[#03499b] rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
              onClick={() => openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3">
                      <Play className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            >
              <X className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateMedia('prev')}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <button
              onClick={() => navigateMedia('next')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <div className="max-w-4xl max-h-full flex items-center justify-center">
              {mediaItems[selectedMedia].type === 'image' ? (
                <img
                  src={mediaItems[selectedMedia].src}
                  alt={mediaItems[selectedMedia].alt}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <video
                  src={mediaItems[selectedMedia].src}
                  controls
                  autoPlay
                  className="max-w-full max-h-full"
                />
              )}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
              {selectedMedia + 1} / {mediaItems.length}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
