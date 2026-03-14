import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, PhoneCall, Flame, Thermometer, CheckCircle, Clock, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const BaubeheizungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Baubeheizung Ingolstadt | Trockfix | Mobile Heizung für Baustellen</title>
        <meta name="description" content="Baubeheizung in Ingolstadt: Mobile Heizgeräte für Baustellen, Rohbauten und Trocknungsprojekte. Trockfix liefert, stellt auf und berät – auch im Winter." />
        <link rel="canonical" href="https://trockfix.de/baubeheizung" />
      </Helmet>

      <section className="bg-gradient-to-br from-[#2a1a0a] to-[#1a0f05] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-orange-400 font-bold tracking-wider uppercase text-sm mb-4 block">Bau-Heizung</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Baubeheizung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Warme Baustelle – auch im Winter. Mobile Heizgeräte für Trocknung und Innenausbau.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Heizung anfragen
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Beratung erhalten
            </Link>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium"><Flame className="text-orange-500 w-6 h-6 mr-3" /><span>Elektrisch & Öl-betrieben</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Thermometer className="text-orange-500 w-6 h-6 mr-3" /><span>Optimal für Trocknungsunterstützung</span></div>
            <div className="flex items-center text-gray-700 font-medium"><Clock className="text-orange-500 w-6 h-6 mr-3" /><span>Flexible Mietdauer</span></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-orange-500 pb-2 inline-block">Baubeheizung – warum warme Luft beim Trocknen hilft</h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Trocknung funktioniert umso besser, je wärmer die Umgebungsluft ist. Warme Luft nimmt deutlich mehr Feuchtigkeit auf als kalte – bei 20°C fast doppelt so viel wie bei 10°C. Im Winter, wenn Außentemperaturen unter den Gefrierpunkt fallen, ist eine <strong>Baubeheizung oft Voraussetzung</strong> für eine effektive Trocknung.
            </p>

            <p className="mb-8">
              Unsere mobilen Heizgeräte schaffen auf Baustellen, in Rohbauten und Sanierungsobjekten die ideale Betriebstemperatur für Kondenstrockner (ab 15°C). Wir bieten <strong>elektrische Heizgebläse</strong> (3–15 kW) für kleinere Räume und <strong>Öl-Heizautomaten</strong> (bis 80 kW) für große Hallen, Tiefgaragen und Rohbauten. Alle Geräte sind sicherheitsgeprüft und für den Baustelleneinsatz zugelassen.
            </p>

            <p className="mb-8">
              Besonders häufig wird Baubeheizung bei der <strong>Neubautrocknung im Winter</strong>, bei der <strong>Estrichtrocknung</strong> und beim <strong>frostgefährdeten Innenausbau</strong> eingesetzt. Die Kombination aus Heizung und Kondenstrockner ist das effizienteste Trocknungsverfahren für beheizte Räume – schneller und energieeffizienter als reine Adsorptionstrocknung.
            </p>

            <div className="bg-[#fff7ed] border border-[#fed7aa] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center"><Flame className="text-orange-500 w-8 h-8 mr-3" />Wann ist Baubeheizung sinnvoll?</h3>
              <ul className="space-y-4">
                <li className="flex items-start"><Thermometer className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" /><span><strong>Winterbaustelle:</strong> Raumtemperatur unter 15°C – Kondenstrockner arbeiten nicht mehr effizient. Heizung schafft die nötige Basis.</span></li>
                <li className="flex items-start"><Wrench className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" /><span><strong>Estrich- und Putztrocknung:</strong> Frisch eingebauter Estrich und Putz müssen bei mindestens 5°C aushärten und ab 15°C optimal trocknen.</span></li>
                <li className="flex items-start"><Shield className="w-6 h-6 text-orange-500 mr-3 shrink-0 mt-1" /><span><strong>Frostschutz:</strong> Frischer Beton und Estrich sind frostempfindlich. Ohne Beheizung drohen irreparable Frostschäden an der Baukonstruktion.</span></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">Ablauf der Baubeheizung</h2>
            <div className="space-y-8 pl-4 border-l-4 border-orange-300 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Bedarfsanalyse</h4>
                <p className="ml-6 text-gray-600">Raumgröße, Gebäudezustand und gewünschte Temperatur bestimmen Art und Anzahl der Heizgeräte.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Lieferung & Aufstellung</h4>
                <p className="ml-6 text-gray-600">Wir liefern die Heizgeräte auf Ihre Baustelle und stellen sie sicher auf. Bei Öl-Heizautomaten schließen wir den Brennstofftank an.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Betrieb & Monitoring</h4>
                <p className="ml-6 text-gray-600">Die Heizung läuft thermostatgesteuert. Bei Bedarf führen wir Temperaturkontrollen durch und füllen Brennstoff nach.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Abbau & Abholung</h4>
                <p className="ml-6 text-gray-600">Nach Erreichen der Zieltemperatur oder Ende der Bauphase holen wir die Geräte wieder ab.</p>
              </div>
            </div>

            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5"><Flame className="w-64 h-64" /></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">Heizung + Trocknung = perfektes Team</h3>
                <p className="mb-8 text-gray-300">Baubeheizung und Trocknung gehören zusammen – vor allem im Winter.</p>
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Kombinations-Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/bautrocknerverleih" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknerverleih</Link></li>
                      <li><Link to="/bautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Bautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Einsatzgebiet</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/pfaffenhofen" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Pfaffenhofen</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Baubeheizung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welche Temperatur sollte auf der Baustelle herrschen?</h3>
                <p className="text-gray-600">Mindestens 15°C für effektive Kondensationstrocknung. Für Putz- und Estricharbeiten mindestens 5°C. Bei Fußbodenheizungs-Aufheizprogrammen beginnen wir bei 25°C und steigern schrittweise auf 50°C.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sind Öl-Heizautomaten auf Baustellen sicher?</h3>
                <p className="text-gray-600">Ja, unsere Geräte sind sicherheitsgeprüft und TÜV-zugelassen. Sie verfügen über Thermostatsteuerung und Überhitzungsschutz. Der Aufstellort muss gut belüftet sein – wir beraten Sie bei der Positionierung.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was kostet Baubeheizung?</h3>
                <p className="text-gray-600">Die Kosten hängen vom Gerätetyp, der Mietdauer und dem Brennstoffverbrauch ab. Elektrische Heizgebläse ab ca. 10–20 €/Tag, Öl-Heizautomaten ab ca. 30–60 €/Tag zzgl. Brennstoff. Wir erstellen Ihnen ein individuelles Angebot.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default BaubeheizungPage;
