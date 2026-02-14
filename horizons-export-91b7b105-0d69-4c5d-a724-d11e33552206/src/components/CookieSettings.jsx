import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, BarChart, Map, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookie } from '@/contexts/CookieContext';
import { cn } from '@/lib/utils';

// Helper Switch Component if not in UI library, implemented inline for safety
const Toggle = ({ checked, onCheckedChange, disabled }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => !disabled && onCheckedChange(!checked)}
    className={cn(
      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:ring-offset-2",
      checked ? "bg-[#00BCD4]" : "bg-gray-200",
      disabled && "opacity-50 cursor-not-allowed"
    )}
  >
    <span
      className={cn(
        "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
        checked ? "translate-x-5" : "translate-x-0"
      )}
    />
  </button>
);

const CookieSettings = () => {
  const { isOpen, closeSettings, savePreferences, acceptAll, acceptNecessary, consent } = useCookie();
  const [localPrefs, setLocalPrefs] = useState({
    necessary: true,
    analytics: false,
    external: false
  });
  const [showDetails, setShowDetails] = useState(false);

  // Sync local state with global consent when opening
  useEffect(() => {
    if (isOpen && consent) {
      setLocalPrefs({
        necessary: true,
        analytics: consent.analytics,
        external: consent.external
      });
    } else if (isOpen && !consent) {
       // Defaults if no consent yet
       setLocalPrefs({
         necessary: true,
         analytics: false,
         external: false
       });
    }
  }, [isOpen, consent]);

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center pointer-events-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm pointer-events-auto"
            onClick={closeSettings}
          />

          {/* Modal */}
          <motion.div
            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex justify-between items-start bg-gradient-to-r from-gray-50 to-white">
              <div className="flex gap-4">
                <div className="bg-[#e0f7fa] p-3 rounded-full hidden sm:flex items-center justify-center">
                   <Cookie className="w-6 h-6 text-[#00BCD4]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Cookie-Einstellungen</h2>
                  <p className="text-sm text-gray-500 mt-1 max-w-sm">
                    Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Entscheiden Sie selbst, welche Cookies Sie zulassen möchten.
                  </p>
                </div>
              </div>
              <button 
                onClick={closeSettings}
                className="text-gray-400 hover:text-gray-600 transition-colors p-1"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Scroll Area */}
            <div className="overflow-y-auto p-6 space-y-6 bg-gray-50/50">
              
              {!showDetails ? (
                 <div className="space-y-4">
                    <p className="text-gray-600 text-sm leading-relaxed">
                       Wir nutzen Cookies und ähnliche Technologien, um unsere Website für Sie optimal zu gestalten. Einige sind für den Betrieb der Seite notwendig (z.B. für diese Einstellungen). Andere helfen uns, anonyme Statistiken zu erheben oder externe Medien (wie Google Maps) einzubinden.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                       <Button onClick={acceptAll} className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white flex-1 py-6 text-base font-semibold shadow-lg shadow-cyan-500/20">
                          Alle akzeptieren
                       </Button>
                       <Button onClick={acceptNecessary} variant="outline" className="flex-1 py-6 text-base font-medium border-gray-300 hover:bg-gray-100">
                          Nur notwendige
                       </Button>
                    </div>
                    <button 
                      onClick={() => setShowDetails(true)}
                      className="text-sm text-[#00BCD4] font-medium hover:underline text-center w-full block mt-2"
                    >
                      Individuelle Einstellungen vornehmen
                    </button>
                 </div>
              ) : (
                <div className="space-y-4">
                  {/* Necessary */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-4">
                     <div className="flex gap-4 items-center">
                        <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                           <div className="font-semibold text-gray-900 text-sm">Notwendig</div>
                           <div className="text-xs text-gray-500">Technisch erforderlich für den Betrieb der Seite.</div>
                        </div>
                     </div>
                     <Toggle checked={true} disabled={true} />
                  </div>

                  {/* Analytics */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-4 transition-colors hover:border-[#00BCD4]/30">
                     <div className="flex gap-4 items-center">
                        <BarChart className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                        <div>
                           <div className="font-semibold text-gray-900 text-sm">Analyse & Statistik</div>
                           <div className="text-xs text-gray-500">Helfen uns, die Website zu verbessern (anonymisiert).</div>
                        </div>
                     </div>
                     <Toggle 
                        checked={localPrefs.analytics} 
                        onCheckedChange={(checked) => setLocalPrefs(prev => ({ ...prev, analytics: checked }))} 
                     />
                  </div>

                  {/* External */}
                  <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between gap-4 transition-colors hover:border-[#00BCD4]/30">
                     <div className="flex gap-4 items-center">
                        <Map className="w-5 h-5 text-[#00BCD4] flex-shrink-0" />
                        <div>
                           <div className="font-semibold text-gray-900 text-sm">Externe Medien</div>
                           <div className="text-xs text-gray-500">Ermöglicht Google Maps und andere externe Inhalte.</div>
                        </div>
                     </div>
                     <Toggle 
                        checked={localPrefs.external} 
                        onCheckedChange={(checked) => setLocalPrefs(prev => ({ ...prev, external: checked }))} 
                     />
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions (Only shown in detail view) */}
            {showDetails && (
               <div className="p-6 border-t border-gray-100 bg-white flex flex-col-reverse sm:flex-row justify-between gap-4">
                  <Button 
                    variant="ghost" 
                    onClick={() => setShowDetails(false)}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    Zurück
                  </Button>
                  <div className="flex gap-3 w-full sm:w-auto">
                     <Button 
                        onClick={acceptAll} 
                        variant="outline"
                        className="flex-1 sm:flex-none border-gray-300"
                     >
                        Alle akzeptieren
                     </Button>
                     <Button 
                        onClick={handleSave}
                        className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white flex-1 sm:flex-none"
                     >
                        <Check className="w-4 h-4 mr-2" />
                        Auswahl speichern
                     </Button>
                  </div>
               </div>
            )}
            
            {/* Legal Links Mini */}
            <div className="px-6 pb-2 text-center">
               <div className="text-[10px] text-gray-400 flex justify-center gap-4">
                  <a href="/legal#impressum" onClick={closeSettings} className="hover:text-gray-600 hover:underline">Impressum</a>
                  <a href="/legal#datenschutz" onClick={closeSettings} className="hover:text-gray-600 hover:underline">Datenschutz</a>
               </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CookieSettings;