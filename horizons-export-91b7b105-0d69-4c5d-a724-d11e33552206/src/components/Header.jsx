import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCookie } from '@/contexts/CookieContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { openSettings } = useCookie();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Startseite', href: '/', type: 'link' },
    { label: 'Leistungen', href: '/leistungen', type: 'link' },
    { label: 'Über uns', href: '/#about', type: 'hash' },
    { label: 'Bewertungen', href: '/#testimonials', type: 'hash' },
    { label: 'Kontakt', href: '/#contact', type: 'hash' }
  ];

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.type === 'link') {
      if (item.href === '/' && location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate(item.href);
      }
    } else {
      if (location.pathname === '/') {
        const hash = item.href.split('#')[1];
        const element = document.getElementById(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        navigate(item.href);
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            onClick={(e) => handleNavClick(e, { href: '/', type: 'link' })}
            className="text-2xl font-bold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-[#00BCD4]">Trock</span>
            <span className="text-gray-600">Fix</span>
          </motion.a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => {
              const isActive =
                (item.href === location.pathname) ||
                (item.type === 'hash' && location.pathname === '/' && location.hash === `#${item.href.split('#')[1]}`);

              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`text-sm font-medium transition-colors relative group ${isActive ? 'text-[#00BCD4]' : 'text-gray-700 hover:text-[#00BCD4]'
                      }`}
                  >
                    {item.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#00BCD4] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                  </a>
                </motion.li>
              );
            })}
          </ul>

          {/* Desktop: Telefon + Email + Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:01713498807" className="flex items-center gap-2 text-gray-700 hover:text-[#00BCD4] transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">0171 3498807</span>
            </a>
            <a href="mailto:info@trockfix.de" className="flex items-center gap-2 text-gray-700 hover:text-[#00BCD4] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">info@trockfix.de</span>
            </a>
            <Button
              className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white transition-all duration-300 hover:scale-105"
              onClick={(e) => handleNavClick(e, { href: '/#contact', type: 'hash' })}
            >
              Jetzt kontaktieren
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#00BCD4] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white rounded-b-xl shadow-xl border-t border-gray-100 absolute left-0 right-0 top-full"
            >
              <ul className="flex flex-col gap-4 p-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="block text-gray-700 hover:text-[#00BCD4] transition-colors font-medium py-2 border-b border-gray-50 last:border-0"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}

                {/* Mobile Legal Link shortcuts */}
                <li className="pt-2 pb-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <a href="/legal#impressum" className="hover:text-[#00BCD4]">Impressum</a>
                    <button onClick={() => { setIsMobileMenuOpen(false); openSettings(); }} className="hover:text-[#00BCD4] flex items-center gap-1">
                      <Settings size={14} /> Cookies
                    </button>
                  </div>
                </li>

                <li className="pt-2">
                  <Button
                    className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white"
                    onClick={(e) => handleNavClick(e, { href: '/#contact', type: 'hash' })}
                  >
                    Jetzt kontaktieren
                  </Button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;