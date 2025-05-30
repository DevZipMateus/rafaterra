
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#gallery', label: 'Projetos' },
    { href: '#contact', label: 'Contato' }
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-subtle border-b border-slate-100' 
        : 'bg-transparent'
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/327fff30-053b-4760-a994-fa5b3cb7d5c9.png" 
              alt="RAFA TERRA" 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <div className="hidden sm:block">
              <h1 className={cn(
                'text-lg md:text-xl font-bold transition-colors duration-300',
                isScrolled ? 'text-slate-900' : 'text-white'
              )}>
                RAFA TERRA
              </h1>
              <p className={cn(
                'text-xs md:text-sm transition-colors duration-300',
                isScrolled ? 'text-slate-600' : 'text-teal-100'
              )}>
                Terraplanagem e Transporte
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  'nav-link transition-colors duration-300',
                  isScrolled 
                    ? 'text-slate-700 hover:text-teal-600' 
                    : 'text-white hover:text-teal-200'
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              'md:hidden p-2 rounded-lg transition-colors duration-300',
              isScrolled 
                ? 'text-slate-700 hover:bg-slate-100' 
                : 'text-white hover:bg-white/10'
            )}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg transition-colors duration-300',
                    isScrolled 
                      ? 'text-slate-700 hover:bg-slate-100' 
                      : 'text-white hover:bg-white/10'
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
