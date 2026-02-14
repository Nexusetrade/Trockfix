const STORAGE_KEY = 'trockfix_cookie_consent';

const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  external: false,
  timestamp: null
};

export const CookieManager = {
  getCookieConsent: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) return null;
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error reading cookie consent', e);
      return null;
    }
  },

  setCookieConsent: (preferences) => {
    try {
      const consent = {
        ...DEFAULT_CONSENT,
        ...preferences,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      
      // Dispatch event for listeners
      window.dispatchEvent(new Event('cookie-consent-updated'));
      
      return consent;
    } catch (e) {
      console.error('Error saving cookie consent', e);
      return null;
    }
  },

  shouldLoadAnalytics: () => {
    const consent = CookieManager.getCookieConsent();
    return consent?.analytics === true;
  },

  shouldLoadGoogleMaps: () => {
    const consent = CookieManager.getCookieConsent();
    return consent?.external === true;
  },
  
  hasUserDecided: () => {
     return !!localStorage.getItem(STORAGE_KEY);
  }
};