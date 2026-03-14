import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, ThumbsUp, MapPin, CheckCircle, Droplets, Wrench, AlertTriangle, PhoneCall, FileText, Home, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WasserschadensanierungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>BESTE Wasserschadensanierung Ingolstadt | Trockfix Bautrocknung | 24/7 Notdienst</title>
        <meta name="description" content="Professionelle Wasserschadensanierung in Ingolstadt: Von der Schadensmeldung bis zur kompletten Wiederherstellung. Trockfix – Ihr TÜV-zertifizierter Partner mit direkter Versicherungsabwicklung." />
        <link rel="canonical" href="https://trockfix.de/wasserschadensanierung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0c2d48] to-[#1a3a5c] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#00BCD4] font-bold tracking-wider uppercase text-sm mb-4 block">TÜV-zertifizierter Fachbetrieb</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Wasserschadensanierung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Vom Rohrbruch bis zur kompletten Wiederherstellung – wir managen Ihren Wasserschaden von A bis Z.
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
              <span>Theoderichstraße 8, Ingolstadt</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <FileText className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>Direkte Versicherungsabwicklung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Clock className="text-[#00BCD4] w-6 h-6 mr-3" />
              <span>24/7 Soforthilfe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#00BCD4] pb-2 inline-block">
              Professionelle Wasserschadensanierung in Ingolstadt
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Ein Wasserschaden trifft Hausbesitzer und Mieter oft unerwartet – ob durch einen 
              geplatzten Schlauch der Waschmaschine, einen Rohrbruch in der Wand oder 
              eindringendes Regenwasser. In jedem Fall zählt schnelles Handeln, um die 
              Schäden an Bausubstanz und Einrichtung so gering wie möglich zu halten.
            </p>

            <p className="mb-8">
              Als Fachbetrieb für Wasserschadensanierung in Ingolstadt und Umgebung bieten wir 
              Ihnen den kompletten Service aus einer Hand: Von der <strong>ersten Schadensaufnahme</strong> über 
              die <strong>technische Trocknung</strong> bis hin zur <strong>vollständigen Wiederherstellung</strong> Ihrer 
              Räumlichkeiten. Dabei setzen wir auf modernste Messtechnik – wie Infrarot-Thermografie 
              und kapazitive Feuchtigkeitsmessung –, um das tatsächliche Ausmaß des Schadens 
              präzise zu erfassen. So vermeiden wir unnötige Eingriffe und halten die Kosten transparent.
            </p>

            <p className="mb-8">
              Besonders wichtig: Wir übernehmen auf Wunsch die <strong>gesamte Kommunikation mit 
              Ihrer Versicherung</strong>. Von der Schadensmeldung über die Dokumentation bis zur 
              Abrechnung – Sie müssen sich um nichts kümmern. In den meisten Fällen werden 
              die Kosten einer Wasserschadensanierung von der Gebäude- oder 
              Hausratversicherung übernommen, sofern der Schaden durch 
              bestimmungswidrig austretendes Leitungswasser verursacht wurde.
            </p>

            <div className="bg-[#f0f9ff] border border-[#bae6fd] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="text-[#00BCD4] w-8 h-8 mr-3" />
                Was uns als Sanierer auszeichnet:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Home className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Alles aus einer Hand:</strong> Trocknung, Schimmelprävention, Estrichsanierung und Malerarbeiten – wir koordinieren sämtliche Gewerke für Sie.</span>
                </li>
                <li className="flex items-start">
                  <FileText className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Versicherungsservice:</strong> Wir erstellen die komplette Schadensdokumentation und rechnen direkt mit Ihrer Versicherung ab.</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-[#00BCD4] mr-3 shrink-0 mt-1" />
                  <span><strong>Schnelle Reaktionszeit:</strong> Durch unseren Standort in Ingolstadt sind wir innerhalb kürzester Zeit bei Ihnen vor Ort.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              So läuft Ihre Wasserschadensanierung ab
            </h2>
            <p className="mb-8">
              Unser bewährtes 4-Schritte-Verfahren sorgt dafür, dass Ihr Wasserschaden schnell und gründlich beseitigt wird:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#00BCD4]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sofort-Inspektion & Schadensdokumentation</h4>
                <p className="ml-6 text-gray-600">Wir erfassen das Schadensausmaß mit Feuchtigkeitsmessgeräten und Wärmebildkamera und erstellen eine lückenlose Dokumentation für Ihre Versicherung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Wasserentfernung & Sicherung</h4>
                <p className="ml-6 text-gray-600">Stehendes Wasser wird abgepumpt, betroffene Möbel gesichert und durchnässte Materialien fachgerecht entfernt, um Folgeschäden zu vermeiden.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Technische Trocknung & Monitoring</h4>
                <p className="ml-6 text-gray-600">Aufstellung von Kondenstrocknern, Adsorptionstrocknern oder Seitenkanalverdichtern – je nach Schadensart. Regelmäßige Kontrollmessungen sichern den Fortschritt.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#00BCD4] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Sanierung & Wiederherstellung</h4>
                <p className="ml-6 text-gray-600">Nach erfolgreicher Abschlussmessung: Estrich, Putz, Malerarbeiten, Bodenbeläge – wir stellen den Originalzustand Ihrer Räume wieder her.</p>
              </div>
            </div>

            {/* Hyperlocal Intent & Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Droplets className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Spezialisierte Leistungen bei Wasserschäden
                </h3>
                <p className="mb-8 text-gray-300">
                  Je nach Art und Umfang Ihres Wasserschadens bieten wir spezialisierte 
                  Einzelleistungen an. Auch für Notfälle am Wochenende oder nachts stehen 
                  wir bereit – direkt aus dem <strong>Standort Theoderichstraße 8, 85051 Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Unsere Kernleistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung & Diagnose</Link></li>
                      <li><Link to="/wasserschadensanierung/schimmelsanierung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Schimmelsanierung</Link></li>
                      <li><Link to="/wasserschadensanierung/kellerwasserschaden" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kellerwasserschaden</Link></li>
                      <li><Link to="/wasserschadensanierung/notdienst-24h" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> 24h Notdienst</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Lokale Einsatzgebiete</h4>
                    <ul className="space-y-3">
                      <li><Link to="/einzugsgebiet/gaimersheim" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Gaimersheim</Link></li>
                      <li><Link to="/einzugsgebiet/manching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Manching</Link></li>
                      <li><Link to="/einzugsgebiet/koesching" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Kösching</Link></li>
                      <li><Link to="/einzugsgebiet/neuburg-donau" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Neuburg a.d. Donau</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">Häufige Fragen zur Wasserschadensanierung</h2>
            <div className="space-y-6">

              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Was kostet eine Wasserschadensanierung?</h3>
                <p className="text-gray-600">Die Kosten hängen vom Schadensausmaß ab – von wenigen hundert Euro bei kleineren Leitungswasserschäden bis zu fünfstelligen Beträgen bei großflächigen Schäden. In den meisten Fällen übernimmt Ihre Gebäude- oder Hausratversicherung die Kosten. Wir erstellen Ihnen vorab einen transparenten Kostenvoranschlag.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wie schnell müssen wir nach einem Wasserschaden handeln?</h3>
                <p className="text-gray-600">Idealerweise sofort. Bereits nach 24–48 Stunden steigt das Risiko für Schimmelbildung erheblich. Je schneller die Trocknung beginnt, desto geringer fallen die Folgeschäden und damit auch die Sanierungskosten aus. Unser 24/7-Notdienst ist genau dafür da.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Welche Versicherung zahlt bei Wasserschäden?</h3>
                <p className="text-gray-600">Bei Leitungswasserschäden ist die Gebäudeversicherung für fest verbaute Teile (Wände, Böden, Rohre) zuständig, die Hausratversicherung für bewegliche Gegenstände. Bei Hochwasser oder Starkregen greift die Elementarversicherung. Wir klären das gerne für Sie.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default WasserschadensanierungPage;
