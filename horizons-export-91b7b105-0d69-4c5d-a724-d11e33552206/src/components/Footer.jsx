import React from 'react';
import { Phone, Mail, MapPin, ExternalLink, Settings, Shield, ChevronRight, Clock } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Leistungen */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Leistungen</h3>
            <div className="space-y-6">
               <div>
                  <h4 className="text-sm font-semibold text-[#00BCD4] mb-3">Wasserschadensanierung</h4>
                  <ul className="space-y-2">
                     <li><Link to="/wasserschadensanierung/leckortung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Leckortung</Link></li>
                     <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Schimmelsanierung</Link></li>
                     <li><Link to="/wasserschadensanierung/notdienst-24h" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Notdienst 24h</Link></li>
                     <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Kellerwasserschaden</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-sm font-semibold text-[#00BCD4] mb-3">Bautrocknung</h4>
                  <ul className="space-y-2">
                     <li><Link to="/bautrocknung/estrichtrocknung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Estrichtrocknung</Link></li>
                     <li><Link to="/bautrocknung/wandtrocknung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Wandtrocknung</Link></li>
                     <li><Link to="/bautrocknung/neubautrocknung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Neubautrocknung</Link></li>
                     <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Dämmschichttrocknung</Link></li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Column 2: Einzugsgebiet */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Einzugsgebiet</h3>
            <div className="space-y-6">
               <div>
                  <h4 className="text-sm font-semibold text-[#00BCD4] mb-3">Ingolstadt Stadtteile</h4>
                  <ul className="space-y-2">
                     <li><Link to="/einzugsgebiet/haunwoehr" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Haunwöhr</Link></li>
                     <li><Link to="/einzugsgebiet/kothau" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Kothau</Link></li>
                     <li><Link to="/einzugsgebiet/ringsee" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Ringsee</Link></li>
                     <li><Link to="/einzugsgebiet/friedrichshofen" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Friedrichshofen</Link></li>
                  </ul>
               </div>
               <div>
                  <h4 className="text-sm font-semibold text-[#00BCD4] mb-3">Gesamte Region</h4>
                  <ul className="space-y-2">
                     <li><Link to="/einzugsgebiet/gaimersheim" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Gaimersheim</Link></li>
                     <li><Link to="/einzugsgebiet/koesching" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Kösching</Link></li>
                     <li><Link to="/einzugsgebiet/manching" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Manching</Link></li>
                     <li><Link to="/einzugsgebiet/neuburg-donau" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Neuburg a.d. Donau</Link></li>
                     <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center pr-2"><ChevronRight className="w-3 h-3 mr-1 text-[#00BCD4]"/> Pfaffenhofen a.d. Ilm</Link></li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Column 3: Kontakt & Rechtliches */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Kontakt</h3>
            
            <div className="space-y-4">
              <div className="text-gray-300 text-sm">
                <p className="font-semibold text-white mb-1">Trockfix Bautrocknung</p>
                <div className="flex items-start gap-2 mt-2">
                  <MapPin className="w-4 h-4 text-[#00BCD4] mt-0.5 shrink-0" />
                  <p>Theoderichstraße 8<br/>85051 Ingolstadt</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00BCD4] shrink-0" />
                <a href="tel:01713498807" className="text-gray-300 text-sm hover:text-[#00BCD4] transition-colors">
                  0171 3498807
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00BCD4] shrink-0" />
                <a href="mailto:info@trockfix.de" className="text-gray-300 text-sm hover:text-[#00BCD4] transition-colors">
                  info@trockfix.de
                </a>
              </div>

              <div className="flex items-start gap-2 pt-2">
                <Clock className="w-4 h-4 text-[#00BCD4] mt-0.5 shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-semibold text-white mb-2">Öffnungszeiten</p>
                  <table className="text-gray-300 text-sm w-full">
                     <tbody>
                        <tr><td className="py-0.5 pr-4">Montag</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Dienstag</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Mittwoch</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Donnerstag</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Freitag</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Samstag</td><td>24 Stunden geöffnet</td></tr>
                        <tr><td className="py-0.5 pr-4">Sonntag</td><td>24 Stunden geöffnet</td></tr>
                     </tbody>
                  </table>
                  <p className="mt-2 text-[#00BCD4] font-medium">Notdienst rund um die Uhr</p>
                </div>
              </div>
            </div>

            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 mt-8 inline-block">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleLinkClick('impressum')} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  Impressum
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('datenschutz')} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                  Datenschutz
                </button>
              </li>
              <li className="pt-1">
                <button onClick={openSettings} className="text-gray-400 hover:text-[#00BCD4] transition-colors text-sm flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Cookie-Einstellungen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white border-b border-gray-700 pb-2 inline-block">Standort</h3>
            <div className="h-64 w-full rounded-lg overflow-hidden border border-gray-700 shadow-lg bg-gray-800 relative group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12485.047263906066!2d11.404577!3d48.737656!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x23f4ab2e9d4d9e0f%3A0x389f83fe9d98e646!2sTrockfix%20Bautrocknung%20%26%20Wasserschadensanierung!5e1!3m2!1sde!2sde!4v1772055714601!5m2!1sde!2sde"
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
                   className="h-5 md:h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
