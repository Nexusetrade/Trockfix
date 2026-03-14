import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Wrench, AlertTriangle, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';

const ManchingPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung & Bautrocknung Manching | Trockfix | 24/7</title>
        <meta name="description" content="Manching: Wasserschadensanierung & Bautrocknung vom Fachbetrieb. Trockfix – schnelle Anfahrt aus Ingolstadt, Hochwassergebiete kennen wir. Jetzt beraten lassen!" />
        <link rel="canonical" href="https://trockfix.de/manching" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Direkt südlich von Ingolstadt</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung & Bautrocknung Manching</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Schnelle Hilfe für Manching – Ihr Trockfix-Team ist in ca. 15 Minuten bei Ihnen.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ca. 15 Min. Anfahrt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Donau-Region Spezialist</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Notdienst</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Manching – zwischen Donau und Paar</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Manching liegt strategisch günstig direkt südlich von Ingolstadt – und direkt an der <strong>Paar-Mündung in die Donau</strong>. Diese Lage an zwei Flüssen macht die Gemeinde besonders relevant für unsere Arbeit: Die Nähe zu Gewässern bedeutet ein <strong>erhöhtes Risiko für Hochwasserschäden und Grundwasserprobleme</strong>.
            </p>

            <p className="mb-8">
              Als Gemeinde mit dem bekannten <strong>Fliegerhorst</strong> und wachsenden Gewerbe- und Wohngebieten vereint Manching historischen Bestand mit moderner Bebauung. Im älteren Ortskern treffen wir häufig auf <strong>Leitungswasserschäden in Gebäuden der 50er bis 70er Jahre</strong>, während in den Neubaugebieten die <strong>Estrichtrocknung für Bauträger und Häuslebauer</strong> dominiert.
            </p>

            <p className="mb-8">
              Durch die Donau- und Paar-Auen kann der Grundwasserspiegel in Manching deutlich schwanken. In feuchten Wintern und nach Schneeschmelze beobachten wir regelmäßig <strong>Kellerfeuchtigkeit durch drückendes Grundwasser</strong>. Wir kennen diese lokalen Besonderheiten und beraten Sie sowohl zur akuten Trocknung als auch zur langfristigen Abdichtung Ihres Gebäudes.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Besonderheiten in Manching:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Hochwassergefährdung:</strong> Die Paar-Donau-Auen können bei Hochwasser überflutet werden. Elementarversicherung ist hier besonders wichtig.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Grundwasser-Schwankungen:</strong> Saisonale Schwankungen des Grundwasserspiegels sorgen für wiederkehrende Kellerfeuchtigkeit in bestimmten Lagen.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Gewerbeobjekte:</strong> Am Fliegerhorst und in den Gewerbegebieten betreuen wir auch größere Objekte mit Industrietrocknern.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarorte</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/hochwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Hochwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarorte</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/ringsee" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Ringsee</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Manching</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Manching hochwassergefährdet?</h3>
                <p className="text-gray-600">Teile von Manching liegen in der Donau- und Paar-Aue und sind bei extremem Hochwasser potenziell betroffen. Ein Blick in die offiziellen Hochwasserkarten des Bayerischen Landesamts zeigt die genauen Risikozonen. Wir beraten Sie gerne zur Vorsorge.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Trocknen Sie auch Gewerbeobjekte?</h3>
                <p className="text-gray-600">Ja, wir betreuen sowohl private Wohnimmobilien als auch Gewerbe- und Industrieobjekte. Für größere Flächen setzen wir Hochleistungs-Adsorptionstrockner und Großraumventilatoren ein.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was mache ich bei Grundwasser im Keller?</h3>
                <p className="text-gray-600">Zunächst abpumpen und trocknen, dann die Ursache klären: Ist die Außenabdichtung defekt? Fehlt eine Horizontalsperre? Ist der Grundwasserspiegel dauerhaft hoch? Wir helfen von der Akutmaßnahme bis zur langfristigen Lösung.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default ManchingPage;
