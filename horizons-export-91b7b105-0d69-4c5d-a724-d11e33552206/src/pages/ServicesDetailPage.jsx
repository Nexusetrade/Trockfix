import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import WatermarkBackground from '@/components/WatermarkBackground';

const ServicesDetailPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling with a slight delay to ensure DOM is ready
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const offset = 100; // Offset for sticky header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 300);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const categories = [
    {
      id: 'leckortung',
      title: 'LECKORTUNG',
      description: 'Unsere Spezialisten finden jedes Leck – zerstörungsarm und präzise mit modernster Messtechnik.',
      colors: { bg: '#eaf4ff', heading: '#0077cc' },
      cards: [
        { title: 'Thermografie', desc: 'Sichtbarmachung von Temperaturunterschieden zur präzisen Lokalisierung von Leitungsverläufen und Leckagen.' },
        { title: 'Feuchtemessung', desc: 'Professionelle Messung der Materialfeuchte zur Eingrenzung des Schadensbereichs.' },
        { title: 'Druckprüfung', desc: 'Überprüfung von Rohrleitungen auf Dichtigkeit mittels Druckverlustmessung.' }
      ]
    },
    {
      id: 'schadensanalyse',
      title: 'SCHADENSANALYSE',
      description: 'Eine fundierte Analyse ist der erste Schritt zur erfolgreichen Sanierung. Wir dokumentieren alles lückenlos.',
      colors: { bg: '#f0f8f5', heading: '#009688' },
      cards: [
        { title: 'Schadensgutachten', desc: 'Detaillierte Aufnahme und Bewertung des Schadens für Versicherungen und Eigentümer.' },
        { title: 'Kostenvoranschlag', desc: 'Transparente und faire Kostenkalkulation für alle notwendigen Sanierungsmaßnahmen.' },
        { title: 'Feuchtemessung', desc: 'Tiefenmessungen zur Bestimmung des genauen Durchfeuchtungsgrades der Bausubstanz.' }
      ]
    },
    {
      id: 'schadensanierung',
      title: 'SCHADENSANIERUNG',
      description: 'Schnelle und effektive Trocknung sowie Sanierung, um Folgeschäden zu vermeiden und Wohnqualität zu sichern.',
      colors: { bg: '#fff3e6', heading: '#ff8800' },
      cards: [
        { title: 'Bautrocknung', desc: 'Einsatz leistungsstarker Kondenstrockner zur schnellen Entfeuchtung von Räumen.' },
        { title: 'Schimmelentfernung', desc: 'Fachgerechte Beseitigung von Schimmelpilzbefall und Desinfektion der betroffenen Flächen.' },
        { title: 'Gebäudesanierung', desc: 'Komplette Sanierung der beschädigten Bausubstanz nach Wasserschäden.' }
      ]
    },
    {
      id: 'versicherungsabwicklung',
      title: 'VERSICHERUNGSABWICKLUNG',
      description: 'Wir nehmen Ihnen den bürokratischen Aufwand ab und kommunizieren direkt mit Ihrer Versicherung.',
      colors: { bg: '#eef1ff', heading: '#4455cc' },
      cards: [
        { title: 'Schadensdokumentation', desc: 'Lückenlose Fotodokumentation und Berichterstellung für die Versicherung.' },
        { title: 'Versicherungskontakt', desc: 'Direkte Kommunikation und Klärung aller technischen Fragen mit dem Versicherer.' },
        { title: 'Direktabrechnung', desc: 'Bequeme Abrechnung der Sanierungskosten direkt mit Ihrer Versicherung.' }
      ]
    },
    {
      id: 'wiederherstellung',
      title: 'WIEDERHERSTELLUNG',
      description: 'Der letzte Schritt: Wir stellen den Originalzustand wieder her, damit Sie sich wieder wohlfühlen.',
      colors: { bg: '#f1fff2', heading: '#2e8b57' },
      cards: [
        { title: 'Malerarbeiten', desc: 'Professionelle Streich- und Tapezierarbeiten für Wände und Decken.' },
        { title: 'Bodenverlegung', desc: 'Verlegung neuer Bodenbeläge wie Parkett, Laminat, Vinyl oder Fliesen.' },
        { title: 'Abschlussreinigung', desc: 'Gründliche Feinreinigung aller sanierten Bereiche vor der Übergabe.' }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20 relative overflow-hidden">
      <WatermarkBackground />
      <div className="max-w-[1100px] mx-auto px-5 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Unsere Leistungen im Detail
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Professionelle Lösungen für jeden Schritt der Wasserschadensanierung.
          </motion.p>
        </div>

        {categories.map((cat, index) => (
          <motion.section 
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 last:mb-0 scroll-mt-28"
          >
            {/* Hero Section */}
            <div 
              className="rounded-xl p-8 md:p-10 mb-8 shadow-sm transition-colors duration-300 relative overflow-hidden"
              style={{ backgroundColor: cat.colors.bg }}
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between relative z-10">
                <div>
                  <h2 
                    className="text-2xl md:text-3xl font-bold mb-3 tracking-tight"
                    style={{ color: cat.colors.heading }}
                  >
                    {cat.title}
                  </h2>
                  <p className="text-gray-700 text-lg max-w-3xl leading-relaxed">
                    {cat.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <div 
                    className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm"
                  >
                    <ArrowRight size={24} style={{ color: cat.colors.heading }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {cat.cards.map((card, cardIndex) => (
                <motion.div
                  key={cardIndex}
                  whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col h-full transition-all duration-300 relative z-10"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle2 size={24} style={{ color: cat.colors.heading }} className="flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-9">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* CTA */}
        <div className="mt-20 text-center relative z-10">
          <Link 
            to="/#contact" 
            className="inline-block bg-[#0084D4] text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-[#006bbd] hover:scale-105 transition-all duration-300"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetailPage;