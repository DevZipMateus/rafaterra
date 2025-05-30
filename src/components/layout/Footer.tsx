
import { Mail, MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          <div className="space-y-4">
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/327fff30-053b-4760-a994-fa5b3cb7d5c9.png" 
                  alt="RAFA TERRA" 
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <h3 className="text-xl font-bold font-display">RAFA TERRA</h3>
                  <p className="text-sm text-slate-300">TERRAPLANAGEM E TRANSPORTE</p>
                </div>
              </div>
              <p className="text-slate-300">
                Empresa com mais de 6 anos no mercado. Trabalhamos com eficiência e qualidade 
                em serviços de terraplanagem e transporte.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.instagram.com/rafa_terra.terraplanagem?igsh=MXM4MGkzeTBmOWI1eg%3D%3D" 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200" 
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/5514997137726?text=Olá,%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20de%20terraplanagem." 
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-green-600 hover:bg-green-700 transition-colors duration-200" 
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors duration-200">Início</a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors duration-200">Sobre Nós</a>
              <a href="#services" className="text-slate-300 hover:text-white transition-colors duration-200">Serviços</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors duration-200">Contato</a>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300">Avenida Comendador Daniel Pacífico</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+5514997137726" className="text-slate-300 hover:text-white transition-colors duration-200">
                  (14) 99713-7726
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:rafaelheleno433@gmail.com" className="text-slate-300 hover:text-white transition-colors duration-200 break-all">
                  rafaelheleno433@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-slate-400 text-sm text-center">
          <p>© {new Date().getFullYear()} RAFA TERRA. Todos os direitos reservados.</p>
          <p className="mt-2 italic">"Seriedade, qualidade e Comprometimento... Se Deus é por nós quem será contra nós"</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
