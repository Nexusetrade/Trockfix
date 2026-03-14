import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, PhoneCall, AlertTriangle, CloudRain, Waves, Trash2, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HochwasserschadenPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Hochwasserschaden Ingolstadt | Trockfix | Flutschaden-Sanierung</title>
        <meta name="description" content="Hochwasserschaden in Ingolstadt und der Donau-Region? Trockfix saniert nach Überflutung und Starkregen: Kontaminiertes Wasser entfernen, trocknen, wiederherstellen. Elementarversicherung-Abwicklung." />
        <link rel="canonical" href="https://trockfix.de/hochwasserschaden" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0a1a2a] to-[#051525] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Hochwasser & Flutschäden</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Hochwasserschaden Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Nach der Flut beginnt die Sanierung. Wir entsorgen kontaminiertes Material, trocknen und bauen wieder auf.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Soforthilfe anfordern
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Beratung anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <CloudRain className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Hochwasser & Starkregen</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Trash2 className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Kontaminiertes Material entsorgen</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <FileText className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Elementarversicherung-Abwicklung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Hochwasserschäden – eine besondere Herausforderung
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Ein Hochwasserschaden unterscheidet sich grundlegend von einem 
              normalen Leitungswasserschaden. Das eindringende Wasser ist in der 
              Regel <strong>kontaminiert</strong> – es enthält Schlamm, Fäkalien, Heizöl, 
              Chemikalien und Bakterien. Dadurch entstehen nicht nur 
              Feuchtigkeitsschäden, sondern auch erhebliche <strong>Hygiene- und 
              Gesundheitsrisiken</strong>.
            </p>

            <p className="mb-8">
              Die Region Ingolstadt liegt an der <strong>Donau</strong> und ist von 
              zahlreichen Zuflüssen und Altarmen durchzogen. Zwar bieten die 
              modernen Hochwasserschutzanlagen guten Schutz, doch bei extremen 
              Starkregenereignissen können lokale Überflutungen – besonders in 
              Senken, an Bachläufen und in älteren Ortskernen – jederzeit 
              auftreten. Gerade die Donau-nahen Gebiete bei <strong>Neuburg</strong> und 
              die Niederungen um <strong>Manching</strong> sind besonders gefährdet.
            </p>

            <p className="mb-8">
              Bei der Hochwasserschaden-Sanierung ist ein anderes Vorgehen nötig 
              als bei Leitungswasserschäden: Kontaminierte Materialien wie 
              Gipskarton, Dämmung, Teppich und Holzkonstruktionen müssen 
              <strong> komplett entfernt und fachgerecht entsorgt</strong> werden. Die 
              verbleibende Bausubstanz wird desinfiziert, getrocknet und 
              anschließend wiederhergestellt. Dieser Prozess ist aufwändiger 
              und erfordert spezielle Schutzmaßnahmen.
            </p>

            <div className="bg-[#fff7ed] border border-[#fed7aa] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />
                Was bei Hochwasser anders ist:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Waves className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Kontaminiertes Wasser:</strong> Hochwasser ist kein sauberes Leitungswasser. Es enthält Schlamm, Öl und Bakterien. Betroffene Materialien können in der Regel nicht gereinigt, sondern müssen entsorgt werden.</span>
                </li>
                <li className="flex items-start">
                  <Trash2 className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Umfangreicher Rückbau:</strong> Estrich, Putz, Dämmung und Wandverkleidungen müssen oft großflächig entfernt werden, um die darunter liegende Konstruktion trocknen und desinfizieren zu können.</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Elementarversicherung nötig:</strong> Hochwasserschäden werden nicht von der normalen Gebäudeversicherung gedeckt. Nur die zusätzliche Elementarversicherung greift bei Naturereignissen.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf der Hochwasserschaden-Sanierung
            </h2>
            <p className="mb-8">
              Nach der Flut – unser Schritt-für-Schritt-Vorgehen:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-amber-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Wasser abpumpen & Schlamm entfernen</h4>
                <p className="ml-6 text-gray-600">Stehendes kontaminiertes Wasser und Schlamm werden mit Hochleistungspumpen und Saugern entfernt. Persönliche Schutzausrüstung ist Pflicht.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontaminierte Materialien entsorgen</h4>
                <p className="ml-6 text-gray-600">Nicht rettbare Baustoffe, Möbel und Einrichtungsgegenstände werden fachgerecht entsorgt. Alles wird für die Versicherung dokumentiert.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Desinfektion & Trocknung</h4>
                <p className="ml-6 text-gray-600">Die Rohbaukonstruktion wird desinfiziert und anschließend mit Industrietrocknern getrocknet – oft über mehrere Wochen, abhängig von der Durchfeuchtungstiefe.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Wiederaufbau</h4>
                <p className="ml-6 text-gray-600">Neuer Estrich, Putz, Bodenbeläge, Wandanstrich – wir koordinieren den kompletten Wiederaufbau und rechnen mit Ihrer Elementarversicherung ab.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <CloudRain className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Umfassende Hilfe nach Hochwasser
                </h3>
                <p className="mb-8 text-gray-300">
                  Hochwasserschäden erfordern oft eine Kombination mehrerer Leistungen. 
                  Von der Trocknung bis zur Geruchsbeseitigung – alles aus <strong>Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Folge-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/geruchsneutralisation" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Geruchsneutralisation</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Besonders betroffene Gebiete</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Hochwasserschaden</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Hochwasser durch die normale Gebäudeversicherung gedeckt?</h3>
                <p className="text-gray-600">Nein. Überschwemmung, Starkregen und Rückstau fallen unter die Elementarversicherung – einen optionalen Zusatzbaustein zur Gebäudeversicherung. Prüfen Sie Ihren Vertrag, ob diese Absicherung enthalten ist. Wir helfen Ihnen gerne bei der Schadensmeldung.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie gefährlich ist kontaminiertes Hochwasser?</h3>
                <p className="text-gray-600">Sehr. Hochwasser kann Fäkalien, Öl, Pestizide und Krankheitserreger enthalten. Betroffene Räume sollten nur mit Schutzausrüstung betreten werden. Lebensmittel und offene Verpackungen, die mit dem Wasser in Kontakt gekommen sind, müssen entsorgt werden.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert die Sanierung nach einem Hochwasser?</h3>
                <p className="text-gray-600">Deutlich länger als bei einem Leitungswasserschaden – in der Regel 4–12 Wochen. Grund: Der Rückbau kontaminierter Materialien, die Desinfektion und die oft tiefgreifende Durchfeuchtung erfordern einen aufwändigeren Prozess.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HochwasserschadenPage;
