import React, { createContext, useContext, useState, useEffect } from 'react';
import { CookieManager } from '@/lib/CookieManager';

const CookieContext = createContext();

export const useCookie = () => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookie must be used within a CookieProvider');
  }
  return context;
};

export const CookieProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [consent, setConsent] = useState(CookieManager.getCookieConsent());

  useEffect(() => {
    // Check if user has made a choice on mount
    if (!CookieManager.hasUserDecided()) {
       // Small delay for better UX
       setTimeout(() => setIsOpen(true), 1500);
    }

    const handleUpdate = () => {
      setConsent(CookieManager.getCookieConsent());
    };

    window.addEventListener('cookie-consent-updated', handleUpdate);
    return () => window.removeEventListener('cookie-consent-updated', handleUpdate);
  }, []);

  const openSettings = () => setIsOpen(true);
  const closeSettings = () => setIsOpen(false);

  const savePreferences = (prefs) => {
    CookieManager.setCookieConsent(prefs);
    closeSettings();
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      external: true
    });
  };
  
  const acceptNecessary = () => {
      savePreferences({
          necessary: true,
          analytics: false,
          external: false
      });
  };

  return (
    <CookieContext.Provider value={{ 
      isOpen, 
      openSettings, 
      closeSettings, 
      consent, 
      savePreferences,
      acceptAll,
      acceptNecessary
    }}>
      {children}
    </CookieContext.Provider>
  );
};