import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import WatermarkBackground from '@/components/WatermarkBackground';

const AboutSection = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" ref={ref}>
      <WatermarkBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}}
            transition={{
              duration: 0.8
            }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp" alt="TrockFix Team bei der Arbeit" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#006064]/20 to-transparent"></div>
            </div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8
              }}
              animate={isInView ? {
                opacity: 1,
                scale: 1
              } : {}}
              transition={{
                delay: 0.4,
                duration: 0.6
              }}
              className="absolute -bottom-6 -right-6 bg-[#00BCD4] text-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-4xl font-bold">10+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={isInView ? {
              opacity: 1,
              x: 0
            } : {}}
            transition={{
              duration: 0.8
            }}
          >
            <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
              Über TrockFix
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
              Schnell, diskret und kompetent – seit über{' '}
              <span className="text-[#00BCD4]">10 Jahren.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Seit über einem Jahrzehnt sind wir Ihr zuverlässiger Partner für Wasserschadensanierung
              und Bautrocknung. Unser erfahrenes Team steht Ihnen rund um die Uhr zur Verfügung, um
              schnell und professionell zu helfen.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Mit modernster Technik, jahrelanger Erfahrung und einem engagierten Team sorgen wir
              dafür, dass Ihr Zuhause oder Ihr Unternehmen schnellstmöglich wieder in den
              ursprünglichen Zustand versetzt wird. Diskret, effizient und kompetent – das ist unser
              Versprechen an Sie.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;