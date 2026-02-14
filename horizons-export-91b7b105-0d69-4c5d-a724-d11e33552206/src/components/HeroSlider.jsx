import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/cfcf34f7628d9c06f8c92da6b6309d0a.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/f28fe6e31e8f53c5d6067553a5e96f4c.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/1ea6e7e1885ebf4bdea98ee3b26de527.png",
  "https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/ea52a4462003cf7621a562b995c97a75.png"
];

// Using the same logo/watermark style as seen in similar branding, or a placeholder if exact asset URL isn't provided separately.
// Since the user asked for a watermark overlay matching the design, I'll add a subtle text/logo overlay in the corner.
// I will use a text-based watermark styled to look professional if an explicit logo URL isn't available, or reuse a known asset if possible.
// Given the context of "TrockFix", I will use a styled text overlay acting as a watermark.

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

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

  // Swipe support for touch devices
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-gray-900">
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

            if (swipe < -swipeConfidenceThreshold) {
              nextSlide();
            } else if (swipe > swipeConfidenceThreshold) {
              prevSlide();
            }
          }}
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay for better text visibility if needed, keeps consistency */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Watermark Overlay */}
          <div className="absolute bottom-8 right-8 z-20 pointer-events-none opacity-50 hidden md:block">
            <div className="text-white font-bold text-xl md:text-2xl tracking-wider border-2 border-white px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm">
              TrockFix
            </div>
          </div>
           {/* Mobile Watermark (Smaller) */}
           <div className="absolute bottom-16 right-4 z-20 pointer-events-none opacity-50 md:hidden">
            <div className="text-white font-bold text-sm tracking-wider border border-white px-2 py-1 rounded bg-black/20 backdrop-blur-sm">
              TrockFix
            </div>
          </div>

        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <Button
          onClick={prevSlide}
          size="icon"
          variant="ghost"
          className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 border border-white/10 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
        <Button
          onClick={nextSlide}
          size="icon"
          variant="ghost"
          className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 border border-white/10 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 shadow-lg ${
              currentIndex === index
                ? "bg-[#0084D4] w-6 md:w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;