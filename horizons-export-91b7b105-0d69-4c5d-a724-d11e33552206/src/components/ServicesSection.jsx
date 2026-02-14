import React from 'react';
import { motion } from 'framer-motion';
import { Search, AlertCircle, Wrench, FileText, CheckCircle, Droplets } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import { Link } from 'react-router-dom';
import WatermarkBackground from '@/components/WatermarkBackground';

const ServicesSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const services = [
    {
      id: 'bautrocknung',
      icon: Wrench,
      title: 'Bautrocknung',
      description: 'Professionelle Bautrocknung mit modernsten Geräten für schnelle Ergebnisse.',
      items: ['Neubautrocknung', 'Wandtrocknung', 'Kellertrocknung']
    },
    {
      id: 'leckortung',
      icon: Search,
      title: 'Leckortung',
      description: 'Präzise Lokalisierung von Wasserlecks mit modernster Technik.',
      items: ['Thermografie', 'Feuchtemessung', 'Druckprüfverfahren']
    },
    {
      id: 'schimmelentfernung',
      icon: AlertCircle,
      title: 'Schimmelentfernung',
      description: 'Fachgerechte Beseitigung von Schimmelpilz und Vorbeugung.',
      items: ['Schimmelanalyse', 'Schimmelsanierung', 'Präventionsberatung']
    },
    {
      id: 'estrichtrocknung',
      icon: FileText,
      title: 'Estrichtrocknung',
      description: 'Effektive Trocknung von Estrich nach Wasserschäden.',
      items: ['Überdruck-Verfahren', 'Unterdruck-Verfahren', 'Feuchtemessung']
    },
    {
      id: 'daemmschichttrocknung',
      icon: CheckCircle,
      title: 'Dämmschichttrocknung',
      description: 'Schonende Trocknung der Dämmschicht ohne Bodenabriss.',
      items: ['Randfugenöffnung', 'Kernbohrungen', 'Trocknungsüberwachung']
    },
    {
      id: 'wasserschadenbeseitigung',
      icon: Droplets,
      title: 'Wasserschadenbeseitigung',
      description: 'Komplette Sanierung nach Wasserschäden aus einer Hand.',
      items: ['Soforthilfe 24/7', 'Versicherungsabwicklung', 'Komplettsanierung']
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      <WatermarkBackground />
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Intro Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
            Unsere Expertise
          </span>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Professionelle Wasserschadensanierung in Ingolstadt und Umgebung.
          </p>
        </motion.div>

        {/* Services Grid - Jeder Service hat eigenen H2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 flex flex-col h-full relative z-20"
              >
                <div className="bg-[#e0f7fa] w-14 h-14 rounded-lg flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon className="w-7 h-7 text-[#00BCD4]" />
                </div>
                
                {/* H2 für jeden Service */}
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start">
                      <span className="text-[#00BCD4] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Link
                    to={`/leistungen#${service.id}`}
                    className="text-[#00BCD4] hover:text-[#00ACC1] font-semibold text-sm inline-flex items-center group transition-colors"
                  >
                    Mehr erfahren
                    <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;