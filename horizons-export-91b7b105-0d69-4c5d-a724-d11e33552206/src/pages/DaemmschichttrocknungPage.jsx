import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, PhoneCall, Layers, Wind, Droplets, CheckCircle, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DaemmschichttrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Dämmschichttrocknung Ingolstadt | Trockfix | Dämmung retten statt tauschen</title>
        <meta name="description" content="Dämmschichttrocknung in Ingolstadt: Trockfix trocknet Ihre durchnässte Dämmung unter dem Estrich – ohne den Estrich zu entfernen. Vakuum- und Überdruckverfahren." />
        <link rel="canonical" href="https://trockfix.de/daemmschichttrocknung" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Dämmung retten</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Dämmschichttrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Nasse Dämmung unter dem Estrich? Wir trocknen sie – ohne Ihren Boden zu entfernen.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Jetzt anfragen
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Kostenlose Beratung
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><Layers className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Estrich bleibt erhalten</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Wind className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Vakuum- & Überdruckverfahren</span></div>
            <div className="flex items-center text-gray-700 font-medium"><CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" /><span>Kontrollierte Trocknung</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">Dämmschichttrocknung – die unsichtbare Rettung</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Bei einem Wasserschaden dringt Wasser oft in die 
              <strong> Trittschalldämmung und Wärmedämmung unter dem Estrich</strong> ein. 
              Dort bleibt es gefangen – die PE-Folie über der Dämmung 
              verhindert die natürliche Verdunstung. Ohne gezielte 
              Trocknung bleibt die Dämmung dauerhaft nass und verliert 
              ihre isolierende Wirkung. Schimmelbildung ist nur eine 
              Frage der Zeit.
            </p>

            <p className="mb-8">
              Die gute Nachricht: In den meisten Fällen muss die Dämmung 
              <strong>nicht ausgebaut</strong> werden. Mit der Dämmschichttrocknung 
              trocknen wir die Dämmschicht über den Estrich hinweg – über 
              gezielt gesetzte <strong>Kernbohrungen</strong>. Dabei nutzen wir das 
              <strong> Überdruck-</strong> oder <strong>Vakuumverfahren</strong> mit 
              Seitenkanalverdichtern, die warme, trockene Luft durch die 
              Dämmschicht pressen oder saugen.
            </p>

            <p className="mb-8">
              Wann ist der komplette Ausbau doch nötig? Wenn die 
              Dämmung aus <strong>offenporigem Material</strong> besteht, das 
              durch kontaminiertes Wasser (z.B. Abwasser, Hochwasser) 
              durchtränkt wurde. In solchen Fällen ist eine hygienische 
              Entsorgung unvermeidlich. Wir beraten Sie ehrlich, 
              welche Option in Ihrem Fall sinnvoll ist.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />
                Wann kann die Dämmung gerettet werden?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Sauberes Leitungswasser:</strong> Bei Rohrbruch oder Heizungsleck kann die Dämmung fast immer getrocknet und erhalten werden – EPS, XPS und Mineralfaser sind in der Regel trocknungsfähig.</span></li>
                <li className="flex items-start"><AlertTriangle className="w-6 h-6 text-amber-500 mr-3 shrink-0 mt-1" /><span><strong>Kontaminiertes Wasser:</strong> Nach Abwasserschäden oder Hochwasser muss die Dämmung in der Regel komplett ausgetauscht werden – hygienische Gründe machen eine Trocknung unmöglich.</span></li>
                <li className="flex items-start"><Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" /><span><strong>Schüttdämmung (z.B. Perlite):</strong> Lose Schüttungen können getrocknet werden, brauchen aber länger. Bei starker Verklumpung empfehlen wir den Austausch.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Ablauf der Dämmschichttrocknung</h2>
            <p className="mb-8">Minimalinvasiv und maximal effektiv:</p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Feuchtigkeitsmessung der Dämmschicht</h4>
                <p className="ml-6 text-gray-600">Über Messsonden in bestehenden Bohrungen oder durch Estrichproben ermitteln wir den Durchfeuchtungsgrad der Dämmung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kernbohrungen setzen</h4>
                <p className="ml-6 text-gray-600">Gezielte Bohrungen (∅ 50 mm) in den Estrichfeldern schaffen Zuluft- und Abluftöffnungen für die Trocknungsluft.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Über-/Unterdruck-Trocknung</h4>
                <p className="ml-6 text-gray-600">Seitenkanalverdichter pressen warme, trockene Luft durch die Dämmschicht (Überdruck) oder saugen feuchte Luft heraus (Vakuum). Das Kondensat wird von Raumtrocknern aufgenommen.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontrollmessung & Verschluss</h4>
                <p className="ml-6 text-gray-600">Nach Erreichen der Normfeuchtigkeit werden die Bohrungen fachgerecht verschlossen. Der Estrich bleibt intakt und kann sofort weiter belegt werden.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Layers className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Oft kombiniert mit anderen Trocknungslösungen</h3>
                <p className="mb-8 text-gray-300">Nasse Dämmschichten gehen fast immer mit feuchtem Estrich und feuchten Wänden einher.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Kombinations-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/friedrichshofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Friedrichshofen</Link></li>
                      <li><Link to="/einzugsgebiet/haunwoehr" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Haunwöhr</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Dämmschichttrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kann durchnässte Dämmung immer getrocknet werden?</h3>
                <p className="text-gray-600">Bei sauberem Leitungswasser ja, in den allermeisten Fällen. EPS (Styropor), XPS und Mineralfaserplatten sind gut trocknungsfähig. Bei kontaminiertem Wasser (Abwasser, Hochwasser) oder bei stark verklumpter Schüttdämmung empfehlen wir jedoch den Austausch.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert eine Dämmschichttrocknung?</h3>
                <p className="text-gray-600">Typischerweise 14–28 Tage, abhängig von der Dämmstärke, dem Durchfeuchtungsgrad und der betroffenen Fläche. Wir messen regelmäßig und informieren Sie laufend über den Fortschritt.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Werden die Kernbohrungen nach der Trocknung wieder verschlossen?</h3>
                <p className="text-gray-600">Ja, selbstverständlich. Die Bohrungen werden nach Abschluss der Trocknung mit speziellem Estrichmörtel oder Injektionsharz verschlossen. Die Stellen sind danach kaum sichtbar und der Estrich voll belastbar.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default DaemmschichttrocknungPage;
