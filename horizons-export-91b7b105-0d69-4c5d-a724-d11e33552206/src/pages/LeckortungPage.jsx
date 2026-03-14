import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, MapPin, CheckCircle, PhoneCall, Search, Radio, Thermometer, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeckortungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Leckortung Ingolstadt | Trockfix | Zerstörungsfreie Lecksuche</title>
        <meta name="description" content="Präzise Leckortung in Ingolstadt mit Thermografie, Akustik und Tracergas. Trockfix findet Ihr Leck zerstörungsfrei – TÜV-zertifiziert, schnell und zuverlässig." />
        <link rel="canonical" href="https://trockfix.de/leckortung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#7C4DFF] font-bold tracking-wider uppercase text-sm mb-4 block">Präzise Messtechnik</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Leckortung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Undichte Leitung? Wir finden das Leck präzise und zerstörungsfrei – ohne Ihre Wände aufzustemmen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Leckortung beauftragen
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kostenlose Beratung
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <Search className="text-[#7C4DFF] w-6 h-6 mr-3" />
              <span>Zerstörungsfreie Ortung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Thermometer className="text-[#7C4DFF] w-6 h-6 mr-3" />
              <span>Infrarot-Thermografie</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#7C4DFF] w-6 h-6 mr-3" />
              <span>Modernste Messtechnik</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#7C4DFF] pb-2 inline-block">
              Professionelle Leckortung – das Fundament jeder Sanierung
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Feuchte Wände, unerklärlich hohe Wasserrechnungen oder Wasserflecken 
              an der Decke – all das können Hinweise auf ein verdecktes Leck in 
              Wasserleitungen, Heizungsrohren oder Abwasserleitungen sein. Das 
              Problem: Was man sieht, ist selten dort, wo das Leck tatsächlich liegt.
            </p>

            <p className="mb-8">
              Unsere Leckortung arbeitet mit einem <strong>Mehrfach-Verfahren</strong>, das die 
              Schadstelle millimetergenau lokalisiert – ganz ohne das Mauerwerk 
              großflächig aufzustemmen. Wir nutzen dafür: <strong>Infrarot-Thermografie</strong> 
              (Wärmebildkamera), <strong>akustische Korrelation</strong> (Schall-Lecksuche 
              im Rohrsystem), <strong>elektroakustische Verfahren</strong> (für drucklose 
              Leitungen) und bei Bedarf <strong>Tracergas</strong> (Formiergas), das 
              auch durch Beton und Erdreich aufsteigt und mit Sensoren detektiert wird.
            </p>

            <p className="mb-8">
              Der Vorteil für Sie: Statt ganze Wände aufzureißen, wird nur an der 
              <strong> exakten Leckstelle</strong> geöffnet. Das spart Sanierungskosten, 
              reduziert den Aufwand für die Wiederherstellung und beschleunigt den 
              gesamten Prozess erheblich. Jede Ortung wird lückenlos dokumentiert 
              und kann direkt an Ihre Versicherung weitergegeben werden.
            </p>

            <div className="bg-[#f5f3ff] border border-[#ddd6fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Eye className="text-[#7C4DFF] w-8 h-8 mr-3" />
                Unsere Ortungstechnologien im Überblick:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Thermometer className="w-6 h-6 text-[#7C4DFF] mr-3 shrink-0 mt-1" />
                  <span><strong>Infrarot-Thermografie:</strong> Die Wärmebildkamera macht Temperaturunterschiede in Wänden und Böden sichtbar – Feuchtigkeit hat eine andere Wärmesignatur als trockenes Material.</span>
                </li>
                <li className="flex items-start">
                  <Radio className="w-6 h-6 text-[#7C4DFF] mr-3 shrink-0 mt-1" />
                  <span><strong>Akustische Lecksuche:</strong> Austretende Flüssigkeit erzeugt Geräusche im Rohrsystem. Mit hochsensiblen Bodenmikrofonen und Korrelationsgeräten orten wir das Leck auf wenige Zentimeter genau.</span>
                </li>
                <li className="flex items-start">
                  <Search className="w-6 h-6 text-[#7C4DFF] mr-3 shrink-0 mt-1" />
                  <span><strong>Tracergas-Verfahren:</strong> Bei nicht druckbeaufschlagten Leitungen (z.B. Abwasser) leiten wir harmloses Formiergas ein, das an der Leckstelle austritt und mit Sensoren detektiert wird.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf einer professionellen Leckortung
            </h2>
            <p className="mb-8">
              Systematisch und zerstörungsfrei – so gehen wir vor:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#7C4DFF]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#7C4DFF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Vorgespräch & Sichtprüfung</h4>
                <p className="ml-6 text-gray-600">Wir besprechen die Symptome (Flecken, Geruch, hoher Verbrauch) und prüfen sichtbare Hinweise vor Ort. Das Rohrleitungsnetz wird analysiert.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#7C4DFF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Messtechnische Ortung</h4>
                <p className="ml-6 text-gray-600">Je nach Situation setzen wir Thermografie, Akustik, Elektroakustik oder Tracergas ein – oft in Kombination, um höchste Genauigkeit zu erzielen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#7C4DFF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Ergebnis & Dokumentation</h4>
                <p className="ml-6 text-gray-600">Sie erhalten einen detaillierten Ortungsbericht mit Fotos, Wärmebildern und exakter Positionsbestimmung – ideal für Versicherung und Handwerker.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#7C4DFF] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Empfehlung für die Sanierung</h4>
                <p className="ml-6 text-gray-600">Auf Basis der Ortung beraten wir Sie zur nächsten Maßnahme – ob Rohrreparatur, Trocknung oder Komplettsanierung. Auf Wunsch übernehmen wir auch diese Leistungen.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Search className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Leck gefunden? Wir kümmern uns um den Rest.
                </h3>
                <p className="mb-8 text-gray-300">
                  Nach der Ortung beginnt die eigentliche Arbeit: Trocknung und Sanierung. 
                  Alles aus einer Hand, direkt aus <strong>Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Anschluss-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Leckortung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wird bei der Leckortung die Wand aufgestemmt?</h3>
                <p className="text-gray-600">Nein, genau das vermeiden wir. Durch den Einsatz von Thermografie, akustischer Ortung und Tracergas können wir das Leck in den allermeisten Fällen lokalisieren, ohne Wände oder Böden zu öffnen. Erst für die Reparatur wird gezielt und minimal geöffnet.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie genau ist die Leckortung?</h3>
                <p className="text-gray-600">Mit unseren Mehrfach-Verfahren erreichen wir eine Genauigkeit von wenigen Zentimetern. Durch die Kombination verschiedener Technologien können wir auch schwierige Fälle – wie Lecks unter Estrich oder in der Fußbodenheizung – zuverlässig lösen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert eine Leckortung?</h3>
                <p className="text-gray-600">Eine Standard-Leckortung dauert in der Regel 1–3 Stunden, abhängig von der Gebäudestruktur und der Zugänglichkeit der Leitungen. In komplexen Fällen (z.B. große Gebäude, verwinkelte Rohrsysteme) kann es etwas länger dauern.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LeckortungPage;
