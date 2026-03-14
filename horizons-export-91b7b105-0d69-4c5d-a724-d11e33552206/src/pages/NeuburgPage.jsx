import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Wrench, AlertTriangle, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const NeuburgPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung & Bautrocknung Neuburg a.d. Donau | Trockfix</title>
        <meta name="description" content="Wasserschadensanierung in Neuburg an der Donau: Trockfix – schnelle Hilfe bei Wasserschäden, Hochwasser und Kellerüberflutung. Donau-Region Spezialist." />
        <link rel="canonical" href="https://trockfix.de/neuburg-donau" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Donau-Region Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung Neuburg a.d. Donau</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">An der Donau zu Hause – Trockfix kennt die Herausforderungen der Donau-Region.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ca. 30 Min. Anfahrt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Waves className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Donau-Hochwasser Erfahrung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Notdienst</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Neuburg an der Donau – Altstadt-Charme trifft Hochwasserrisiko</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Neuburg an der Donau besticht durch seine prächtige <strong>Renaissance-Altstadt</strong> und die idyllische Lage direkt an der Donau. Dieselbe geografische Lage bringt jedoch besondere <strong>Herausforderungen im Wasserschadenbereich</strong> mit sich: Die Donau-Auen, der hohe Grundwasserspiegel und die historische Bausubstanz erfordern spezialisiertes Know-how.
            </p>

            <p className="mb-8">
              Von unserem Standort in Ingolstadt erreichen wir Neuburg über die B13 in ca. <strong>30 Minuten</strong>. In der historischen Altstadt treffen wir häufig auf <strong>Gewölbekeller mit Natursteinmauerwerk</strong>, die besonders anfällig für Feuchtigkeit sind. Hier kommen spezielle Trocknungsverfahren wie <strong>Adsorptionstrockner und Infrarot-Heizplatten</strong> zum Einsatz, die auch bei niedrigen Kellertemperaturen effektiv arbeiten.
            </p>

            <p className="mb-8">
              Nach den Donau-Hochwassern der vergangenen Jahre haben wir in Neuburg und den umliegenden Ortsteilen zahlreiche <strong>Hochwassersanierungen</strong> durchgeführt. Kontaminiertes Wasser, Schlammablagerungen und durchnässte Wände erfordern neben der Trocknung oft auch eine <strong>Desinfektion und Geruchsneutralisation</strong>. Wir begleiten den gesamten Prozess.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Besonderheiten in Neuburg:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Waves className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Donau-Hochwasser:</strong> Die Donau-Auen bei Neuburg sind bei extremen Pegelständen besonders gefährdet. Elementarversicherung und Vorsorge sind hier essenziell.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Historische Bausubstanz:</strong> Gewölbekeller und Natursteinmauern der Altstadt erfordern schonende Trocknungsverfahren, die die historische Substanz nicht beschädigen.</span></li>
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Hoher Grundwasserspiegel:</strong> In Donau-Nähe steht das Grundwasser oft nur wenige Meter unter der Oberfläche – Keller ohne Abdichtung sind permanent gefährdet.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Waves className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarorte</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Besonders relevant</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/hochwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Hochwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/geruchsneutralisation" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Geruchsneutralisation</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarorte</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Neuburg</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fahren Sie auch nach Neuburg, obwohl es 30 km entfernt ist?</h3>
                <p className="text-gray-600">Ja, Neuburg gehört fest zu unserem Kerngebiet. Über die B13 sind wir in 30 Minuten vor Ort. Auch unser 24/7-Notdienst fährt selbstverständlich nach Neuburg und die umliegenden Ortsteile.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können historische Gebäude schonend getrocknet werden?</h3>
                <p className="text-gray-600">Ja, für historische Bausubstanz setzen wir besonders schonende Verfahren ein – Infrarot-Heizplatten statt aggressiver Hochtemperatur-Trocknung und Adsorptionstrockner für die kühlen Gewölbekeller. Die Substanz wird dabei nicht beschädigt.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was tun nach Donau-Hochwasser?</h3>
                <p className="text-gray-600">Sobald das Wasser zurückgeht: Pumpen, Schlamm entfernen, kontaminierte Materialien entsorgen, desinfizieren und trocknen. Wir begleiten den kompletten Prozess und übernehmen die Dokumentation für Ihre Elementarversicherung.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NeuburgPage;
