
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/a4099a76-544c-43aa-8a7f-f02c971f2113.png')`
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-black/60"></div>
      </div>

      <div className="section-container relative z-10 flex flex-col items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-300 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-400/30">
            Mais de 6 anos no mercado
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 max-w-5xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Terraplanagem e Transporte com{' '}
          <span className="text-gradient">Qualidade e Comprometimento</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Trabalhamos com eficiência e qualidade utilizando caminhões caçamba, mini carregadeira (Bobcat), 
          retroescavadeira e muito mais para melhor atendê-los.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <p className="text-base md:text-lg font-medium text-blue-300 italic">
            "Seriedade, qualidade e Comprometimento... Se Deus é por nós quem será contra nós"
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="#contact" className="btn-primary">
            Solicitar Orçamento
          </a>
          <a href="#services" className="btn-secondary bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20">
            Conheça Nossos Serviços
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce"></div>
          </div>
          <span className="text-sm text-white/80 mt-2">Role para baixo</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
