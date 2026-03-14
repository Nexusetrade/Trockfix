import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, AlertTriangle, Home, Droplets, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const KellerwasserschadenPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Kellerwasserschaden Ingolstadt | Trockfix | Keller trockenlegen & sanieren</title>
        <meta name="description" content="Kellerwasserschaden in Ingolstadt? Trockfix trocknet Ihren Keller professionell – nach Starkregen, Rückstau oder Grundwasseranstieg. Inklusive Ursachenbeseitigung und Versicherungsabwicklung." />
        <link rel="canonical" href="https://trockfix.de/kellerwasserschaden" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a1a2a] to-[#0f0f1f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Keller-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Kellerwasserschaden Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Wasser im Keller? Wir pumpen ab, trocknen und schützen Ihren Keller vor erneutem Eindringen.
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
              <ArrowDown className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Keller-Spezialtrocknung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Shield className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Ursachenbeseitigung inklusive</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Clock className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>24/7 Notdienst verfügbar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Keller unter Wasser – besondere Herausforderungen
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Ein Kellerwasserschaden gehört zu den häufigsten und gleichzeitig 
              tückischsten Schadensfällen. Keller liegen unter Geländeniveau und 
              sind deshalb besonders anfällig für eindringendes Wasser – sei es 
              durch <strong>Starkregen, Kanalrückstau, defekte Bodenabläufe</strong> oder 
              steigendes <strong>Grundwasser</strong>.
            </p>

            <p className="mb-8">
              Die Besonderheit beim Keller: Feuchtigkeit kann nicht nur von oben 
              (durch Leitungsschäden), sondern auch von unten und von der Seite 
              eindringen. <strong>Hydrostatischer Druck</strong> presst Wasser durch die 
              Bodenplatte und Kellerwände, wenn die Außenabdichtung beschädigt 
              ist oder fehlt. Gerade bei älteren Gebäuden in der Region Ingolstadt, 
              die oft ohne moderne Horizontalsperren gebaut wurden, ist dies ein 
              häufiges Problem.
            </p>

            <p className="mb-8">
              Unsere Kellertrocknung geht deshalb über das einfache Abpumpen 
              hinaus: Wir analysieren, <strong>woher das Wasser kommt</strong>, trocknen 
              den Keller professionell mit Adsorptions- und Kondenstrocknern, 
              und beraten Sie zur <strong>langfristigen Abdichtung</strong> – 
              ob nachträgliche Horizontalsperre, Injektionsverfahren oder 
              Kelleraußenabdichtung. So schützen Sie Ihren Keller dauerhaft.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />
                Häufige Ursachen für Kellerwasserschäden:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Kanalrückstau:</strong> Bei Starkregen kann die Kanalisation überlastet werden. Ohne Rückstauklappe drückt Abwasser durch die Bodenabläufe in den Keller.</span>
                </li>
                <li className="flex items-start">
                  <ArrowDown className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Grundwasseranstieg:</strong> In bestimmten Jahreszeiten oder nach langen Regenperioden steigt der Grundwasserspiegel und drückt durch die Bodenplatte.</span>
                </li>
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Defekte Abdichtung:</strong> Ältere Kellerwände haben oft keine funktionsfähige Außenabdichtung mehr. Sickerwasser dringt durch Risse und poröse Fugen ein.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Unser Kellertrocknungs-Verfahren
            </h2>
            <p className="mb-8">
              Systematische Kellertrocknung in vier Schritten:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Wasser abpumpen & Bereich sichern</h4>
                <p className="ml-6 text-gray-600">Mit Tauchpumpen und Nasssaugern wird das stehende Wasser schnellstmöglich entfernt. Elektrik wird gesichert und der Schadensbereich abgegrenzt.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Ursachenanalyse</h4>
                <p className="ml-6 text-gray-600">Kommt das Wasser aus einer Leitung, durch die Wand oder von unten? Wir klären die Ursache mit Feuchtigkeitsmessung und ggf. Druckprüfung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Technische Kellertrocknung</h4>
                <p className="ml-6 text-gray-600">Spezielle Adsorptionstrockner (ideal für kühle Kellerräume) und Ventilatoren entziehen die Feuchtigkeit aus Wänden, Boden und Luft. Regelmäßige Kontrollmessungen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sanierung & Prävention</h4>
                <p className="ml-6 text-gray-600">Nach der Trocknung: Putz, Anstrich und bei Bedarf Empfehlung zur Kellerabdichtung (Rückstauklappe, Horizontalsperre, Drainagesystem).</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Home className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Weitere Leistungen bei Wasserschäden im Keller
                </h3>
                <p className="mb-8 text-gray-300">
                  Nach dem Keller-Notfall helfen wir mit spezialisierten Leistungen weiter – 
                  direkt aus <strong>Ingolstadt, Theoderichstraße 8</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Verwandte Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/hochwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Hochwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/geruchsneutralisation" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Geruchsneutralisation</Link></li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Kellerwasserschaden</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Mein Keller war schon mehrfach nass – was kann ich dauerhaft tun?</h3>
                <p className="text-gray-600">Bei wiederkehrenden Wasserschäden im Keller empfehlen wir eine professionelle Ursachenanalyse. Oft sind eine fehlende Rückstauklappe, eine defekte Außenabdichtung oder ein hoher Grundwasserspiegel der Grund. Maßnahmen wie eine nachträgliche Horizontalsperre oder ein Drainagesystem können das Problem dauerhaft lösen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kann nach einem Kellerwasserschaden Schimmel entstehen?</h3>
                <p className="text-gray-600">Ja, und das oft schnell. Keller sind von Natur aus kühler und schlechter belüftet als Wohnräume, was die Schimmelbildung begünstigt. Deshalb ist eine schnelle und vollständige Trocknung besonders wichtig. Wir überwachen den Trocknungsfortschritt engmaschig.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Zahlt die Versicherung bei Kellerwasserschäden?</h3>
                <p className="text-gray-600">Bei Leitungswasserschäden (z.B. Rohrbruch) ist die Gebäudeversicherung zuständig. Bei Starkregen, Hochwasser oder Grundwasser greift nur die Elementarversicherung – die nicht in jedem Vertrag enthalten ist. Wir helfen Ihnen bei der Klärung und Dokumentation.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default KellerwasserschadenPage;
