import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Droplets, Home, AlertTriangle, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const RingseePage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wasserschadensanierung Ringsee Ingolstadt | Trockfix | 24/7 Notdienst</title>
        <meta name="description" content="Ringsee Ingolstadt: Wasserschadensanierung und Bautrocknung in einem der ältesten Stadtteile. Trockfix – Altbau-Erfahrung, schnelle Anfahrt, 24/7 Notdienst." />
        <link rel="canonical" href="https://trockfix.de/ringsee" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Altbau-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung Ringsee</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">Ringsee braucht Altbau-Profis – wir kennen die besonderen Herausforderungen des Stadtteiels.</p>
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
            <div className="flex items-center text-gray-700 font-medium"><Building className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Altbau-Erfahrung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-[#00BCD4] w-6 h-6 mr-3" /><span>24/7 Notdienst</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Ringsee – Ingolstadts ältester Stadtteil hat eigene Regeln</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Ringsee ist einer der ältesten und traditionsreichsten Stadtteile Ingolstadts. Die <strong>dichte Altbau-Bebauung</strong> mit Gebäuden aus der Gründerzeit, der Nachkriegszeit und den 50er–60er Jahren stellt besondere Anforderungen an die Wasserschadensanierung: <strong>Massive Ziegelmauern, Gewölbekeller und veraltete Leitungssysteme</strong> erfordern spezialisiertes Know-how.
            </p>

            <p className="mb-8">
              In Ringsee treten Wasserschäden häufig durch <strong>marode Abwasserleitungen aus Steinzeug oder Guss</strong> auf, die nach Jahrzehnten undicht geworden sind. Auch <strong>aufsteigende Feuchtigkeit</strong> in den Kellern der Altbauten ist ein Dauerthema – viele Gebäude wurden ohne moderne Horizontal- oder Vertikalabdichtung errichtet. Die dicken Ziegelmauern speichern enorme Mengen Wasser und trocknen ohne Technik nur sehr langsam.
            </p>

            <p className="mb-8">
              Unser Vorteil in Ringsee: Wir kennen die <strong>typischen Baukonstruktionen</strong> dieses Stadtteils und wissen, welche Trocknungsverfahren bei Ziegelmauerwerk, Bruchsteinwänden und Stampfbetondecken am besten funktionieren. <strong>Infrarot-Heizplatten</strong> sind hier oft das Mittel der Wahl – sie trocknen massives Mauerwerk schonend von innen nach außen.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />Typische Altbau-Probleme in Ringsee:</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Aufsteigende Feuchtigkeit:</strong> Fehlende oder defekte Horizontalsperre lässt Bodenfeuchtigkeit in die Wände steigen – erkennbar an Salzausblühungen und abblätterndem Putz.</span></li>
                <li className="flex items-start"><Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Marode Abwasserleitungen:</strong> Steinzeug- und Gussrohre aus den 50er–60er Jahren sind häufig undicht. Wasser versickert im Mauerwerk und verursacht dauerhafte Feuchteschäden.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Schimmel in Altbau-Wohnungen:</strong> Kältebrücken an Außenwänden und unzureichende Belüftung führen zu Schimmelbefall – besonders in Badezimmern und Schlafzimmern.</span></li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Building className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Leistungen & Nachbarstadtteile</h3>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Nachbarstadtteile</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                      <li><Link to="/einzugsgebiet/kothau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kothau</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Trockfix in Ringsee</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können Altbauten in Ringsee nachträglich abgedichtet werden?</h3>
                <p className="text-gray-600">Ja, durch Injektionsverfahren (chemische Horizontalsperre) kann aufsteigende Feuchtigkeit dauerhaft gestoppt werden. Wir trocknen zunächst das Mauerwerk und empfehlen dann passende Abdichtungspartner aus der Region.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert das Trocknen von 50 cm dickem Ziegelmauerwerk?</h3>
                <p className="text-gray-600">Bei massivem Ziegelmauerwerk mit 50 cm Wandstärke kann die Trocknung 3–6 Wochen dauern. Infrarot-Heizplatten beschleunigen den Prozess erheblich, da sie die Feuchte von innen nach außen treiben.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Schimmel in Altbauten normal?</h3>
                <p className="text-gray-600">Häufig, aber nicht „normal" im Sinne von akzeptabel. Kältebrücken, fehlende Dampfsperren und unzureichende Lüftung begünstigen Schimmel in Altbauten. Professionelle Sanierung und Ursachenbeseitigung sind wichtig – Schimmel ist gesundheitsschädlich.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default RingseePage;
