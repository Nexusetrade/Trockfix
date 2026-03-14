import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, PhoneCall, AlertTriangle, Siren, Zap, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotdienstPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>24h Notdienst Wasserschaden Ingolstadt | Trockfix | Sofort-Hilfe</title>
        <meta name="description" content="Wasserschaden-Notdienst in Ingolstadt: Trockfix ist rund um die Uhr erreichbar – auch nachts, am Wochenende und an Feiertagen. Sofortige Hilfe bei Rohrbruch, Überflutung und akutem Wasserschaden." />
        <link rel="canonical" href="https://trockfix.de/notdienst-24h" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4a1010] to-[#2a0505] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-red-400 font-bold tracking-wider uppercase text-sm mb-4 block animate-pulse">24/7 Notdienst – Jetzt erreichbar</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Notdienst Wasserschaden Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Rohrbruch um 3 Uhr nachts? Keller unter Wasser am Sonntag? Wir sind für Sie da – rund um die Uhr.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-red-600/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              0171 3498807 – Sofort anrufen
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kontaktformular
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-red-50 border-b border-red-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <Siren className="text-red-500 w-6 h-6 mr-3" />
              <span>Auch nachts & an Feiertagen</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Zap className="text-red-500 w-6 h-6 mr-3" />
              <span>Schnelle Anfahrt ab Ingolstadt</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Clock className="text-red-500 w-6 h-6 mr-3" />
              <span>365 Tage im Jahr erreichbar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-red-500 pb-2 inline-block">
              Warum ein Notdienst bei Wasserschäden entscheidend ist
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Ein Wasserschaden wartet nicht auf die Geschäftszeiten. Gerade in den 
              kritischen ersten Stunden entscheidet sich, ob Ihr Schaden schnell 
              behoben werden kann oder ob teure Folgeschäden wie Schimmelbildung, 
              durchnässte Dämmung und aufgequollene Böden entstehen.
            </p>

            <p className="mb-8">
              Unser 24/7-Notdienst steht Ihnen <strong>ganzjährig</strong> zur Verfügung – auch 
              an Wochenenden, Feiertagen und mitten in der Nacht. Wenn Sie uns unter 
              <strong> 0171 3498807</strong> anrufen, erreichen Sie direkt einen unserer Techniker, 
              keine Callcenter-Weiterleitung. Am Telefon geben wir Ihnen sofort erste 
              Handlungsanweisungen: Wasserzufuhr stoppen, Strom absichern, 
              Wertgegenstände retten.
            </p>

            <p className="mb-8">
              Von unserem Standort in der <strong>Theoderichstraße 8, 85051 Ingolstadt</strong> sind 
              wir in Ingolstadt und den umliegenden Gemeinden wie Gaimersheim, 
              Manching oder Kösching in der Regel <strong>innerhalb von 45–90 Minuten</strong> bei 
              Ihnen vor Ort. Unsere Einsatzfahrzeuge sind rund um die Uhr mit 
              Pumpen, Industriesaugern und Trocknungsgeräten bestückt, sodass 
              wir sofort mit den Erstmaßnahmen beginnen können.
            </p>

            <div className="bg-red-50 border border-red-200 p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-red-500 w-8 h-8 mr-3" />
                Wann sollten Sie unseren Notdienst rufen?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Siren className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Akuter Rohrbruch:</strong> Wasser tritt unkontrolliert aus einer Leitung aus – in Wand, Decke oder Boden. Jede Minute zählt, um die Wassermenge zu begrenzen.</span>
                </li>
                <li className="flex items-start">
                  <Siren className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Überfluteter Keller:</strong> Nach Starkregen, Kanalrückstau oder Grundwasseranstieg steht Wasser im Keller – Pumpen und Entfeuchtung müssen sofort beginnen.</span>
                </li>
                <li className="flex items-start">
                  <Siren className="w-6 h-6 text-red-500 mr-3 shrink-0 mt-1" />
                  <span><strong>Defekte Haushaltsgeräte:</strong> Waschmaschine, Spülmaschine oder Heizung laufen aus – der Schaden breitet sich schnell über mehrere Räume aus.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf unseres Notdienst-Einsatzes
            </h2>
            <p className="mb-8">
              Unser Notfallprotokoll – erprobt in hunderten Einsätzen:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-red-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Telefonische Sofortberatung</h4>
                <p className="ml-6 text-gray-600">Sie schildern die Situation, wir geben sofort Anweisungen zur Schadensbegrenzung und machen uns auf den Weg.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Schnelle Anfahrt & Erstmaßnahmen</h4>
                <p className="ml-6 text-gray-600">Vor Ort sichern wir den Schadensbereich, stoppen die Wasserquelle und beginnen mit dem Abpumpen und Absaugen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Technische Trocknung starten</h4>
                <p className="ml-6 text-gray-600">Noch beim Ersteinsatz stellen wir die ersten Trocknungsgeräte auf, um den Trocknungsprozess sofort einzuleiten.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Dokumentation & nächste Schritte</h4>
                <p className="ml-6 text-gray-600">Schadensdokumentation für die Versicherung und Planung der weiteren Sanierungsschritte – transparent und planbar.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Phone className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Nach dem Notdienst: Professionelle Sanierung
                </h3>
                <p className="mb-8 text-gray-300">
                  Der Notdienst-Einsatz ist der erste Schritt. Danach kümmern wir uns um 
                  die vollständige Trocknung und Sanierung – alles aus einer Hand.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Folge-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Schnelle Anfahrt nach</h4>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – 24h Notdienst</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kostet der Notdienst-Einsatz außerhalb der Geschäftszeiten extra?</h3>
                <p className="text-gray-600">Nein, wir berechnen keine Nacht- oder Wochenendzuschläge. Die Einsatzkosten richten sich ausschließlich nach dem Schadensumfang. In den meisten Fällen übernimmt Ihre Versicherung die kompletten Kosten inklusive Notdienst.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell sind Sie bei mir vor Ort?</h3>
                <p className="text-gray-600">Im Stadtgebiet Ingolstadt in der Regel innerhalb von 45 Minuten, in den umliegenden Gemeinden (Gaimersheim, Manching, Kösching) innerhalb von 60–90 Minuten. Bei extremen Wetterlagen kann es etwas länger dauern.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was gilt als Wasserschaden-Notfall?</h3>
                <p className="text-gray-600">Jede Situation, in der aktiv Wasser austritt und sich der Schaden vergrößert: Rohrbrüche, laufende Leitungen, überflutete Keller, auslaufende Haushaltsgeräte. Auch bei Entdeckung von bereits eingetretenen Schäden (z.B. Wasserflecken an der Decke) sollten Sie zeitnah handeln.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default NotdienstPage;
