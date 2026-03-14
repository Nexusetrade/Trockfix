import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Home, AlertTriangle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const KothauPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Bautrocknung & Wasserschadensanierung Kothau Ingolstadt | Trockfix</title>
        <meta name="description" content="Kothau Ingolstadt: Bautrocknung und Wasserschadensanierung direkt vom Nachbar-Fachbetrieb. Kürzeste Anfahrt, Neubaugebiet-Erfahrung, 24/7 Notdienst." />
        <link rel="canonical" href="https://trockfix.de/kothau" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Im Herzen Ingolstadts</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Bautrocknung & Wasserschadensanierung Kothau</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Ihr Trockfix-Team – der schnellste Fachbetrieb für Kothau.</p>
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
            <div className="flex items-center text-gray-700 font-medium"><Building className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Neubau & Bestand</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Notdienst</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Kothau – ruhiges Wohngebiet, schnelle Hilfe</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Kothau ist ein ruhiger Stadtteil im Südosten Ingolstadts, der in den letzten Jahren durch <strong>neue Wohnbauprojekte</strong> gewachsen ist. Gleichzeitig gibt es im Bestand zahlreiche <strong>Einfamilienhäuser und Reihenhäuser</strong> aus den 70er und 80er Jahren, in denen wir regelmäßig Wasserschäden sanieren.
            </p>

            <p className="mb-8">
              Unsere Nähe zu Kothau ist ein echter Vorteil: Von der Theoderichstraße sind wir in <strong>unter 10 Minuten</strong> bei Ihnen. Das bedeutet schnelle Erstmaßnahmen, kurze Wege für Kontrollbesuche und <strong>geringere Anfahrtskosten</strong> für Sie. Gerade bei laufenden Trocknungsprojekten, die regelmäßige Messungen erfordern, macht sich diese Nähe bezahlt.
            </p>

            <p className="mb-8">
              In den Neubaugebieten von Kothau sind wir häufig für <strong>Bauträger im Einsatz</strong>: Estrichtrocknung, Belegreife-Messung und Neubautrocknung gehören hier zum Alltag. Im Bestand dominieren <strong>Leitungswasserschäden durch veraltete Installationen</strong> und Schäden nach Waschmaschinendefekten.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Häufig in Kothau:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Waschmaschinenauslauf:</strong> Ein defekter Zulaufschlauch oder eine verstopfte Abwasserpumpe kann in wenigen Stunden enorme Mengen Wasser in die Wohnung befördern.</span></li>
                <li className="flex items-start"><Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Fußbodenheizungs-Leck:</strong> Moderne Immobilien in Kothau haben häufig Fußbodenheizung – bei Rohrbruch im Heizkreis ist eine Estrich- und Dämmschichttrocknung nötig.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Neubau-Estrich:</strong> Professionelle Estrichtrocknung für termingerechte Fertigstellung in den Neubaugebieten von Kothau.</span></li>
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
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarstadtteile</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                      <li><Link to="/einzugsgebiet/ringsee" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Ringsee</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Kothau</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was tun bei einem Waschmaschinen-Wasserschaden?</h3>
                <p className="text-gray-600">Sofort die Wasserzufuhr abstellen, den Strom im betroffenen Bereich abschalten und uns anrufen. Wir pumpen das Wasser ab, beurteilen den Schaden und starten die Trocknung – oft noch am selben Tag.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Bieten Sie auch Neubautrocknung für Bauträger an?</h3>
                <p className="text-gray-600">Ja, wir arbeiten regelmäßig mit Bauträgern in der Region zusammen. Wir liefern Trocknungsgeräte auf die Baustelle, erstellen Aufheizprotokolle für Fußbodenheizungen und stellen Belegreife-Nachweise per CM-Messung aus.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sind Kontrollbesuche während der Trocknung kostenlos?</h3>
                <p className="text-gray-600">Die regelmäßigen Kontrollmessungen sind im Trocknungspaket enthalten. Durch unsere Nähe zu Kothau können wir diese besonders effizient durchführen – das spart Ihnen Kosten.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default KothauPage;
