import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import WatermarkBackground from '@/components/WatermarkBackground';

const TestimonialsSection = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const testimonials = [
    {
      name: 'Michael Schneider',
      image: 'https://images.unsplash.com/photo-1700227047786-8835486ba7af',
      rating: 5,
      text: 'Schnelle Reaktion, professionelle Arbeit. Das Team war sehr diskret und hat den Wasserschaden in meiner Wohnung perfekt behoben. Absolut empfehlenswert!'
    },
    {
      name: 'Sandra Weber',
      image: 'https://images.unsplash.com/photo-1696960190591-60d693f4d50d',
      rating: 5,
      text: 'TrockFix hat uns in einer schwierigen Situation geholfen. Die Kommunikation war erstklassig und die Arbeit wurde schnell und gründlich erledigt.'
    },
    {
      name: 'Thomas Klein',
      image: 'https://images.unsplash.com/photo-1493882552576-fce827c6161e',
      rating: 5,
      text: 'Hervorragende Arbeit! Die komplette Abwicklung mit der Versicherung wurde übernommen. Ich musste mich um nichts kümmern. Vielen Dank!'
    },
    {
      name: 'Julia Hoffmann',
      image: 'https://images.unsplash.com/photo-1653669486845-e9d6239380d9',
      rating: 5,
      text: 'Nach einem Rohrbruch stand ich unter Schock. TrockFix kam innerhalb kürzester Zeit und hat alles professionell geregelt. Großartiger Service!'
    },
    {
      name: 'Klaus Bauer',
      image: 'https://images.unsplash.com/photo-1657663119025-71c8cd9d6539',
      rating: 5,
      text: 'Professionelles Team mit modernster Ausrüstung. Die Leckortung war präzise und die Sanierung verlief reibungslos. Absolut zufrieden!'
    },
    {
      name: 'Andrea Schmidt',
      image: 'https://images.unsplash.com/photo-1689830641394-9215be527e44',
      rating: 5,
      text: 'Sehr kompetente Beratung und schnelle Hilfe im Notfall. Das Team hat sauber gearbeitet und alles wieder perfekt hergerichtet.'
    },
    {
      name: 'Peter Müller',
      image: 'https://images.unsplash.com/photo-1599548199555-7994a155bf54',
      rating: 5,
      text: 'Von der ersten Kontaktaufnahme bis zur finalen Abnahme alles perfekt organisiert. TrockFix ist absolut zuverlässig und professionell.'
    },
    {
      name: 'Sabine Fischer',
      image: 'https://images.unsplash.com/photo-1580662912098-0a28570b42d6',
      rating: 5,
      text: 'Nachdem wir einen Wasserschaden hatten, hat TrockFix schnell und diskret geholfen. Die Qualität der Arbeit ist ausgezeichnet!'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white relative overflow-hidden" ref={ref}>
      <WatermarkBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
            Kundenstimmen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Ihre Zufriedenheit ist unser größter Erfolg. Lesen Sie hier, was unsere Kunden über unsere
            Arbeit berichten.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 relative z-20"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover ring-2 ring-[#00BCD4]/30"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#00BCD4] text-[#00BCD4]" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;