import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Layers, Thermometer, Gauge, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

const EstrichtrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Estrichtrocknung Ingolstadt | Trockfix | CM-Messung & Unterestrichtrocknung</title>
        <meta name="description" content="Estrichtrocknung in Ingolstadt: Unterestrich-Trocknung mit Seitenkanalverdichter, CM-Messung für Belegreife. Trockfix – Ihr Fachbetrieb für Estrich nach Wasserschaden und im Neubau." />
        <link rel="canonical" href="https://trockfix.de/estrichtrocknung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2a2520] to-[#1a1510] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Estrich-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Estrichtrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Belegreifer Estrich – ob nach Wasserschaden oder im Neubau. Mit CM-Messung und Unterestrichtrocknung.
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

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <Gauge className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>CM-Messung nach Norm</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Layers className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Unterestrich-Verfahren</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Zertifizierte Belegreifemessung</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Estrichtrocknung – warum sie so wichtig ist
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Der Estrich ist eines der kritischsten Bauteile, wenn es um 
              Feuchtigkeit geht. Bei einem Wasserschaden nimmt er enorme 
              Mengen Wasser auf – und gibt sie nur langsam wieder ab. Im 
              Neubau enthält frisch gegossener Estrich bis zu <strong>300 Liter 
              Wasser pro 100 m²</strong>, die vor der Verlegung des Bodenbelags 
              vollständig verdunsten müssen.
            </p>

            <p className="mb-8">
              Die Herausforderung: Estrich liegt oft auf einer 
              <strong> PE-Folie als Dampfsperre</strong>, darunter die Trittschalldämmung. 
              Diese Konstruktion verhindert, dass Feuchtigkeit nach unten 
              entweichen kann. Bei einem Wasserschaden sammelt sich das 
              Wasser häufig <strong>unter dem Estrich in der Dämmschicht</strong> – 
              unsichtbar, aber hochgradig schadensträchtig. Hier kommt die 
              <strong> Unterestrichtrocknung</strong> zum Einsatz: Über Kernbohrungen wird 
              warme, trockene Luft unter den Estrich geblasen, die die 
              Feuchtigkeit aufnimmt und über Abluftstellen abführt.
            </p>

            <p className="mb-8">
              Wann der Estrich trocken genug ist, zeigt die <strong>CM-Messung 
              (Calciumcarbid-Methode)</strong> – das einzige normierte Verfahren zur 
              Bestimmung der Belegreife. Für Fliesen liegt der Grenzwert bei 
              2,0 CM-% (Zementestrich), für elastische Beläge wie Parkett 
              oder Vinyl bei 1,8 CM-%. Wir führen diese Messung fachgerecht 
              durch und dokumentieren das Ergebnis schriftlich.
            </p>

            <div className="bg-[#fef3c7] border border-[#fcd34d] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Ruler className="text-amber-600 w-8 h-8 mr-3" />
                Belegreife-Grenzwerte (CM-Messung):
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Layers className="w-6 h-6 text-amber-600 mr-3 shrink-0 mt-1" />
                  <span><strong>Zementestrich + Fliesen/Naturstein:</strong> ≤ 2,0 CM-% Restfeuchte</span>
                </li>
                <li className="flex items-start">
                  <Layers className="w-6 h-6 text-amber-600 mr-3 shrink-0 mt-1" />
                  <span><strong>Zementestrich + Parkett/Vinyl/Laminat:</strong> ≤ 1,8 CM-% Restfeuchte</span>
                </li>
                <li className="flex items-start">
                  <Thermometer className="w-6 h-6 text-amber-600 mr-3 shrink-0 mt-1" />
                  <span><strong>Calciumsulfat-Estrich (Anhydrit):</strong> ≤ 0,5 CM-% bzw. ≤ 0,3 CM-% bei Fußbodenheizung</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf der Estrichtrocknung
            </h2>
            <p className="mb-8">
              So bringen wir Ihren Estrich auf den richtigen Feuchtigkeitswert:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-amber-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Erstmessung & Schadensanalyse</h4>
                <p className="ml-6 text-gray-600">Feuchtigkeitsmessung des Estrichs und der Dämmschicht. Bei Wasserschäden: Welche Bereiche sind betroffen? Ist die Fußbodenheizung intakt?</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kernbohrungen & Trocknungssystem</h4>
                <p className="ml-6 text-gray-600">Bei Unterestrichtrocknung: Gezielte Kernbohrungen (∅ 50 mm) in den Estrichfeldern. Anschluss an den Seitenkanalverdichter für Über- oder Unterdruck-Trocknung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Trocknungsphase mit Monitoring</h4>
                <p className="ml-6 text-gray-600">Regelmäßige Kontrollmessungen alle 3–5 Tage. Bei Fußbodenheizung arbeiten wir mit einem speziellen Aufheizprogramm zusammen, um den Prozess zu beschleunigen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">CM-Messung & Belegreife-Freigabe</h4>
                <p className="ml-6 text-gray-600">Abschließende CM-Messung nach Norm. Sie erhalten ein Protokoll mit den exakten Werten als Nachweis für den Bodenleger oder Ihre Versicherung.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Layers className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Estrich trocken? Dann geht es weiter.
                </h3>
                <p className="mb-8 text-gray-300">
                  Die Estrichtrocknung ist oft Teil einer größeren Sanierungsmaßnahme. 
                  Hier finden Sie unsere verwandten Leistungen.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Verwandte Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wasserschadensanierung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Estrichtrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was ist eine CM-Messung und warum ist sie wichtig?</h3>
                <p className="text-gray-600">Die CM-Messung (Calciumcarbid-Methode) ist das einzige normierte Verfahren, um die Belegreife eines Estrichs zuverlässig zu bestimmen. Dabei wird eine Estrichprobe entnommen und mit Calciumcarbid reagiert. Das entstehende Gas zeigt den exakten Feuchtigkeitsgehalt an. Ohne diese Messung riskieren Sie Schäden am neuen Bodenbelag.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Muss für die Estrichtrocknung der Boden aufgemacht werden?</h3>
                <p className="text-gray-600">Es kommt darauf an: Für die Unterestrichtrocknung werden kleine Kernbohrungen (∅ 50 mm) gesetzt – die nach der Trocknung verschlossen werden. Wenn der Bodenbelag durch den Wasserschaden ohnehin zerstört ist, wird er vorher entfernt, um den Estrich direkt trocknen zu können.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Beeinflusst eine Fußbodenheizung die Estrichtrocknung?</h3>
                <p className="text-gray-600">Ja, positiv! Eine Fußbodenheizung kann die Trocknung beschleunigen, wenn sie nach einem speziellen Aufheizprotokoll betrieben wird. Wir koordinieren das gemeinsam mit Ihrem Heizungsbauer. Achtung: Bei Calciumsulfat-Estrich (Anhydrit) gelten strengere Grenzwerte bei Fußbodenheizung.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EstrichtrocknungPage;
