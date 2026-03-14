import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Wrench, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const KoeschingPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung & Bautrocknung Kösching | Trockfix | 24/7</title>
        <meta name="description" content="Wasserschadensanierung & Bautrocknung in Kösching: Trockfix – Ihr Fachbetrieb aus Ingolstadt. Schnelle Anfahrt, lokale Kenntnis, 24/7 Notdienst. Jetzt beraten lassen!" />
        <link rel="canonical" href="https://trockfix.de/koesching" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Schnell bei Ihnen in Kösching</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung & Bautrocknung Kösching</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Lokaler Fachbetrieb für Kösching – professionelle Trocknung und Sanierung bei Wasserschäden.</p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1"><PhoneCall className="w-5 h-5 mr-2 animate-pulse" />Notdienst anrufen</a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">Beratung anfragen</Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><MapPin className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Ca. 20 Min. Anfahrt</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Erfahrung in der Region</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Notdienst</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Wasserschäden in Kösching – wir kennen die Region</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Kösching, die Marktgemeinde südöstlich von Ingolstadt, verbindet ländlichen Charme mit guter Infrastruktur. Von unserem Standort in der Theoderichstraße 8 erreichen wir Kösching über die B13 in rund <strong>20 Minuten</strong> – auch im Notfall.
            </p>

            <p className="mb-8">
              Die Gebäudestruktur in Kösching ist vielfältig: Im historischen Ortskern finden sich <strong>Altbauten mit massivem Mauerwerk</strong>, die häufig von aufsteigender Feuchtigkeit betroffen sind. In den neueren Wohngebieten dominieren moderne Ein- und Mehrfamilienhäuser, bei denen Wasserschäden durch <strong>defekte Fußbodenheizungen oder Rohrbrüche</strong> die häufigsten Schadensursachen sind.
            </p>

            <p className="mb-8">
              Besonders in den tiefer gelegenen Bereichen Köschings kann es bei starken Regenfällen zu <strong>Oberflächenwasser-Problemen und Kellerüberflutungen</strong> kommen. Wir beraten Sie nicht nur zur akuten Schadensbeseitigung, sondern auch zu <strong>präventiven Maßnahmen</strong> wie Rückstauklappen und Drainage-Systemen.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Typische Einsätze in Kösching:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Altbau-Feuchtigkeit:</strong> Aufsteigende Feuchtigkeit in Kellergeschossen älterer Gebäude – erfordert Spezialtrocknung und ggf. nachträgliche Abdichtung.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Rohrbrüche im Bestand:</strong> Zunehmend defekte Leitungen in Gebäuden aus den 70er–90er Jahren. Leckortung und Estrichtrocknung sind häufig nötig.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Starkregen-Vorsorge:</strong> Beratung zur Kellerabdichtung und Installation von Rückstauklappen für gefährdete Grundstücke.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><MapPin className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarorte</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Unsere Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarorte</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Kösching</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell sind Sie in Kösching vor Ort?</h3>
                <p className="text-gray-600">Über die B13 erreichen wir Kösching von Ingolstadt aus in ca. 20 Minuten. Bei Notfällen sind wir rund um die Uhr erreichbar und starten sofort.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Helfen Sie auch bei aufsteigender Feuchtigkeit in Altbauten?</h3>
                <p className="text-gray-600">Ja, gerade in den Altbauten Köschings ist dies ein häufiges Problem. Wir messen die Feuchtigkeit, trocknen die betroffenen Bereiche und beraten zur langfristigen Abdichtung (Horizontalsperre, Injektionsverfahren).</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Übernehmen Sie die Versicherungsabwicklung?</h3>
                <p className="text-gray-600">Ja, wir dokumentieren den Schaden und kommunizieren auf Wunsch direkt mit Ihrer Gebäude- oder Hausratversicherung – inklusive Fotos, Messprotokollen und Schadensbericht.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default KoeschingPage;
