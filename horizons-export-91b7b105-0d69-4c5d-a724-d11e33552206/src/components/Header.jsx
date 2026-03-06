import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Settings, Phone, Mail, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useCookie } from '@/contexts/CookieContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
    { 
      label: 'Leistungen', 
      type: 'dropdown',
      id: 'leistungen',
      subItems: [
        { label: 'Wasserschadensanierung', href: '/wasserschadensanierung' },
        { label: 'Leckortung', href: '/wasserschadensanierung/leckortung' },
        { label: 'Schimmelsanierung', href: '/wasserschadensanierung/schimmelsanierung' },
        { label: 'Bautrocknung', href: '/bautrocknung' },
        { label: 'Estrichtrocknung', href: '/bautrocknung/estrichtrocknung' },
        { label: 'Neubautrocknung', href: '/bautrocknung/neubautrocknung' },
      ]
    },
    { 
      label: 'Einzugsgebiet', 
      type: 'dropdown',
      id: 'einzugsgebiet',
      subItems: [
        { label: 'Ingolstadt Haunwöhr', href: '/einzugsgebiet/haunwoehr' },
        { label: 'Ingolstadt Kothau', href: '/einzugsgebiet/kothau' },
        { label: 'Ingolstadt Ringsee', href: '/einzugsgebiet/ringsee' },
        { label: 'Gaimersheim', href: '/einzugsgebiet/gaimersheim' },
        { label: 'Kösching', href: '/einzugsgebiet/koesching' },
        { label: 'Manching', href: '/einzugsgebiet/manching' },
        { label: 'Neuburg a.d. Donau', href: '/einzugsgebiet/neuburg-donau' },
        { label: 'Pfaffenhofen a.d. Ilm', href: '/einzugsgebiet/pfaffenhofen' },
      ]
    },
    { label: 'Über uns', href: '/#about', type: 'hash' },
    { label: 'Bewertungen', href: '/#testimonials', type: 'hash' },
    { label: 'Kontakt', href: '/#contact', type: 'hash' }
  ];

  const handleNavClick = (e, item) => {
    if (item.type === 'dropdown') return; 
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
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }\`}
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
          <ul className="hidden xl:flex items-center gap-6">
            {navItems.map((item, index) => {
              if (item.type === 'dropdown') {
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group h-full"
                    onMouseEnter={() => setActiveDropdown(item.id)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-[#00BCD4] py-2 transition-colors">
                      {item.label} <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className={\`absolute left-0 top-full pt-2 transition-all duration-300 w-56 \${activeDropdown === item.id ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}\`}>
                       <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                          {item.subItems.map((sub, i) => (
                             <Link key={i} to={sub.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00BCD4] transition-colors">
                                {sub.label}
                             </Link>
                          ))}
                       </div>
                    </div>
                  </motion.li>
                );
              }

              const isActive =
                (item.href === location.pathname) ||
                (item.type === 'hash' && location.pathname === '/' && location.hash === \`#\${item.href.split('#')[1]}\`);

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
                    className={\`text-sm font-medium transition-colors relative group py-2 \${isActive ? 'text-[#00BCD4]' : 'text-gray-700 hover:text-[#00BCD4]'
                      }\`}
                  >
                    {item.label}
                    <span className={\`absolute bottom-1 left-0 h-0.5 bg-[#00BCD4] transition-all duration-300 \${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }\`}></span>
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
            <a href="mailto:info@trockfix.de" className="hidden xl:flex items-center gap-2 text-gray-700 hover:text-[#00BCD4] transition-colors">
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
            className="xl:hidden text-gray-700 hover:text-[#00BCD4] transition-colors"
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
              className="xl:hidden overflow-hidden bg-white rounded-b-xl shadow-xl border-t border-gray-100 absolute left-0 right-0 top-full max-h-[85vh] overflow-y-auto"
            >
              <ul className="flex flex-col gap-2 p-6">
                {navItems.map((item, index) => {
                  if (item.type === 'dropdown') {
                    return (
                       <li key={index} className="py-2 border-b border-gray-50 last:border-0">
                          <div className="font-bold text-gray-900 mb-2">{item.label}</div>
                          <div className="flex flex-col gap-2 pl-4 border-l-2 border-gray-100">
                             {item.subItems.map((sub, i) => (
                               <Link key={i} to={sub.href} onClick={() => setIsMobileMenuOpen(false)} className="text-sm text-gray-600 hover:text-[#00BCD4]">
                                  {sub.label}
                               </Link>
                             ))}
                          </div>
                       </li>
                    )
                  }
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item)}
                        className="block text-gray-700 hover:text-[#00BCD4] transition-colors font-bold py-2 border-b border-gray-50 last:border-0"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  )
                })}

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