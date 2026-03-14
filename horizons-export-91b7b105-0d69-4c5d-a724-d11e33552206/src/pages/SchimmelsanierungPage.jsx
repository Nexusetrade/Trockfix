import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Clock, MapPin, CheckCircle, Wrench, PhoneCall, AlertTriangle, Bug, Thermometer, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const SchimmelsanierungPage = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Schimmelsanierung Ingolstadt | Trockfix | Professionelle Schimmelentfernung</title>
        <meta name="description" content="Schimmel in der Wohnung? Trockfix bietet professionelle Schimmelsanierung in Ingolstadt – mit Ursachenanalyse, Sporentest und nachhaltiger Beseitigung. TÜV-zertifiziert." />
        <link rel="canonical" href="https://trockfix.de/schimmelsanierung" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1a2a1a] to-[#0f2a0f] text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://horizons-cdn.hostinger.com/91b7b105-0d69-4c5d-a724-d11e33552206/0ba420891c946c0f1a564c023bda42e3-QT2rQ.webp')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="text-[#4CAF50] font-bold tracking-wider uppercase text-sm mb-4 block">Gesundheitsschutz & Prävention</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">Schimmelsanierung Ingolstadt</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
            Schimmel erkennen, Ursache beseitigen und nachhaltig sanieren – für ein gesundes Raumklima.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="tel:01713498807" className="bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all shadow-lg hover:shadow-[#00BCD4]/50 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5 mr-2 animate-pulse" />
              Beratung anfordern
            </a>
            <Link to="/kontakt" className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all">
              Schimmelcheck buchen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Local Signals */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-col md:flex-row">
            <div className="flex items-center text-gray-700 font-medium">
              <Bug className="text-[#4CAF50] w-6 h-6 mr-3" />
              <span>Sporenanalyse & Labortest</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <CheckCircle className="text-[#4CAF50] w-6 h-6 mr-3" />
              <span>Ursachenbeseitigung statt Symptombehandlung</span>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
              <Shield className="text-[#4CAF50] w-6 h-6 mr-3" />
              <span>TÜV-zertifizierter Fachbetrieb</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          
          <div className="prose prose-lg md:prose-xl max-w-none text-gray-600 leading-relaxed">
            
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-2 border-[#4CAF50] pb-2 inline-block">
              Schimmelpilz – ein Gesundheitsrisiko, das man ernst nehmen muss
            </h2>
            
            <p className="mb-6 font-medium text-gray-700 text-xl">
              Schimmel in Wohnräumen ist weit mehr als ein optisches Problem. 
              Die Sporen von Schimmelpilzen wie <em>Aspergillus</em>, <em>Cladosporium</em> oder 
              dem gefürchteten <em>Stachybotrys</em> (Schwarzschimmel) können Atemwegserkrankungen, 
              Allergien und chronische Beschwerden auslösen – besonders bei Kindern, 
              Senioren und immungeschwächten Personen.
            </p>

            <p className="mb-8">
              Die häufigsten Ursachen für Schimmelbefall sind <strong>Feuchteschäden nach 
              Wasserschäden</strong>, unzureichende Belüftung, Wärmebrücken in der Gebäudehülle 
              oder defekte Abdichtungen. Entscheidend ist: Wer nur den sichtbaren 
              Schimmel überstreicht oder abwischt, behandelt lediglich das Symptom. 
              Der Pilz wächst unter der Oberfläche weiter und verschlimmert sich.
            </p>

            <p className="mb-8">
              Bei einer professionellen Schimmelsanierung gehen wir der <strong>Ursache auf 
              den Grund</strong>. Mittels Feuchtigkeitsmessung und ggf. Thermografie identifizieren 
              wir die Feuchtigkeitsquelle. Auf Wunsch nehmen wir Proben zur 
              <strong> Laboranalyse</strong>, um die Schimmelart und die Sporenbelastung in der 
              Raumluft genau zu bestimmen. Erst dann erfolgt die fachgerechte 
              Sanierung – mit HEPA-Filtern, Abschottung und biozider Behandlung.
            </p>

            <div className="bg-[#f0fdf4] border border-[#bbf7d0] p-8 rounded-2xl my-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="text-amber-500 w-8 h-8 mr-3" />
                Wann ist eine professionelle Schimmelsanierung nötig?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Bug className="w-6 h-6 text-[#4CAF50] mr-3 shrink-0 mt-1" />
                  <span><strong>Sichtbarer Befall über 0,5 m²:</strong> Ab dieser Fläche empfiehlt das Umweltbundesamt die Sanierung durch einen Fachbetrieb – Eigenmaßnahmen reichen nicht mehr aus.</span>
                </li>
                <li className="flex items-start">
                  <Thermometer className="w-6 h-6 text-[#4CAF50] mr-3 shrink-0 mt-1" />
                  <span><strong>Modriger Geruch ohne sichtbaren Schimmel:</strong> Verdeckter Schimmel hinter Verkleidungen, in Hohlräumen oder unter Estrich ist besonders gefährlich und erfordert eine professionelle Ortung.</span>
                </li>
                <li className="flex items-start">
                  <Wind className="w-6 h-6 text-[#4CAF50] mr-3 shrink-0 mt-1" />
                  <span><strong>Wiederkehrender Schimmel nach eigener Reinigung:</strong> Wenn der Schimmel nach dem Putzen immer wiederkommt, wurde die Ursache nicht beseitigt – genau hier setzen wir an.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-16">
              Unser Sanierungsablauf bei Schimmelbefall
            </h2>
            <p className="mb-8">
              Jede Schimmelsanierung folgt einem strengen Hygieneprotokoll:
            </p>
            
            <div className="space-y-8 pl-4 border-l-4 border-[#4CAF50]/30 ml-4 mb-16">
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#4CAF50] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Inspektion & Ursachenanalyse</h4>
                <p className="ml-6 text-gray-600">Feuchtigkeitsmessung, Thermografie und optional Raumluft-Sporentest. Wir klären, woher die Feuchtigkeit kommt – ob Leck, Wärmebrücke oder Kondensation.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#4CAF50] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Abschottung & Schutzmaßnahmen</h4>
                <p className="ml-6 text-gray-600">Der befallene Bereich wird mit Folien abgeschottet, um eine Sporenverbreitung zu verhindern. Wir arbeiten mit HEPA-Luftreinigern und persönlicher Schutzausrüstung.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#4CAF50] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Entfernung & Desinfektion</h4>
                <p className="ml-6 text-gray-600">Befallene Materialien werden fachgerecht entfernt und die verbleibenden Oberflächen mit speziellen bioziden Mitteln behandelt. Anschließend erfolgt die Trocknung der Ursache.</p>
              </div>
              <div className="relative">
                <div className="absolute -left-[27px] bg-[#4CAF50] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 ml-6">Kontrollmessung & Prävention</h4>
                <p className="ml-6 text-gray-600">Nach der Sanierung prüfen wir die Raumluftqualität erneut. Wir beraten Sie zu Lüftungsverhalten, Dämmoptimierung und weiteren Präventionsmaßnahmen.</p>
              </div>
            </div>

            {/* Internal Silo Linking */}
            <div className="bg-gray-900 text-white p-10 rounded-3xl mt-20 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-5">
                <Bug className="w-64 h-64" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Schimmel hat oft eine Vorgeschichte – wir kennen sie
                </h3>
                <p className="mb-8 text-gray-300">
                  Schimmelbefall entsteht fast immer als Folge eines Feuchteproblems. 
                  Von der <strong>Leckortung</strong> bis zur <strong>Geruchsneutralisation</strong> nach der Sanierung 
                  bieten wir alle dazugehörigen Leistungen direkt aus <strong>Ingolstadt</strong>.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-gray-700 pt-8">
                  <div>
                    <h4 className="font-bold text-[#00BCD4] mb-4 uppercase tracking-wider text-sm">Verwandte Leistungen</h4>
                    <ul className="space-y-3">
                      <li><Link to="/wasserschadensanierung/leckortung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Leckortung</Link></li>
                      <li><Link to="/wasserschadensanierung/geruchsneutralisation" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Geruchsneutralisation</Link></li>
                      <li><Link to="/bautrocknung/wandtrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Wandtrocknung</Link></li>
                      <li><Link to="/bautrocknung/daemmschichttrocknung" className="text-gray-300 hover:text-white hover:underline transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-[#00BCD4] rounded-full mr-2"></span> Dämmschichttrocknung</Link></li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-20">FAQ – Schimmelsanierung</h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ist Schimmel in der Wohnung gefährlich?</h3>
                <p className="text-gray-600">Ja, insbesondere bei längerem Kontakt. Schimmelsporen können Atemwegsinfekte, Allergien und Asthma auslösen. Besonders gefährdet sind Kinder, ältere Menschen und Personen mit geschwächtem Immunsystem. Bei sichtbarem Befall sollte immer zeitnah gehandelt werden.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kann ich Schimmel selbst entfernen?</h3>
                <p className="text-gray-600">Kleine Flächen unter 0,5 m² können laut Umweltbundesamt mit 70%igem Ethanol selbst behandelt werden. Bei größerem Befall, verdecktem Schimmel oder unklarer Ursache sollten Sie unbedingt einen Fachbetrieb beauftragen, um Gesundheitsrisiken und Sporenverbreitung zu vermeiden.</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Wer trägt die Kosten für eine Schimmelsanierung?</h3>
                <p className="text-gray-600">Wenn der Schimmel durch einen Wasserschaden verursacht wurde, übernimmt in der Regel die Gebäudeversicherung die Kosten. Bei baulichen Mängeln ist der Eigentümer zuständig. Mieter haben Anspruch auf Mängelbeseitigung durch den Vermieter, sofern kein eigenes Fehlverhalten vorliegt.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default SchimmelsanierungPage;
