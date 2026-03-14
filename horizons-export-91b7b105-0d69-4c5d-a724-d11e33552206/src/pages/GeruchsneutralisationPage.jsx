import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, PhoneCall, Wind, Sparkles, Zap, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const GeruchsneutralisationPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Geruchsneutralisation Ingolstadt | Trockfix | Geruchsbeseitigung nach Wasserschaden</title>
        <meta name="description" content="Unangenehme Gerüche nach Wasserschaden? Trockfix neutralisiert Gerüche professionell mit Ozon- und Hydroxyl-Technik in Ingolstadt. Nachhaltige Beseitigung statt Überdeckung." />
        <link rel="canonical" href="https://trockfix.de/geruchsneutralisation" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2a2a] to-[#0f1f1f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-teal-400 font-bold tracking-wider uppercase text-sm mb-4 block">Frische Raumluft garantiert</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Geruchsneutralisation Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Modrige Gerüche nach Wasserschaden? Wir neutralisieren die Ursache – nicht nur das Symptom.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Beratung anfordern
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kostenlose Erstberatung
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <Wind className="text-teal-500 w-6 h-6 mr-3" />
              <span>Professionelle Ozontechnik</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Sparkles className="text-teal-500 w-6 h-6 mr-3" />
              <span>Neutralisierung statt Überdeckung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Leaf className="text-teal-500 w-6 h-6 mr-3" />
              <span>Rückstandsfreie Verfahren</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-teal-500 pb-2 inline-block">
              Gerüche nach Wasserschäden – hartnäckig, aber lösbar
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Auch nachdem das Wasser entfernt und die Trocknung abgeschlossen 
              ist, bleibt oft ein <strong>modriger, muffiger Geruch</strong> zurück. 
              Dieser Geruch entsteht durch Bakterien, Pilzsporen und 
              Zersetzungsprozesse in organischen Materialien, die mit dem 
              Wasser in Kontakt gekommen sind – und er lässt sich mit 
              herkömmlichen Mitteln wie Lüften oder Raumspray nicht beseitigen.
            </p>

            <p className="mb-8">
              Die professionelle Geruchsneutralisation setzt genau dort an, 
              wo Hausmittel versagen. Wir verwenden zwei bewährte Verfahren: 
              <strong>Ozonbehandlung</strong> und <strong>Hydroxyl-Generatoren</strong>. Beide 
              zerstören die geruchsverursachenden Moleküle auf chemischer 
              Ebene, statt sie nur zu überdecken. Das Ergebnis: Die Raumluft 
              ist danach tatsächlich geruchsneutral – nicht parfümiert.
            </p>

            <p className="mb-8">
              Besonders häufig benötigen Kunden nach <strong>Hochwasserschäden</strong>, 
              <strong> Kellerwasserschäden</strong> oder bei <strong>verdecktem Schimmelbefall</strong> 
              eine Geruchsneutralisation. Auch nach Bränden, Tierhaltung oder 
              Tabakrauch setzen wir diese Technik erfolgreich ein. Die Behandlung 
              kann in bewohnten und unbewohnten Räumen durchgeführt werden – 
              abhängig vom gewählten Verfahren.
            </p>

            <div className="bg-[#f0fdfa] border border-[#99f6e4] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Sparkles className="text-teal-500 w-8 h-8 mr-3" />
                Unsere Neutralisationsverfahren:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Ozonbehandlung:</strong> Ozongeneratoren erzeugen hochreaktives O₃, das Geruchsmoleküle, Bakterien und Schimmelsporen oxidiert und zerstört. Die Räume müssen während der Behandlung unbetreten bleiben.</span>
                </li>
                <li className="flex items-start">
                  <Wind className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Hydroxyl-Generatoren:</strong> Erzeugen Hydroxyl-Radikale (OH·), die Gerüche in bewohnten Räumen neutralisieren können. Sicher für Personen, Haustiere und Pflanzen – ideal für Wohnungen.</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="w-6 h-6 text-teal-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Rückstandsfrei:</strong> Beide Verfahren hinterlassen keine chemischen Rückstände. Nach dem Lüften (bei Ozon) bzw. direkt (bei Hydroxyl) ist der Raum sofort nutzbar.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf der Geruchsneutralisation
            </h2>
            <p className="mb-8">
              Systematisch zum sauberen Raumklima:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-teal-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Geruchsquelle identifizieren</h4>
                <p className="ml-6 text-gray-600">Nicht jeder Geruch hat dieselbe Ursache. Wir prüfen, ob der Geruch von Restfeuchte, Schimmel, Bakterienzerfall oder externen Quellen stammt.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Ursache beseitigen</h4>
                <p className="ml-6 text-gray-600">Falls die Geruchsquelle noch aktiv ist (z.B. feuchtes Material, verdeckter Schimmel), muss diese zuerst behandelt werden – sonst kommt der Geruch zurück.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Neutralisation durchführen</h4>
                <p className="ml-6 text-gray-600">Je nach Situation setzen wir Ozon-Generatoren (bei unbewohnten Räumen) oder Hydroxyl-Generatoren (bewohnte Räume) ein. Die Behandlungsdauer beträgt 4–24 Stunden.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontrolle & Übergabe</h4>
                <p className="ml-6 text-gray-600">Nach dem Lüften (bei Ozon) prüfen wir das Ergebnis. Bei hartnäckigen Gerüchen kann eine zweite Behandlung nötig sein. Die Räume werden geruchsfrei übergeben.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Wind className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Geruch beseitigt – und was kommt danach?
                </h3>
                <p className="mb-8 text-gray-300">
                  Geruchsneutralisation ist oft der letzte Schritt einer umfassenden Sanierung. 
                  Hier finden Sie unsere verwandten Leistungen aus <strong>Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Häufig kombiniert mit</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/hochwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Hochwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Geruchsneutralisation</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist eine Ozonbehandlung gesundheitlich unbedenklich?</h3>
                <p className="text-gray-600">Ozon ist in hoher Konzentration gesundheitsschädlich, weshalb die Räume während der Behandlung nicht betreten werden dürfen. Nach der Behandlung wird gründlich gelüftet – danach ist das Ozon vollständig zerfallen und die Räume sind sofort nutzbar. Alternativ bieten Hydroxyl-Generatoren eine sichere Lösung für bewohnte Räume.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert eine Geruchsneutralisation?</h3>
                <p className="text-gray-600">Eine einzelne Behandlung dauert in der Regel 4–24 Stunden, je nach Raumgröße und Geruchsintensität. Bei besonders hartnäckigen Gerüchen (z.B. nach Hochwasser oder Brandschaden) können mehrere Durchgänge nötig sein.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Hilft Geruchsneutralisation auch bei Rauchgeruch oder Tiergerüchen?</h3>
                <p className="text-gray-600">Ja, sowohl Ozon als auch Hydroxyl-Radikale sind äußerst wirksam gegen Tabakrauch, Tiergerüche, Kochgerüche und modrige Gerüche. Besonders bei Übergaben von Mietwohnungen oder nach Renovierungen ist die Behandlung eine schnelle und effektive Lösung.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GeruchsneutralisationPage;
