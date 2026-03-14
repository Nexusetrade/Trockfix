import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Home, AlertTriangle, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

const FriedrichshofenPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Bautrocknung & Wasserschadensanierung Friedrichshofen | Trockfix Ingolstadt</title>
        <meta name="description" content="Friedrichshofen Ingolstadt: Professionelle Bautrocknung und Wasserschadensanierung. Trockfix – unter 10 Min. Anfahrt, Siedlungsbau-Erfahrung, 24/7 Notdienst." />
        <link rel="canonical" href="https://trockfix.de/friedrichshofen" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Ihr Nachbar-Fachbetrieb</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Bautrocknung & Wasserschadensanierung Friedrichshofen</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Friedrichshofen: Familiärer Stadtteil, professionelle Trocknung – direkt vom Nachbarn.</p>
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
            <div className="flex items-center text-gray-700 font-medium"><Home className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Siedlungsbau-Erfahrung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Erreichbar</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Friedrichshofen – grüner Stadtteil mit Trocknungsbedarf</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Friedrichshofen ist ein <strong>grüner, familienfreundlicher Stadtteil</strong> im Süden Ingolstadts, geprägt von Einfamilienhäusern, Doppelhaushälften und kleineren Wohnanlagen. Die Mischung aus <strong>Nachkriegs-Siedlungsbau und jüngeren Neubauprojekten</strong> bringt verschiedene Schadensmuster mit sich, die wir aus regelmäßigen Einsätzen kennen.
            </p>

            <p className="mb-8">
              In den <strong>Siedlungshäusern der 50er und 60er Jahre</strong> sind es vor allem veraltete Wasserleitungen und fehlende Abdichtungen, die zu Feuchteschäden führen. Viele dieser Häuser wurden in den letzten Jahrzehnten <strong>energetisch saniert</strong> – neue Fenster, Außendämmung – ohne die Leitungen gleichzeitig zu erneuern. Das erhöht das Risiko eines versteckten Rohrbruchs.
            </p>

            <p className="mb-8">
              Die <strong>großen Gärten</strong> in Friedrichshofen bringen einen weiteren Aspekt: <strong>Gartenbewässerungsleitungen</strong>, die im Winter einfrieren und beim Auftauen platzen, verursachen gelegentlich Wasserschäden an Hausfassaden und Kellern. Auch <strong>Regenwasser-Versickerung</strong> ist bei den lehmigen Böden in manchen Bereichen problematisch.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Typische Einsätze in Friedrichshofen:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Versteckte Rohrbrüche:</strong> In den sanierten Siedlungshäusern werden defekte Leitungen hinter neuen Wänden oft spät bemerkt – dann ist bereits der Estrich durchnässt.</span></li>
                <li className="flex items-start"><Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Frostschäden im Frühjahr:</strong> Eingefrorene Außenleitungen und Gartenwasserhähne platzen beim Auftauen und können Fassade und Keller beschädigen.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Kellertrockenlegung:</strong> Ältere Keller ohne moderne Abdichtung sind in Friedrichshofen ein häufiger Einsatzgrund – besonders bei Regenwetter.</span></li>
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
                      <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarstadtteile</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                      <li><Link to="/einzugsgebiet/ringsee" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Ringsee</Link></li>
                      <li><Link to="/einzugsgebiet/kothau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kothau</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Friedrichshofen</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mein Siedlungshaus wurde saniert, aber die Rohre nicht – ist das gefährlich?</h3>
                <p className="text-gray-600">Potenziell ja. Neue Fenster und Dämmung senken den Luftaustausch, was die Feuchtigkeitsproblematik bei einem Leitungsschaden verschärft. Gleichzeitig altern die Rohre weiter. Eine Leckortung zur Prävention kann sinnvoll sein.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kann eine eingefrorene Gartenleitung mein Haus beschädigen?</h3>
                <p className="text-gray-600">Ja, wenn die Leitung nahe am Gebäude verläuft und beim Auftauen platzt. Das Wasser kann in die Fassade, den Kellerschacht oder das Fundament eindringen. Tipp: Absperrhahn im Herbst schließen und die Leitung entleeren.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Übernimmt die Versicherung Wasserschäden in älteren Häusern?</h3>
                <p className="text-gray-600">In der Regel ja – Leitungswasserschäden sind über die Wohngebäudeversicherung abgedeckt, unabhängig vom Gebäudealter. Elementarschäden (Starkregen, Überflutung) erfordern eine Zusatzversicherung. Wir dokumentieren alles für Ihre Versicherung.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FriedrichshofenPage;
