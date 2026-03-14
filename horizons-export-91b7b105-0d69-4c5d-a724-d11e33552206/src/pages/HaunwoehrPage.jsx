import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Home, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HaunwoehrPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung Haunwöhr Ingolstadt | Trockfix | Schnellste Hilfe</title>
        <meta name="description" content="Trockfix in Haunwöhr: Ihr Nachbar bei Wasserschäden. Kürzeste Anfahrt, lokale Kenntnis des Stadtteils. Bautrocknung, Leckortung, Schimmelsanierung – 24/7." />
        <link rel="canonical" href="https://trockfix.de/haunwoehr" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Stadtteil-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung Haunwöhr</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Wir sind quasi Ihr Nachbar – in wenigen Minuten bei Ihnen in Haunwöhr.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Unter 10 Min. Anfahrt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Home className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Wohngebiet-Erfahrung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Erreichbar</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Haunwöhr – beliebtes Wohnviertel, typische Schäden</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Haunwöhr ist einer der beliebtesten Stadtteile Ingolstadts – geprägt von <strong>ruhigen Wohnstraßen, Einfamilienhäusern und Mehrfamilienhäusern</strong> verschiedener Baujahre. Als einer der nächstgelegenen Stadtteile zu unserem Standort in der Theoderichstraße sind wir in <strong>unter 10 Minuten</strong> bei Ihnen.
            </p>

            <p className="mb-8">
              Die Bebauung in Haunwöhr stammt großteils aus den <strong>1960er bis 1990er Jahren</strong>. In diesen Gebäuden treten typischerweise Wasserschäden durch <strong>veraltete Kupfer- und Stahlrohre</strong> auf. Besonders anfällig sind Warmwasserleitungen, die durch Korrosion und Erosion von innen her beschädigt werden. Oft zeigt sich der Schaden erst, wenn bereits Wasser durch die Decke tropft.
            </p>

            <p className="mb-8">
              In den Mehrfamilienhäusern von Haunwöhr sind zudem <strong>Schäden in Badezimmern und Küchen</strong> häufig – defekte Abdichtungen an Duschwannen, undichte Anschlüsse an Spülmaschinen oder beschädigte Silikonfu gen. Wir kennen diese typischen Schadensbilder und reagieren schnell und unkompliziert.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Typische Einsätze in Haunwöhr:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Rohrbrüche in älteren Gebäuden:</strong> Korrodierte Leitungen in Häusern der 60er–80er Jahre – oft versteckt hinter Wänden oder im Estrich.</span></li>
                <li className="flex items-start"><Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Badezimmerschäden:</strong> Undichte Duschwannen, defekte Abdichtungen und tropfende Anschlüsse in Bestandswohnungen.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Hausverwaltungs-Service:</strong> Viele Mehrfamilienhäuser werden von Hausverwaltungen betreut – wir sind deren zuverlässiger Partner für Schadensfälle.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarstadtteile</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarstadtteile</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/ringsee" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Ringsee</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                      <li><Link to="/einzugsgebiet/kothau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kothau</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Haunwöhr</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell können Sie in Haunwöhr sein?</h3>
                <p className="text-gray-600">In unter 10 Minuten – Haunwöhr ist einer der nächstgelegenen Stadtteile zu unserem Standort. Bei Notfällen starten wir sofort und sind umgehend bei Ihnen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Arbeiten Sie auch mit Hausverwaltungen in Haunwöhr zusammen?</h3>
                <p className="text-gray-600">Ja, wir sind für mehrere Hausverwaltungen in Ingolstadt und Umgebung der bevorzugte Partner bei Wasserschäden. Schnelle Reaktion, saubere Dokumentation und direkte Versicherungsabwicklung machen uns zum zuverlässigen Ansprechpartner.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mein Haus ist von den 70ern – sollte ich die Leitungen prüfen lassen?</h3>
                <p className="text-gray-600">Gebäude aus den 60er–80er Jahren haben oft verzinkte Stahlrohre oder alte Kupferleitungen, die korrosionsanfällig sind. Eine präventive Leckortung kann versteckte Schwachstellen aufdecken, bevor ein größerer Schaden entsteht.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HaunwoehrPage;
