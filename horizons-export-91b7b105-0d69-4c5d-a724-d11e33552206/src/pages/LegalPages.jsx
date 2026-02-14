import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUp, Phone, Mail, MapPin, Printer, ChevronDown, ChevronUp, Shield, Scale, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCookie } from '@/contexts/CookieContext';

const LegalPages = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('impressum');
  const { openSettings } = useCookie();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (['impressum', 'agb', 'datenschutz'].includes(hash)) {
        setActiveTab(hash);
      }
    }
    window.scrollTo(0, 0);
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => {
         setActiveTab(id);
         window.location.hash = id;
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }}
      className={`relative flex items-center gap-2 px-6 py-4 text-sm md:text-base font-medium transition-all duration-300 outline-none flex-1 justify-center md:justify-start ${
        activeTab === id 
          ? 'text-[#00BCD4] bg-white border-t-2 border-[#00BCD4] shadow-[0_-1px_10px_rgba(0,0,0,0.05)]' 
          : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50 border-t-2 border-transparent'
      }`}
    >
      <Icon className={`w-5 h-5 ${activeTab === id ? 'text-[#00BCD4]' : 'text-gray-400'}`} />
      <span>{label}</span>
    </button>
  );

  const AccordionItem = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    return (
      <div className="border border-gray-200 rounded-xl overflow-hidden mb-4 bg-white shadow-sm hover:shadow-md transition-all duration-300">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-5 text-left bg-gray-50/50 hover:bg-gray-50 transition-colors"
        >
          <span className="font-semibold text-gray-900 text-lg">{title}</span>
          {isOpen ? <ChevronUp className="text-[#00BCD4]" /> : <ChevronDown className="text-gray-400" />}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="p-5 md:p-6 prose prose-cyan max-w-none text-gray-700 leading-relaxed border-t border-gray-100">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen pt-24 pb-20 font-sans">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Navigation & Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-[#00BCD4] transition-colors group">
            <div className="bg-white p-2 rounded-full shadow-sm mr-3 group-hover:shadow-md transition-all border border-gray-100">
               <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium">Zurück zur Startseite</span>
          </Link>
          <div className="text-xs text-gray-400 font-mono bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
             Stand: 2026
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
           {/* Tabs */}
           <div className="flex flex-col md:flex-row border-b border-gray-200 bg-gray-50/80">
              <TabButton id="impressum" label="Impressum" icon={FileText} />
              <TabButton id="agb" label="AGB" icon={Scale} />
              <TabButton id="datenschutz" label="Datenschutz" icon={Shield} />
           </div>

           {/* Content Area */}
           <div className="p-6 md:p-10 bg-white min-h-[600px]">
             
             {/* IMPRESSUM */}
             {activeTab === 'impressum' && (
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-10"
               >
                 <div className="text-center md:text-left mb-10">
                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Impressum</h1>
                   <p className="text-gray-500">Angaben gemäß § 5 TMG</p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Address Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <MapPin size={100} className="text-[#00BCD4]" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <MapPin className="w-5 h-5 text-[#00BCD4] mr-2" /> Anschrift
                       </h3>
                       <p className="text-lg font-semibold text-gray-800">TrockFix GbR</p>
                       <p className="text-gray-600 mt-1">Theoderichstraße 8</p>
                       <p className="text-gray-600">85051 Ingolstadt</p>
                       <p className="text-gray-600">Deutschland</p>
                    </div>

                    {/* Contact Card */}
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Phone size={100} className="text-[#00BCD4]" />
                       </div>
                       <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                          <Phone className="w-5 h-5 text-[#00BCD4] mr-2" /> Kontakt
                       </h3>
                       <div className="space-y-4">
                          <a href="tel:01713498807" className="flex items-center text-gray-600 hover:text-[#00BCD4] transition-colors">
                             <Phone className="w-4 h-4 mr-3 text-gray-400" />
                             0171 3498807
                          </a>
                          <a href="mailto:info@trockfix.de" className="flex items-center text-gray-600 hover:text-[#00BCD4] transition-colors">
                             <Mail className="w-4 h-4 mr-3 text-gray-400" />
                             info@trockfix.de
                          </a>
                       </div>
                    </div>
                 </div>

                 <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Rechtliche Angaben</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                       <div>
                          <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Vertreten durch</span>
                          <p className="font-medium text-gray-900">Alexander Krapp</p>
                          <p className="font-medium text-gray-900">Anton Sirvatinskij</p>
                       </div>
                       <div>
                          <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Umsatzsteuer-ID</span>
                          <p className="font-medium text-gray-900">DE454744261</p>
                       </div>
                       <div>
                          <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Finanzamt</span>
                          <p className="font-medium text-gray-900">Ingolstadt</p>
                          <p className="text-sm text-gray-500">Steuernummer: 124/166/50037</p>
                       </div>
                       <div>
                          <span className="block text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Streitschlichtung</span>
                          <p className="text-sm text-gray-600 mb-2">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
                          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#00BCD4] hover:underline text-sm font-medium">
                             https://ec.europa.eu/consumers/odr
                          </a>
                       </div>
                    </div>
                 </div>
               </motion.div>
             )}

             {/* AGB */}
             {activeTab === 'agb' && (
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-6"
               >
                 <div className="mb-8">
                   <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Allgemeine Geschäftsbedingungen</h1>
                   <p className="text-gray-600">Stand: Januar 2026</p>
                 </div>
                 
                 <AccordionItem title="1. Geltungsbereich" defaultOpen={true}>
                    <p>Für alle Lieferungen und Leistungen der TrockFix GbR (nachfolgend „Auftragnehmer") an Verbraucher (§ 13 BGB) und Unternehmer (§ 14 BGB) gelten ausschließlich diese Allgemeinen Geschäftsbedingungen (AGB). Entgegenstehende oder von diesen AGB abweichende Bedingungen des Auftraggebers erkennt der Auftragnehmer nicht an, es sei denn, er hätte ausdrücklich schriftlich ihrer Geltung zugestimmt.</p>
                 </AccordionItem>
                 
                 <AccordionItem title="2. Vertragspartner">
                    <p>Der Vertrag kommt zustande mit:<br/><br/>
                    <strong>TrockFix GbR</strong><br/>
                    Theoderichstraße 8<br/>
                    85051 Ingolstadt<br/><br/>
                    Vertreten durch die Gesellschafter Alexander Krapp und Anton Sirvatinskij.</p>
                 </AccordionItem>

                 <AccordionItem title="3. Leistungsgegenstand">
                    <p>Der Auftragnehmer erbringt Dienstleistungen in den Bereichen:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li><strong>Bautrocknung:</strong> Technische Trocknung von Gebäuden und Bauteilen.</li>
                       <li><strong>Wasserschadensanierung:</strong> Maßnahmen zur Beseitigung von Wasserschäden.</li>
                       <li><strong>Leckortung:</strong> Ortung von Leckagen in wasserführenden Systemen.</li>
                    </ul>
                    <p className="mt-2">Der genaue Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der Auftragsbestätigung.</p>
                 </AccordionItem>

                 <AccordionItem title="4. Preise und Zahlungsbedingungen">
                    <p>Sofern nicht anders vereinbart, gelten die Preise gemäß dem jeweils aktuellen Angebot. Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Rechnungen sind sofort nach Erhalt ohne Abzug fällig, sofern kein anderes Zahlungsziel vereinbart wurde.</p>
                 </AccordionItem>

                 <AccordionItem title="5. Leistungsfristen und Termine">
                    <p>Leistungsfristen und Termine sind nur verbindlich, wenn sie vom Auftragnehmer schriftlich bestätigt wurden. Unvorhersehbare Ereignisse (z.B. höhere Gewalt) können die Ausführung verzögern; in diesen Fällen verlängert sich die Frist angemessen.</p>
                 </AccordionItem>

                 <AccordionItem title="6. Haftungsbeschränkungen">
                    <p>Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung beruhen. Für sonstige Schäden haftet der Auftragnehmer nur bei Vorsatz oder grober Fahrlässigkeit. Bei Verletzung wesentlicher Vertragspflichten ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
                 </AccordionItem>

                 <AccordionItem title="7. Gewährleistung">
                    <p>Es gelten die gesetzlichen Gewährleistungsrechte. Offensichtliche Mängel sind dem Auftragnehmer unverzüglich, spätestens jedoch innerhalb von zwei Wochen nach Leistungserbringung, schriftlich anzuzeigen.</p>
                 </AccordionItem>

                 <AccordionItem title="8. Widerrufsrecht für Verbraucher">
                    <p>Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (TrockFix GbR, Theoderichstraße 8, 85051 Ingolstadt, info@trockfix.de) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.</p>
                 </AccordionItem>

                 <AccordionItem title="9. Gerichtsstand und Anwendbares Recht">
                    <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, Ingolstadt.</p>
                 </AccordionItem>
               </motion.div>
             )}

             {/* DATENSCHUTZ */}
             {activeTab === 'datenschutz' && (
               <motion.div
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="space-y-6"
               >
                 <div className="mb-8 flex justify-between items-end">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Datenschutzerklärung</h1>
                      <p className="text-gray-600">Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst.</p>
                    </div>
                    <Button variant="outline" onClick={openSettings} className="hidden md:flex gap-2">
                       <Shield className="w-4 h-4" /> Cookie-Einstellungen
                    </Button>
                 </div>

                 <div className="bg-cyan-50 border border-cyan-100 p-6 rounded-xl mb-8 flex items-start gap-4">
                    <div className="bg-white p-2 rounded-full shadow-sm text-[#00BCD4]">
                       <Shield size={24} />
                    </div>
                    <div>
                       <h3 className="font-bold text-[#006064] mb-2">Verantwortliche Stelle</h3>
                       <p className="text-sm text-[#00838f]">
                          <strong>TrockFix GbR</strong><br/>
                          Theoderichstraße 8, 85051 Ingolstadt<br/>
                          Telefon: 0171 3498807<br/>
                          E-Mail: info@trockfix.de
                       </p>
                    </div>
                 </div>

                 <AccordionItem title="1. Datenerfassung auf unserer Website" defaultOpen={true}>
                    <p><strong>Wer ist verantwortlich für die Datenerfassung?</strong><br/>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                    <p><strong>Wie erfassen wir Ihre Daten?</strong><br/>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z.B. Kontaktformular). Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst (z.B. technische Daten wie Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).</p>
                 </AccordionItem>

                 <AccordionItem title="2. Server-Log-Dateien">
                    <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                    <ul className="list-disc pl-5 mt-2">
                       <li>Browsertyp und Browserversion</li>
                       <li>Verwendetes Betriebssystem</li>
                       <li>Referrer URL</li>
                       <li>Hostname des zugreifenden Rechners</li>
                       <li>Uhrzeit der Serveranfrage</li>
                       <li>IP-Adresse</li>
                    </ul>
                    <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an technischer Stabilität).</p>
                 </AccordionItem>

                 <AccordionItem title="3. Kontaktformular und E-Mail">
                    <p>Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).</p>
                 </AccordionItem>

                 <AccordionItem title="4. Cookies und Zustimmung">
                    <p>Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Wir setzen sowohl technisch notwendige Cookies als auch (mit Ihrer Einwilligung) Cookies für Analyse und externe Medien ein. Ihre Einwilligung können Sie jederzeit über die <button onClick={openSettings} className="text-[#00BCD4] underline">Cookie-Einstellungen</button> ändern.</p>
                 </AccordionItem>

                 <AccordionItem title="5. Analyse-Tools und Tools von Drittanbietern">
                    <p>Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden (z.B. Google Analytics). Das geschieht jedoch nur, wenn Sie hierzu ausdrücklich Ihre Einwilligung in unserem Cookie-Banner erteilt haben (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen.</p>
                 </AccordionItem>
                 
                 <AccordionItem title="6. Google Maps">
                    <p>Diese Seite nutzt den Kartendienst Google Maps. Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.</p>
                 </AccordionItem>

                 <AccordionItem title="7. Speicherdauer">
                    <p>Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen).</p>
                 </AccordionItem>

                 <AccordionItem title="8. Ihre Rechte">
                    <p>Sie haben jederzeit das Recht:</p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                       <li>Unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.</li>
                       <li>Die Berichtigung oder Löschung dieser Daten zu verlangen.</li>
                       <li>Die Einschränkung der Verarbeitung zu verlangen.</li>
                       <li>Widerspruch gegen die Verarbeitung einzulegen.</li>
                       <li>Datenübertragbarkeit zu verlangen.</li>
                    </ul>
                    <p className="mt-2">Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.</p>
                 </AccordionItem>
                 
                 <div className="mt-6 text-sm text-gray-500 text-center">
                    <p>Sie haben zudem das Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde.</p>
                 </div>
               </motion.div>
             )}

           </div>
        </div>

        {/* Back to Top */}
        <div className="fixed bottom-8 right-8 z-40 pointer-events-none">
           <Button
            onClick={scrollToTop}
            className="rounded-full w-12 h-12 bg-[#00BCD4] hover:bg-[#00ACC1] shadow-xl flex items-center justify-center p-0 pointer-events-auto transition-transform hover:scale-110"
            aria-label="Nach oben scrollen"
           >
             <ArrowUp className="w-6 h-6" />
           </Button>
        </div>

      </div>
    </div>
  );
};

export default LegalPages;