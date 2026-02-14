import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to not overwhelm user immediately on load
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (type) => {
    localStorage.setItem('cookieConsent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-black text-white p-4 md:p-6 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] border-t border-gray-800"
        >
          <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-4 flex-1">
              <div className="bg-gray-800 p-2 rounded-full hidden sm:block">
                <Cookie className="h-6 w-6 text-[#0084D4]" />
              </div>
              <div className="text-sm md:text-base text-gray-300 leading-relaxed">
                <p>
                  <span className="font-semibold text-white">Wir nutzen Cookies.</span> Diese Website verwendet Cookies, um Ihr Nutzungserlebnis zu verbessern und Dienste bereitzustellen. 
                  Durch die Nutzung der Website stimmen Sie der Verwendung von Cookies zu.
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto">
              <Button 
                variant="outline" 
                onClick={() => handleConsent('rejected')}
                className="flex-1 md:flex-none border-gray-600 text-gray-300 hover:text-white hover:border-gray-400 hover:bg-gray-900 transition-colors"
              >
                Ablehnen
              </Button>
              <Button 
                onClick={() => handleConsent('accepted')}
                className="flex-1 md:flex-none bg-[#0084D4] text-white hover:bg-[#006bbd] shadow-lg hover:shadow-cyan-900/20"
              >
                Akzeptieren
              </Button>
              <button 
                onClick={() => setIsVisible(false)}
                className="md:hidden p-2 text-gray-500 hover:text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;