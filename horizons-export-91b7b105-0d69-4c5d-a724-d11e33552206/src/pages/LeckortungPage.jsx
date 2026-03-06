import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, ThumbsUp, MapPin, CheckCircle, Droplets, Wrench, AlertTriangle, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const LeckortungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>BESTE Leckortung Ingolstadt | Trockfix Bautrocknung | 24/7 Notdienst</title>
        <meta name="description" content="Suchen Sie Fachleute für Leckortung Ingolstadt? Trockfix ist Ihr zertifizierter Ansprechpartner vor Ort (Theoderichstraße 8, Ingolstadt). Schnelle Hilfe, faire Preise!" />
        <link rel="canonical" href="https://trockfix.de/leckortung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2a3a] to-[#0f172a] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">Zertifizierter Fachbetrieb</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Leckortung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Ihre lokalen Experten für Leckortung direkt in Ingolstadt. Schnell vor Ort, wenn jede Minute zählt.
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
              <span>Lokale Präsenz in Ingolstadt</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Direkte Versicherungsabwicklung</span>
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
              Fachgerechte Leckortung in Ingolstadt
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Wenn Sie in Ingolstadt und Umgebung ein Problem im Bereich Leckortung haben, 
              ist schnelles und professionelles Handeln gefragt. Die Trockfix Bautrocknung ist Ihr 
              TÜV-zertifizierter Partner direkt aus der Region.
            </p>

            <p className="mb-8">
              Ein Leitungswasserschaden, Schimmelbefall oder feuchte Wände können die 
              Bausubstanz Ihrer Immobilie massiv gefährden. Als Spezialisten für Leckortung Ingolstadt 
              verfügen wir über modernste Messtechnik, Hochleistungs-Trocknungsgeräte (Kondenstrockner, 
              Adsorptionstrockner) und das nötige Know-how, um Folgeschäden effektiv zu minimieren. 
              Wir begleiten Sie in Ingolstadt vom ersten Schadensbericht bis zur fertigen Sanierung.
            </p>

            <div className="bg-[#f8fcfe] border border-[#e1f5fe] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />
                Unser Versprechen an Sie in Ingolstadt:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Shield className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>100% Kostentransparenz:</strong> Sie erhalten vorab einen detaillierten Plan für die Leckortung.</span>
                </li>
                <li className="flex items-start">
                  <Droplets className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Moderne Verfahren:</strong> Zerstörungsfreie Methoden (z.B. bei der Leckortung oder Dämmschichttrocknung) wo immer möglich.</span>
                </li>
                <li className="flex items-start">
                  <Wrench className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Komplettservice:</strong> Wir messen, trocknen, sanieren und rechnen – auf Wunsch – direkt mit der Hausrat- oder Wohngebäudeversicherung ab.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Ablauf der Leckortung
            </h2>
            <p className="mb-8">
              Unser strukturierter Prozess in Ingolstadt garantiert maximale Effizienz und Sicherheit für Ihr Gebäude:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-gray-200 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Schadensaufnahme & Analyse</h4>
                <p className="ml-6 text-gray-600">Mittels Feuchtigkeitsmessung und ggf. Thermografie lokalisieren wir den Kern des Problems exakt.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sofortmaßnahmen & Trocknung</h4>
                <p className="ml-6 text-gray-600">Aufbau der Trocknungssysteme (Seitenkanalverdichter, HEPA-Filter zur Schimmelprävention) und Absaugung von stehendem Wasser.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sanierung & Abschluss</h4>
                <p className="ml-6 text-gray-600">Rückbau der Geräte nach erfolgreicher Kontrollmessung und anschließende Wiederherstellung der Oberflächen.</p>
              </div>
            </div>

            {/* Hyperlocal Intent & Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <MapPin className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Wir sind für Sie da – in Ingolstadt und der gesamten Region!
                </h3>
                <p className="mb-8 text-gray-300">
                  Unser Hauptstandort in der <strong>Theoderichstraße 8, 85051 Ingolstadt</strong> ermöglicht es uns, 
                  besonders schnell bei Ihnen zu sein. Ein lokaler Ansprechpartner ist bei 
                  Wasserschäden Gold wert.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Unsere Kernleistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung & Diagnose</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelentfernung</Link></li>
                      <li><Link to="/bautrocknung/estrichtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Estrichtrocknung</Link></li>
                      <li><Link to="/bautrocknung/neubautrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neubautrocknung</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Lokale Einsatzgebiete</h4>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">Häufig gestellte Fragen (FAQ) zur Leckortung</h2>
            <div className="space-y-6">

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie lange dauert eine professionelle Leckortung?</h3>
                <p className="text-gray-600">Abhängig von der Durchfeuchtung und den Materialien dauert eine Leckortung in der Regel zwischen 10 und 21 Tagen. Wir überwachen den Prozess engmaschig mit Feuchtigkeitsmessungen.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Übernimmt die Versicherung die Kosten für Leckortung?</h3>
                <p className="text-gray-600">Bei Leitungswasserschäden greift meist die Gebäudeversicherung (für fest verbundene Teile) oder die Hausratversicherung (für bewegliche Einrichtung). Wir unterstützen Sie gerne bei der Dokumentation und direkten Abrechnung.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Können die Räume während der Leckortung bewohnt werden?</h3>
                <p className="text-gray-600">Ja, unsere modernen Trocknungsgeräte laufen relativ leise und sind zum Teil mit HEPA-Filtern ausgestattet, um die Raumluftqualität zu erhalten. Einschränkungen gibt es natürlich im direkten Schadensbereich.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LeckortungPage;
