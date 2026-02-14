import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/cfcf34f7628d9c06f8c92da6b6309d0a.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/f28fe6e31e8f53c5d6067553a5e96f4c.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/1ea6e7e1885ebf4bdea98ee3b26de527.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/ea52a4462003cf7621a562b995c97a75.png"
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // --- Slider Logic ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1 === images.length ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // --- Scroll Logic ---
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      
      {/* 1. SLIDER BACKGROUND (z-0) */}
      <div className="absolute inset-0 z-0 h-full w-full">
         <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 w-full h-full"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) nextSlide();
                else if (swipe > swipeConfidenceThreshold) prevSlide();
              }}
            >
              <img
                src={images[currentIndex]}
                alt={`Wasserschaden Sanierung Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Watermark inside slider - Updates for Logo Consistency */}
              <div className="absolute bottom-8 right-8 z-0 pointer-events-none opacity-50 hidden md:block">
                <div className="font-bold text-xl md:text-2xl tracking-wider border-2 border-white px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm flex gap-1">
                  <span className="text-[#00BCD4]">Trock</span><span className="text-white">Fix</span>
                </div>
              </div>
            </motion.div>
         </AnimatePresence>
      </div>

      {/* 2. GRADIENT OVERLAY (z-10) - Updated to more neutral dark/teal tones */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900/80 via-slate-800/75 to-[#006064]/60 pointer-events-none"></div>

      {/* 3. SLIDER CONTROLS (z-20) */}
      {/* Left Arrow */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="ghost"
          className="bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-12 h-12 border border-white/10 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
      </div>
      {/* Right Arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          onClick={nextSlide}
          size="icon"
          variant="ghost"
          className="bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-12 h-12 border border-white/10 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>

       {/* Dots Indicator (z-20) */}
       <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex === index
                ? "bg-[#00BCD4] w-6 md:w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 4. CONTENT (z-20) */}
      <div className="relative z-20 container mx-auto px-4 py-32 text-center pointer-events-none">
        <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: 'easeOut' }} 
            className="max-w-4xl mx-auto pointer-events-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2, duration: 0.8 }} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Wasserschadensanierung{' '}
            <span className="text-[#00BCD4]">in Ingolstadt</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.4, duration: 0.8 }} 
            className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            TrockFix ist Ihr zuverlässiger Partner für schnelle Bautrocknung & Sanierung in Ingolstadt und Umgebung.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ delay: 0.6, duration: 0.5 }} 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button 
                size="lg" 
                className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white text-lg px-8 py-6 rounded-lg shadow-2xl hover:shadow-[#00BCD4]/50 transition-all duration-300" 
                onClick={handleContactClick}
            >
              Jetzt kontaktieren
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator (z-20) */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }} 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ repeat: Infinity, duration: 1.5 }} 
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-white rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;