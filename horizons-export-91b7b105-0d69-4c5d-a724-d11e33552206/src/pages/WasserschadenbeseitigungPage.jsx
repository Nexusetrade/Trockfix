import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, Droplets, Wrench, PhoneCall, Waves, Trash2, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const WasserschadenbeseitigungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadenbeseitigung Ingolstadt | Trockfix | Soforthilfe & Sanierung</title>
        <meta name="description" content="Schnelle Wasserschadenbeseitigung in Ingolstadt: Wasser absaugen, trocknen, sanieren. Trockfix – Ihr Fachbetrieb für die sofortige Beseitigung von Wasserschäden aller Art." />
        <link rel="canonical" href="https://trockfix.de/wasserschadenbeseitigung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f2440] to-[#162d50] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Sofortmaßnahmen bei Wasserschäden</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadenbeseitigung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Wasser im Haus? Wir pumpen ab, trocknen und beseitigen alle Schäden – schnell und professionell.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Jetzt anrufen
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
              <Waves className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Professionelle Wasserentfernung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Komplett-Sanierung aus einer Hand</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Clock className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Schnelle Reaktionszeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Wasserschadenbeseitigung – schnelles Handeln rettet Bausubstanz
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Wenn Wasser unkontrolliert in Wohnräume eindringt, beginnt ein Wettlauf 
              gegen die Zeit. Bereits wenige Stunden nach einem Wasserschaden können 
              Holzböden aufquellen, Gipskartonwände durchweichen und sich erste 
              Schimmelsporen bilden. Die sofortige Wasserschadenbeseitigung ist daher 
              entscheidend, um Folgekosten drastisch zu reduzieren.
            </p>

            <p className="mb-8">
              Bei der Wasserschadenbeseitigung geht es nicht nur darum, sichtbares 
              Wasser zu entfernen. Das eigentliche Problem ist die Feuchtigkeit, die 
              in <strong>Estrich, Dämmschichten, Mauerwerk und Hohlräumen</strong> verbleibt. 
              Mit Industriesaugern und Tauchpumpen entfernen wir zunächst das stehende 
              Wasser. Anschließend setzen wir Hochleistungs-Trocknungsgeräte ein, die 
              auch in schwer zugänglichen Bereichen – etwa unter schwimmendem Estrich 
              oder in Wandhohlräumen – für eine vollständige Entfeuchtung sorgen.
            </p>

            <p className="mb-8">
              Ein besonderes Augenmerk legen wir auf die <strong>Rettung Ihres Inventars</strong>. 
              Möbel, Teppiche und Elektrogeräte werden gesichert und – soweit möglich – 
              getrocknet und gereinigt, statt sie sofort zu entsorgen. Das spart Kosten 
              und schont Ressourcen. Nicht mehr zu rettende Materialien entsorgen wir 
              fachgerecht und dokumentieren alles für Ihre Versicherung.
            </p>

            <div className="bg-[#f0f9ff] border border-[#bae6fd] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="text-[#00BCD4] w-8 h-8 mr-3" />
                Unsere Soforthilfe umfasst:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Waves className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Wasser absaugen & abpumpen:</strong> Mit Industriesaugern und Tauchpumpen wird das Wasser schnellstmöglich entfernt – auch aus Kellern und Kriechkellern.</span>
                </li>
                <li className="flex items-start">
                  <Trash2 className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Materialrückbau:</strong> Durchnässte Bodenbeläge, Trittschalldämmung oder Gipskarton werden gezielt entfernt, um die Trocknung der Baukonstruktion zu ermöglichen.</span>
                </li>
                <li className="flex items-start">
                  <Wind className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Technische Trocknung:</strong> Professionelle Kondenstrockner und Seitenkanalverdichter werden aufgestellt und überwacht, bis die Normfeuchtigkeit erreicht ist.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf der Wasserschadenbeseitigung
            </h2>
            <p className="mb-8">
              Unser Soforteinsatz-Protokoll stellt sicher, dass jeder Handgriff sitzt:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Notruf & Erstmaßnahmen</h4>
                <p className="ml-6 text-gray-600">Am Telefon geben wir Ihnen sofort Anweisungen: Hauptwasserhahn zudrehen, Strom im betroffenen Bereich abstellen, Wertgegenstände sichern.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Wasser absaugen & entfeuchten</h4>
                <p className="ml-6 text-gray-600">Vor Ort entfernen wir stehendes Wasser mit leistungsstarken Pumpen und starten die technische Trocknung mit passgenauen Geräten.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Schadensdokumentation & Versicherung</h4>
                <p className="ml-6 text-gray-600">Fotos, Messprotokolle und ein detaillierter Schadensbericht werden erstellt – auf Wunsch übernehmen wir die gesamte Versicherungskommunikation.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sanierung & Wiederherstellung</h4>
                <p className="ml-6 text-gray-600">Nach erfolgreicher Kontrollmessung: Estrich, Putz, Bodenbeläge und Wandanstriche – wir bringen Ihre Räume in den Ursprungszustand.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Droplets className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Weitere Leistungen rund um Wasserschäden
                </h3>
                <p className="mb-8 text-gray-300">
                  Wasserschadenbeseitigung ist oft der erste Schritt. Je nach Schadensart bieten wir 
                  spezialisierte Folgeleistungen aus unserem <strong>Standort Theoderichstraße 8, 85051 Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Verwandte Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung & Diagnose</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/geruchsneutralisation" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Geruchsneutralisation</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Lokale Einsatzgebiete</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Wasserschadenbeseitigung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell sind Sie nach meinem Anruf vor Ort?</h3>
                <p className="text-gray-600">In der Regel innerhalb von 60–90 Minuten im Raum Ingolstadt. Bei Notfällen außerhalb der Geschäftszeiten sind wir über unseren 24/7-Notdienst erreichbar und starten sofort.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können Möbel und Bodenbeläge nach einem Wasserschaden gerettet werden?</h3>
                <p className="text-gray-600">Das hängt vom Material und der Einwirkungsdauer ab. Massivholzmöbel können oft getrocknet werden, Spanplatten hingegen quellen irreversibel auf. Laminat muss meist ersetzt werden, Fliesen und Parkett können häufig gerettet werden. Wir beraten Sie ehrlich dazu.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was sollte ich tun, bevor der Fachmann kommt?</h3>
                <p className="text-gray-600">Drehen Sie den Hauptwasserhahn zu, schalten Sie den Strom im betroffenen Bereich ab (Sicherungskasten) und retten Sie Wertgegenstände aus dem Wasser. Fotografieren Sie den Schaden für die Versicherung. Versuchen Sie nicht, großflächig selbst zu trocknen – falsche Geräte können den Schaden vergrößern.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WasserschadenbeseitigungPage;
