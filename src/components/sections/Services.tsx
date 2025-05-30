
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Shovel, TreePine, Mountain, Drill, Wrench } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-teal-500" />,
      title: 'Demolição',
      description: 'Serviços de demolição com equipamentos especializados e técnicas seguras para todos os tipos de estruturas.'
    },
    {
      icon: <Mountain className="h-8 w-8 text-teal-500" />,
      title: 'Terraplanagem',
      description: 'Movimentação e nivelamento de terra com equipamentos de última geração para preparação de terrenos.'
    },
    {
      icon: <TreePine className="h-8 w-8 text-teal-500" />,
      title: 'Limpeza de Terreno',
      description: 'Limpeza completa de terrenos, remoção de vegetação e preparação para construção ou plantio.'
    },
    {
      icon: <Shovel className="h-8 w-8 text-teal-500" />,
      title: 'Aterro e Desaterro',
      description: 'Serviços de aterro e desaterro para nivelamento e preparação de terrenos conforme projeto.'
    },
    {
      icon: <Drill className="h-8 w-8 text-teal-500" />,
      title: 'Abertura de Tanques',
      description: 'Escavação e abertura de tanques para diversos fins com precisão e segurança.'
    },
    {
      icon: <Truck className="h-8 w-8 text-teal-500" />,
      title: 'Transporte e Locação',
      description: 'Caminhões caçamba, mini carregadeira (Bobcat), retroescavadeira e outros equipamentos para locação.'
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="bg-slate-50 py-16 overflow-x-hidden">
      <div className="section-container">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium text-teal-600 bg-teal-100 rounded-full">
            Nossos Serviços
          </div>
          <h2 className="section-title">Soluções Completas em Terraplanagem</h2>
          <p className="section-subtitle">
            Oferecemos uma ampla gama de serviços de terraplanagem e transporte com equipamentos 
            modernos e uma equipe experiente para atender todas as suas necessidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-subtle card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4 bg-teal-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center" 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <a href="#contact" className="btn-primary">
            Solicite um Orçamento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
