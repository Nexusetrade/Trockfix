import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, Droplets, Wrench, PhoneCall, Thermometer, Wind, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';

const BautrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>BESTE Bautrocknung Ingolstadt | Trockfix Bautrocknung | 24/7 Notdienst</title>
        <meta name="description" content="Professionelle Bautrocknung in Ingolstadt: Kondenstrockner, Adsorptionstrockner und Infrarot-Technik. Trockfix – Ihr TÜV-zertifizierter Fachbetrieb für alle Trocknungsverfahren." />
        <link rel="canonical" href="https://trockfix.de/bautrocknung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">TÜV-zertifizierter Fachbetrieb</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Bautrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Ob nach Wasserschaden oder im Neubau – wir bringen Ihre Bausubstanz auf Normfeuchtigkeit.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Notdienst anrufen
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kostenlose Beratung
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <MapPin className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Standort Ingolstadt</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Gauge className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Modernste Trocknungstechnik</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Clock className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>24/7 Erreichbarkeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Was ist Bautrocknung und wann wird sie benötigt?
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Bautrocknung bezeichnet den kontrollierten Entzug von Feuchtigkeit 
              aus Bauteilen – ob nach einem Wasserschaden, während der 
              Neubauphase oder zur Beseitigung von aufsteigender Feuchtigkeit 
              in Altbauten. Ziel ist es, die Bausubstanz auf ihre 
              <strong> Ausgleichsfeuchte</strong> zu bringen und dadurch Folgeschäden zu verhindern.
            </p>

            <p className="mb-8">
              Warum ist das wichtig? Zu hohe Restfeuchtigkeit in Wänden, 
              Estrichen oder Decken führt zu <strong>Schimmelbildung, Beschädigung 
              von Bodenbelägen, Rissbildung im Putz</strong> und sogar zur 
              Verschlechterung der Wärmedämmung. Gerade in der Region 
              Ingolstadt, wo die Winter kalt und die Heizperioden lang sind, 
              kann überschüssige Feuchtigkeit enorme Energieverluste verursachen.
            </p>

            <p className="mb-8">
              Je nach Situation setzen wir unterschiedliche Trocknungsverfahren 
              ein: <strong>Kondenstrockner</strong> für beheizte Räume ab 15°C, 
              <strong> Adsorptionstrockner</strong> für kühle Keller und niedrige Temperaturen, 
              <strong> Seitenkanalverdichter</strong> für die Unterestrichtrocknung und 
              <strong> Infrarot-Heizplatten</strong> für die gezielte Wandtrocknung. 
              Jedes Verfahren hat seinen optimalen Einsatzbereich – und wir 
              wählen immer das effizienteste für Ihren konkreten Fall.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Wrench className="text-[#00BCD4] w-8 h-8 mr-3" />
                Unsere Trocknungstechnologien:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Wind className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Kondenstrockner:</strong> Ideal für Wohnräume. Die Geräte entziehen der Raumluft Feuchtigkeit durch Kondensation – leise, energieeffizient und für Temperaturen ab 15°C geeignet.</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Adsorptionstrockner:</strong> Funktionieren auch bei niedrigen Temperaturen (ab 0°C) und eignen sich ideal für Keller, Rohbauten und ungeheizte Räume.</span>
                </li>
                <li className="flex items-start">
                  <Thermometer className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Infrarot-Heizplatten:</strong> Für die gezielte Trocknung einzelner Wandabschnitte – die Wärme dringt tief ins Mauerwerk ein und beschleunigt die Feuchteabgabe.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf einer professionellen Bautrocknung
            </h2>
            <p className="mb-8">
              Strukturiert, überwacht und dokumentiert – so arbeiten wir:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Feuchtigkeitsmessung & Bestandsaufnahme</h4>
                <p className="ml-6 text-gray-600">Mit kapazitiven und Widerstandsmessgeräten erfassen wir den Ist-Zustand aller betroffenen Bauteile – Wände, Decken, Estrich, Dämmschichten.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Geräteauswahl & Aufstellung</h4>
                <p className="ml-6 text-gray-600">Basierend auf Schadensart, Raumtemperatur und Bauteilaufbau wählen wir das optimale Trocknungsverfahren und stellen die Geräte fachgerecht auf.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Regelmäßige Kontrollmessungen</h4>
                <p className="ml-6 text-gray-600">Alle 3–5 Tage überprüfen wir den Trocknungsfortschritt mit Messinstrumenten. Die Geräteeinstellungen werden bei Bedarf angepasst.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Abschlussmessung & Freigabe</h4>
                <p className="ml-6 text-gray-600">Erst wenn alle Bauteile ihre Ausgleichsfeuchte erreicht haben, geben wir sie frei. Sie erhalten ein Messprotokoll als Nachweis für Versicherung oder Bauherr.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Droplets className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Spezialisierte Trocknungsverfahren
                </h3>
                <p className="mb-8 text-gray-300">
                  Je nach Bauteil bieten wir spezialisierte Trocknungslösungen an. 
                  Alles direkt aus unserem Standort in der <strong>Theoderichstraße 8, 85051 Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Trocknungs-Spezialgebiete</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Weitere Services</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/flachdachtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Flachdachtrocknung</Link></li>
                      <li><Link to="/bautrocknung/bautrocknerverleih" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknerverleih</Link></li>
                      <li><Link to="/bautrocknung/baubeheizung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Baubeheizung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">Häufige Fragen zur Bautrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert eine Bautrocknung?</h3>
                <p className="text-gray-600">Je nach Durchfeuchtung, Bauteildicke und verwendetem Verfahren dauert eine Bautrocknung zwischen 10 und 28 Tagen. Dünne Wände trocknen schneller als massive Betondecken oder schwimmender Estrich. Wir messen regelmäßig und informieren Sie über den Fortschritt.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können die Räume während der Trocknung bewohnt werden?</h3>
                <p className="text-gray-600">In den meisten Fällen ja. Moderne Trocknungsgeräte sind relativ leise (vergleichbar mit einem Kühlschrank) und verbrauchen vertretbar Strom. In Schlafräumen kann die Geräuschentwicklung jedoch störend sein – wir beraten Sie zur optimalen Aufstellung.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wer trägt die Stromkosten für die Trocknungsgeräte?</h3>
                <p className="text-gray-600">Bei versicherungsfinanzierten Trocknungen werden die Stromkosten in der Regel von der Gebäudeversicherung übernommen. Wir dokumentieren Laufzeiten und Verbrauch und machen diese Kosten im Schadenbericht geltend.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BautrocknungPage;
