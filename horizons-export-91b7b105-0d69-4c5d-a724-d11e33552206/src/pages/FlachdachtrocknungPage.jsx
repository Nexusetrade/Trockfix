import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, PhoneCall, CloudRain, Layers, Wind, CheckCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FlachdachtrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Flachdachtrocknung Ingolstadt | Trockfix | Dachdämmung professionell trocknen</title>
        <meta name="description" content="Flachdachtrocknung in Ingolstadt: Trockfix trocknet durchnässte Dachdämmung mit Vakuumverfahren – ohne die Dachabdichtung zu entfernen. Leckortung und Sanierung inklusive." />
        <link rel="canonical" href="https://trockfix.de/flachdachtrocknung" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1a2030] to-[#0f1520] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Dach-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Flachdachtrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Undichtes Flachdach? Wir trocknen die Dämmung – ohne die Abdichtung komplett zu entfernen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Beratung anfordern
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kostenlose Erstberatung
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><Layers className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Vakuumtrocknung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Eye className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Leckortung am Flachdach</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Dämmung schonend retten</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Flachdach feucht? So retten wir Ihre Dachdämmung</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Flachdächer sind konstruktionsbedingt anfälliger für 
              Feuchtigkeitsschäden als Steildächer. Über die Jahre können 
              sich <strong>Risse in der Abdichtung</strong>, beschädigte 
              Dachdurchdringungen (z.B. Lüftungsrohre, Antennenmaste) oder 
              mangelhafte Anschlüsse bilden. Das Wasser dringt ein und 
              sammelt sich in der darunterliegenden Wärmedämmung.
            </p>

            <p className="mb-8">
              Das Tückische: Die Feuchtigkeit breitet sich innerhalb der 
              Dämmschicht <strong>horizontal</strong> aus – weit entfernt von der 
              eigentlichen Eintrittsstelle. Wasserflecken an der 
              Innendecke erscheinen daher oft an ganz anderen Stellen 
              als das Leck. Eine gezielte <strong>Leckortung am Dach</strong> ist 
              daher der unverzichtbare erste Schritt.
            </p>

            <p className="mb-8">
              Mit dem <strong>Vakuumverfahren</strong> trocknen wir die Flachdachdämmung, 
              ohne die gesamte Abdichtung entfernen zu müssen. Über 
              Öffnungen in der Dampfsperre wird die feuchte Luft aus der 
              Dämmschicht abgesaugt. Das Wasser verdunstet dabei direkt 
              in der Dämmung und wird als Feuchtluft abgeführt. Die 
              Dachabdichtung bleibt erhalten und nur die schadhafte 
              Stelle muss repariert werden.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><CloudRain className="text-[#00BCD4] w-8 h-8 mr-3" />Warum ist eine nasse Dachdämmung problematisch?</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Wind className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Energieverlust:</strong> Nasse Dämmung verliert bis zu 90% ihrer Isolierwirkung. Im Winter heizen Sie buchstäblich durch das Dach – enorme Energiekosten sind die Folge.</span></li>
                <li className="flex items-start"><Layers className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Strukturschäden:</strong> Dauerhafte Feuchtigkeit greift die Tragkonstruktion des Daches an – Holzbalken verfaulen, Stahlträger korrodieren.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Schimmelgefahr:</strong> Die Feuchtigkeit kann in die darunterliegenden Räume diffundieren und dort Schimmelbefall verursachen.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Ablauf der Flachdachtrocknung</h2>
            <p className="mb-8">Vom Leck zur trockenen Dämmung in vier Schritten:</p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Dach-Leckortung</h4>
                <p className="ml-6 text-gray-600">Mit Potentialmessung, Rauchgastest oder Feuchtigkeitssonden lokalisieren wir die undichte Stelle in der Dachabdichtung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Schadstelle abdichten</h4>
                <p className="ml-6 text-gray-600">Bevor die Trocknung beginnt, muss die undichte Stelle im Dach repariert werden – sonst dringt erneut Wasser ein.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Vakuumtrocknung der Dämmschicht</h4>
                <p className="ml-6 text-gray-600">Über gezielte Öffnungen wird die feuchte Luft aus der Dachdämmung abgesaugt. Der Prozess dauert je nach Fläche und Durchfeuchtung 2–6 Wochen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontrollmessung & Verschluss</h4>
                <p className="ml-6 text-gray-600">Abschlussmessung der Restfeuchtigkeit. Öffnungen werden fachgerecht verschlossen. Die Dachfunktion ist vollständig wiederhergestellt.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><CloudRain className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Verwandte Leistungen</h3>
                <p className="mb-8 text-gray-300">Flachdachprobleme betreffen oft auch die darunterliegenden Räume.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Flachdachtrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Muss das ganze Dach geöffnet werden?</h3>
                <p className="text-gray-600">Nein, das ist gerade der Vorteil der Vakuumtrocknung. Nur die undichte Stelle wird repariert und wenige gezielte Öffnungen werden für die Trocknung gesetzt. Die bestehende Dachabdichtung bleibt zum größten Teil erhalten.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie erkennt man, dass die Flachdachdämmung nass ist?</h3>
                <p className="text-gray-600">Typische Anzeichen: Wasserflecken an der Decke, erhöhte Heizkosten, muffiger Geruch im Obergeschoss oder sichtbare Feuchtigkeit an der Dachinnenseite. Eine Thermografie von innen kann den Verdacht schnell bestätigen oder entkräften.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert die Flachdachtrocknung?</h3>
                <p className="text-gray-600">Abhängig von der betroffenen Fläche und dem Durchfeuchtungsgrad dauert eine Flachdachtrocknung in der Regel 2–6 Wochen. Die Geräte arbeiten leise auf dem Dach und beeinträchtigen die Nutzung der darunterliegenden Räume kaum.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FlachdachtrocknungPage;
