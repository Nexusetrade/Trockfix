import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, PhoneCall, Thermometer, Eye, Layers, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const WandtrocknungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Wandtrocknung Ingolstadt | Trockfix | Feuchte Wände professionell trocknen</title>
        <meta name="description" content="Feuchte Wände trocknen in Ingolstadt: Trockfix setzt auf Infrarot, Überdruckverfahren und Kondenstrockner. Zerstörungsfrei, kontrolliert und mit Messprotokoll." />
        <link rel="canonical" href="https://trockfix.de/wandtrocknung" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#1f2937] to-[#111827] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Wand-Spezialist</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wandtrocknung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Feuchte Wände? Wir trocknen sie gezielt und schonend – ohne unnötige Zerstörung.
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
            <div className="flex items-center text-gray-700 font-medium">
              <Thermometer className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Infrarot-Wandtrocknung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Eye className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Zerstörungsfreie Verfahren</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Messprotokoll inklusive</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Feuchte Wände – Ursachen und professionelle Trocknung
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Feuchte Wände entstehen durch Rohrbrüche, eindringendes Regenwasser, 
              Kondensation oder aufsteigende Feuchtigkeit aus dem Erdreich. Die Folgen 
              reichen von abblätternder Farbe und Salzausblühungen bis hin zu 
              Schimmelbildung und Verlust der Wärmedämmwirkung.
            </p>

            <p className="mb-8">
              Für die Wandtrocknung setzen wir je nach Wandkonstruktion 
              unterschiedliche Verfahren ein. <strong>Infrarot-Heizplatten</strong> werden 
              direkt an die Wand gestellt und erzeugen Tiefenwärme, die die 
              Feuchtigkeit von innen nach außen treibt. Bei 
              <strong> Trockenbauwänden</strong> (Metallständer mit Gipskarton) 
              kann das <strong>Überdruckverfahren</strong> eingesetzt werden – warme 
              Luft wird in den Wandhohlraum geblasen und transportiert die 
              Feuchtigkeit ab.
            </p>

            <p className="mb-8">
              Ein wichtiger Aspekt: Nicht jede feuchte Wand hat dieselbe 
              Ursache. Wir klären mit <strong>Feuchtigkeitsmessung und Thermografie</strong>, 
              ob ein Leitungsschaden, eine bauliche Schwachstelle (Wärmebrücke) 
              oder mangelnde Belüftung der Auslöser ist. Nur so kann die 
              Trocknung nachhaltig wirken.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Thermometer className="text-[#00BCD4] w-8 h-8 mr-3" />
                Unsere Wandtrocknungs-Verfahren:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Thermometer className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Infrarot-Heizplatten:</strong> Tiefenwärme trocknet Mauerwerk von innen nach außen. Ideal für massives Mauerwerk (Ziegel, Beton, Kalksandstein). Schonend für Putz und Anstrich.</span>
                </li>
                <li className="flex items-start">
                  <Layers className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Überdruck-Verfahren:</strong> Für Hohlwände und Trockenbauwände. Warme, trockene Luft wird in den Hohlraum geblasen und nimmt die Feuchtigkeit auf.</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Kondensationstrocknung:</strong> Raumlufttrockner entziehen der Umgebungsluft Feuchtigkeit und unterstützen so die Austrocknung der Wände über die Oberfläche.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Ablauf der Wandtrocknung</h2>
            <p className="mb-8">Systematisch und kontrolliert – von der Diagnose bis zur Freigabe:</p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Diagnose der Feuchteursache</h4>
                <p className="ml-6 text-gray-600">Feuchtigkeitsmessung an mehreren Punkten und Thermografie-Aufnahmen zeigen, wo und warum die Wand feucht ist.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Verfahren auswählen & aufstellen</h4>
                <p className="ml-6 text-gray-600">Je nach Wandaufbau und Feuchtegrad: Infrarot-Platten, Überdruck-System oder Kondenstrockner werden positioniert.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontrollmessungen & Anpassung</h4>
                <p className="ml-6 text-gray-600">Regelmäßige Messungen dokumentieren den Fortschritt. Bei Bedarf werden Geräte umpositioniert oder das Verfahren angepasst.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Abschlussmessung & Oberflächensanierung</h4>
                <p className="ml-6 text-gray-600">Erreicht die Wand Normfeuchtigkeit, beginnt die Wiederherstellung: Putz ausbessern, Grundierung, Anstrich oder Tapete.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Layers className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Verwandte Trocknungsleistungen</h3>
                <p className="mb-8 text-gray-300">Feuchte Wände sind selten das einzige Problem. Oft ist auch der Estrich oder die Dämmung betroffen.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Trocknungsleistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/ringsee" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Ringsee</Link></li>
                      <li><Link to="/einzugsgebiet/kothau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kothau</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Wandtrocknung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert die Trocknung einer feuchten Wand?</h3>
                <p className="text-gray-600">Je nach Wandstärke, Material und Feuchtegrad zwischen 7 und 21 Tagen. Dünne Trockbauwände trocknen schneller als massive Ziegelwände. Infrarot-Heizplatten können den Prozess bei Massivmauerwerk erheblich beschleunigen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Überlebt meine Tapete oder Wandfarbe die Trocknung?</h3>
                <p className="text-gray-600">Dünne Dispersionsfarbe übersteht die Trocknung in vielen Fällen. Tapeten und Wandverkleidungen müssen dagegen oft entfernt werden, da sie den Trocknungsprozess behindern. Nach der Trocknung können Wände neu tapeziert oder gestrichen werden.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Woran erkenne ich, dass meine Wand feucht ist?</h3>
                <p className="text-gray-600">Typische Anzeichen: Wasserflecken, Verfärbungen, abblätternde Farbe, Salzausblühungen (weiße Kristalle), muffiger Geruch oder sichtbarer Schimmel. Auch eine kalte, „klamme" Wandoberfläche kann auf erhöhte Feuchtigkeit hindeuten.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WandtrocknungPage;
