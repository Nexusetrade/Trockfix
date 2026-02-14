import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Settings, Shield } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCookie } from '@/contexts/CookieContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { openSettings } = useCookie();
  const navigate = useNavigate();

  const handleLinkClick = (hash) => {
     navigate(`/legal#${hash}`);
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {/* Column 1: Company Info - NAP OPTIMIERT */}
          <div className="space-y-6">
            <div>
              {/* VOLLSTÄNDIGER FIRMENNAME */}
              <h2 className="text-xl font-bold mb-2 leading-tight">
                 <span className="text-[#00BCD4]">Trockfix</span>{' '}
                 <span className="text-gray-400">Bautrocknung & Wasserschadensanierung</span>
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Ihr professioneller Partner für Bautrocknung, Wasserschadensanierung und Leckortung in Ingolstadt und Umgebung.
              </p>
            </div>

            {/* NAP - EXAKT WIE GMB */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#00BCD4] mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold">Trockfix Bautrocknung & Wasserschadensanierung</p>
                  <p>Theoderichstraße 8</p>
                  <p>85051 Ingolstadt</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a href="tel:01713498807" className="text-gray-300 text-sm hover:text-[#00BCD4] transition-colors">
                  0171 3498807
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                <a href="mailto:info@trockfix.de" className="text-gray-300 text-sm hover:text-[#00BCD4] transition-colors">
                  info@trockfix.de
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Legal Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => handleLinkClick('impressum')} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2 group w-full text-left">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#00BCD4] transition-colors"></span>
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('agb')} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2 group w-full text-left">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#00BCD4] transition-colors"></span>
                  AGB
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('datenschutz')} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2 group w-full text-left">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-[#00BCD4] transition-colors"></span>
                  Datenschutz
                </button>
              </li>
              <li className="pt-2 border-t border-gray-800 mt-2">
                <button 
                  onClick={openSettings} 
                  className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2 group w-full text-left"
                >
                  <Settings className="w-4 h-4" />
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Google Maps */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Anfahrt</h3>
            <div className="h-48 w-full rounded-lg overflow-hidden border border-gray-700 shadow-lg bg-gray-800 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.918915830953!2d11.4287413!3d48.7597985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479effa436155555%3A0x1234567890abcdef!2sTheoderichstra%C3%9Fe%208%2C%2085051%20Ingolstadt!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Trockfix Bautrocknung Ingolstadt Standort"
                className="filter grayscale-[80%] group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-2 right-2">
                <a
                  href="https://maps.google.com/?q=Theoderichstraße+8,+85051+Ingolstadt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 text-xs text-black px-2 py-1 rounded shadow hover:bg-white flex items-center gap-1 transition-transform hover:scale-105"
                >
                  In Maps öffnen <ExternalLink size={10} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <div className="md:w-1/3 text-center md:text-left">
            <p>© {currentYear} Trockfix Bautrocknung & Wasserschadensanierung. Alle Rechte vorbehalten.</p>
          </div>
          <div className="md:w-1/3 text-center flex justify-center items-center gap-2">
             <Shield className="w-4 h-4 text-[#00BCD4]" />
             <span>Sicher & DSGVO-konform</span>
          </div>
          <div className="md:w-1/3 flex justify-center md:justify-end items-center gap-2">
             <span className="text-gray-500 text-xs">Design by</span>
             <a href="https://nexusetrade.com/" target="_blank" rel="noopener noreferrer" className="inline-block transition-transform hover:scale-105">
                <img 
                   src="https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/5ec6babe9a7b0a813745468c8c95c110.png" 
                   alt="Nexus Etrade Logo" 
                   className="h-5 md:h-6 w-auto"
                />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;