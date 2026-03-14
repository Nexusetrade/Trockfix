import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const GaimersheimPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung & Bautrocknung Gaimersheim | Trockfix | 24/7</title>
        <meta name="description" content="Wasserschadensanierung & Bautrocknung in Gaimersheim – nur 5 km von unserem Standort. Trockfix: schnelle Anfahrt, lokale Expertise, Versicherungsabwicklung. Jetzt anrufen!" />
        <link rel="canonical" href="https://trockfix.de/gaimersheim" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Nur 5 km entfernt</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung & Bautrocknung Gaimersheim</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Ihr Trockfix-Team ist in unter 15 Minuten bei Ihnen in Gaimersheim.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Kostenlose Beratung</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Unter 15 Min. Anfahrt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ortskenntnis Gaimersheim</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Erreichbar</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Trockfix in Gaimersheim – Nähe, die bei Wasserschäden zählt</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Gaimersheim liegt nur wenige Kilometer östlich unseres Standorts in der Theoderichstraße 8, Ingolstadt. Diese Nähe ist bei Wasserschäden ein entscheidender Vorteil: Wir sind in der Regel <strong>innerhalb von 15 Minuten</strong> bei Ihnen vor Ort – ob im Zentrum, in den Neubaugebieten am Ortsrand oder in den umliegenden Ortsteilen.
            </p>

            <p className="mb-8">
              Gaimersheim ist als eine der am schnellsten wachsenden Gemeinden im Landkreis Eichstätt geprägt von <strong>zahlreichen Neubauprojekten</strong>. Ob Einfamilienhäuser in den neuen Baugebieten oder Bestandsimmobilien im historischen Ortskern – wir kennen die typischen Baukonstruktionen und Schadensmuster der Region. <strong>Neubautrocknung</strong> ist hier ebenso gefragt wie die Sanierung nach Leitungswasserschäden in älteren Gebäuden.
            </p>

            <p className="mb-8">
              Als Marktgemeinde mit eigener Wasserversorgung und Kanalisation kennen wir auch die lokalen Besonderheiten: Die <strong>Grundwassersituation</strong> an der Schutter-Niederung, die spezifischen Bodenverhältnisse und die Kontakte zu lokalen Handwerkern und Hausverwaltungen. Dieses Netzwerk hilft, Schäden schneller und effizienter zu beheben.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Häufige Schadenstypen in Gaimersheim:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Leitungswasserschäden in Bestandsbauten:</strong> Viele Gebäude im Kern Gaimersheims stammen aus den 1960er–80er Jahren. Korrodierte Kupfer- und Stahlrohre sind eine häufige Schadensursache.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Neubautrocknung im Baugebiet:</strong> In den wachsenden Neubaugebieten von Gaimersheim helfen wir Bauherren und Bauträgern, den Innenausbau durch professionelle Estrichtrocknung zu beschleunigen.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Kellerfeuchtigkeit:</strong> Durch die Nähe zur Schutter-Niederung kann es in tiefer gelegenen Bereichen zu erhöhter Bodenfeuchtigkeit und Kellerwasserschäden kommen.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Unsere Leistungen für Gaimersheim</h2>
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Schnelle Anfahrt & Erstmaßnahmen</h4>
                <p className="ml-6 text-gray-600">Unter 15 Minuten von unserem Standort in der Theoderichstraße. Sofortiges Absaugen, Pumpen und Sicherung der betroffenen Bereiche.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Professionelle Trocknung</h4>
                <p className="ml-6 text-gray-600">Kondenstrockner, Adsorptionstrockner und Seitenkanalverdichter – abgestimmt auf den Schadentyp. Regelmäßige Kontrollbesuche in Gaimersheim.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sanierung & Versicherung</h4>
                <p className="ml-6 text-gray-600">Komplette Wiederherstellung und Abwicklung mit Ihrer Versicherung – ein Ansprechpartner für alles.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Auch in der Nachbarschaft aktiv</h3>
                <p className="mb-8 text-gray-300">Neben Gaimersheim betreuen wir die gesamte Region um Ingolstadt.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarorte</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Gaimersheim</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell sind Sie in Gaimersheim?</h3>
                <p className="text-gray-600">Von unserem Standort in der Theoderichstraße 8 (Ingolstadt) sind wir in unter 15 Minuten in Gaimersheim – das gilt für das Zentrum, die Neubaugebiete und die Ortsteile. Über unseren 24/7-Notdienst sind wir jederzeit erreichbar.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bieten Sie auch Neubautrocknung für Bauträger in Gaimersheim?</h3>
                <p className="text-gray-600">Ja, gerade in den wachsenden Neubaugebieten von Gaimersheim sind wir regelmäßig im Einsatz. Wir bieten Estrichtrocknung, Baubeheizung und Belegreife-Messung für Bauträger und private Bauherren.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kennen Sie die örtlichen Gegebenheiten in Gaimersheim?</h3>
                <p className="text-gray-600">Ja, wir sind regelmäßig in Gaimersheim im Einsatz und kennen die typischen Baukonstruktionen, die Grundwassersituation im Schutter-Tal und die lokalen Ansprechpartner bei Hausverwaltungen und Handwerksbetrieben.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default GaimersheimPage;
