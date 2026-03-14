import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, PhoneCall, Home, Droplets, Thermometer, CheckCircle, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeubautrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Neubautrocknung Ingolstadt | Trockfix | Schneller bauen durch Trocknung</title>
        <meta name="description" content="Neubautrocknung in Ingolstadt: Trockfix beschleunigt den Trocknungsprozess Ihres Neubaus. Estrich, Putz und Beton schneller belegreif – für termingerechte Fertigstellung." />
        <link rel="canonical" href="https://trockfix.de/neubautrocknung" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#2a2a1a] to-[#1a1a0f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-amber-400 font-bold tracking-wider uppercase text-sm mb-4 block">Neubau-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Neubautrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Schneller bezugsfertig: Wir verkürzen die Trocknungszeit Ihres Neubaus um bis zu 50%.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Beratung anfordern
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Angebot anfragen
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><Home className="text-amber-500 w-6 h-6 mr-3" /><span>Neubau-optimierte Verfahren</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-amber-500 w-6 h-6 mr-3" /><span>Bis zu 50% kürzere Bauzeit</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Gauge className="text-amber-500 w-6 h-6 mr-3" /><span>CM-Messung für Belegreife</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-amber-500 pb-2 inline-block">Neubautrocknung – schneller vom Rohbau zum Einzug</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Bei jedem Neubau gelangen durch Beton, Estrich, Putz und 
              Mauerwerk enorme Mengen Wasser in die Konstruktion. Ein 
              durchschnittliches Einfamilienhaus enthält nach Fertigstellung 
              des Rohbaus bis zu <strong>10.000 Liter Restfeuchtigkeit</strong>, die 
              vor dem Innenausbau auf ein Normalmaß sinken muss.
            </p>

            <p className="mb-8">
              Ohne technische Unterstützung dauert die natürliche Trocknung 
              je nach Jahreszeit <strong>6 bis 12 Monate</strong> – und oft noch 
              länger. In dieser Zeit können keine Malerarbeiten, 
              Bodenbeläge oder Tapezierungen erfolgen, ohne Schäden 
              zu riskieren. Die Folge: Verzögerungen im Bauzeitplan 
              und höhere Finanzierungskosten.
            </p>

            <p className="mb-8">
              Mit professioneller Neubautrocknung verkürzen wir diesen 
              Zeitraum auf <strong>3 bis 6 Wochen</strong>. Durch den gezielten 
              Einsatz von Kondenstrocknern und ggf. Baubeheizung 
              schaffen wir optimale Bedingungen für die kontrollierte 
              Feuchtigkeitsabgabe. Das spart nicht nur Zeit, sondern 
              auch <strong>Finanzierungskosten</strong> – jeder Monat 
              früherer Bezug ist bares Geld wert.
            </p>

            <div className="bg-[#fffbeb] border border-[#fcd34d] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Shield className="text-amber-500 w-8 h-8 mr-3" />Vorteile der Neubautrocknung:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Clock className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" /><span><strong>Zeitersparnis:</strong> Bis zu 50% kürzere Trocknungszeit im Vergleich zur natürlichen Trocknung – Bodenbeläge und Malerarbeiten können Wochen früher beginnen.</span></li>
                <li className="flex items-start"><Droplets className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" /><span><strong>Schimmelprävention:</strong> Kontrollierter Feuchteabbau verhindert die Bildung von Schimmel in der kritischen Phase zwischen Rohbau und Innenausbau.</span></li>
                <li className="flex items-start"><Thermometer className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" /><span><strong>Optimales Raumklima:</strong> Korrekt getrocknete Räume haben von Anfang an die richtige Luftfeuchtigkeit – kein „neues-Haus-Klima" mit Kondenswasser an den Fenstern.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Ablauf der Neubautrocknung</h2>
            <p className="mb-8">So beschleunigen wir Ihren Neubau:</p>
            
            <div className="space-y-8 pl-4 border-l-4 border-amber-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Bauzeitplan-Abstimmung</h4>
                <p className="ml-6 text-gray-600">Gemeinsam mit Ihrem Bauleiter bestimmen wir den optimalen Zeitpunkt für den Start der Trocknung – idealerweise direkt nach dem Estricheinbau.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Geräteaufstellung & Beheizung</h4>
                <p className="ml-6 text-gray-600">Je nach Jahreszeit und Raumgröße stellen wir Kondenstrockner, Adsorptionstrockner und ggf. mobile Heizgeräte auf. Bei Fußbodenheizung erstellen wir ein Aufheizprotokoll.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Monitoring & Fortschrittskontrolle</h4>
                <p className="ml-6 text-gray-600">Regelmäßige Kontrollbesuche mit Feuchtigkeitsmessungen. Wir passen die Geräteanzahl und -leistung an den aktuellen Trocknungsfortschritt an.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">CM-Messung & Freigabe für Bodenbeläge</h4>
                <p className="ml-6 text-gray-600">Abschließende CM-Messung bestätigt die Belegreife des Estrichs. Das Protokoll dient als Nachweis für den Bodenleger.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Home className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Alles für Ihren Neubau</h3>
                <p className="mb-8 text-gray-300">Neben der Neubautrocknung bieten wir weitere Leistungen, die beim Hausbau relevant sind.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Neubau-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/baubeheizung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Baubeheizung</Link></li>
                      <li><Link to="/bautrocknung/bautrocknerverleih" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknerverleih</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Neubautrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ab wann kann ich den Neubau nach Estricheinbau trocknen lassen?</h3>
                <p className="text-gray-600">In der Regel 2–3 Tage nach dem Estricheinbau, wenn der Estrich begehbar ist. Bei Calciumsulfat-Estrich (Anhydrit) sollte 7 Tage gewartet werden. Bei Fußbodenheizung gilt ein spezielles Aufheizprotokoll.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kann Neubautrocknung dem Estrich schaden?</h3>
                <p className="text-gray-600">Nein, wenn sie professionell durchgeführt wird. Wir achten darauf, dass die Raumtemperatur und Luftfeuchtigkeit im optimalen Bereich bleiben. Zu schnelles oder zu heißes Trocknen kann zu Rissen führen – deshalb arbeiten wir mit kontrollierten Parametern.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie viel Geld spare ich durch Neubautrocknung?</h3>
                <p className="text-gray-600">Die Kosteneinsparung ergibt sich aus der verkürzten Bauzeit: Weniger Finanzierungskosten (Baukredit läuft kürzer), frühere Mietfreiheit oder früherer Bezug. Je nach Situation können das mehrere tausend Euro sein – die Trocknungskosten amortisieren sich oft mehrfach.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NeubautrocknungPage;
